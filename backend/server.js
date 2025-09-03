import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import mysql from 'mysql2/promise';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Create Nodemailer transporter for Gmail
const gmailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_EMAIL_USER,
        pass: process.env.GMAIL_EMAIL_PASS,
    },
});

// MySQL database connection pool
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test the MySQL connection on startup
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Successfully connected to MySQL database!');
        connection.release();
    } catch (error) {
        console.error('Error connecting to MySQL:', error);
    }
})();

// Root route
app.get('/', (req, res) => {
    res.status(200).send('R.B. Computers & Software Solution Backend Server is running successfully!');
});

// API endpoint to handle form submissions
app.post('/api/feedback', async (req, res) => {
    const { enquiryType, name, phone, email, description } = req.body;
    let connection;

    try {
        // Step 1: Save submission to MySQL database
        connection = await pool.getConnection();
        const [result] = await connection.execute(
            `INSERT INTO inquiries (enquiryType, name, phone, email, description) VALUES (?, ?, ?, ?, ?)`,
            [enquiryType, name, phone, email, description]
        );
        const ticketId = result.insertId;

        // Step 2: Send email via Nodemailer to Admin/Recipient
        const emailSubject = `New ${enquiryType} from R.B. Computers Website`;
        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.RECIPIENT_EMAIL,
            subject: emailSubject,
            html: `
                <p>You have a new contact form submission:</p>
                <ul>
                    <li><strong>Ticket ID:</strong> ${ticketId}</li>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Enquiry Type:</strong> ${enquiryType}</li>
                    <li><strong>Message:</strong> ${description}</li>
                </ul>
            `,
        };
        await gmailTransporter.sendMail(mailOptions);

        res.status(200).json({ status: 'success', message: 'Request submitted successfully!' });

    } catch (error) {
        console.error('Submission failed:', error);
        res.status(500).json({ status: 'error', message: `Failed to submit request: ${error.message}` });
    } finally {
        if (connection) connection.release();
    }
});

// ========== SCHEDULE MEETING EMAIL ENDPOINT ==========
app.post('/api/schedule-meeting', async (req, res) => {
    const { to, customerName, scheduleDate, scheduleDesc, scheduledBy } = req.body;

    if (!to || !customerName || !scheduleDate || !scheduleDesc) {
        return res.status(400).json({ success: false, message: 'Missing required fields.' });
    }

    const formattedDate = new Date(scheduleDate).toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const emailSubject = "Your Meeting/Demo Has Been Scheduled";
    const mailOptions = {
        from: `"RB Computers" <${process.env.GMAIL_EMAIL_USER}>`,
        to,
        subject: emailSubject,
        html: `
            <p>Dear ${customerName},</p>
            <p>
                Your meeting or demo has been scheduled.<br/>
                <strong>Date & Time:</strong> ${formattedDate}<br/>
                <strong>Description:</strong> ${scheduleDesc}<br/>
                <strong>Scheduled By:</strong> ${scheduledBy || 'Our Team'}
            </p>
            <p>If you have any questions, you can reply directly to this email.</p>
            <p><strong>Thank you,<br>RB Computers Team</strong></p>
        `,
    };

    try {
        await gmailTransporter.sendMail(mailOptions);
        console.log(`Meeting email sent successfully to customer (${to}).`);
        res.status(200).json({ success: true, message: "Meeting scheduled email sent to customer!" });
    } catch (error) {
        console.error('Error sending meeting email:', error);
        res.status(500).json({ success: false, message: 'Failed to send meeting email.' });
    }
});

// ================== UPDATE INQUIRY STATUS ENDPOINT =====================
app.put('/api/inquiries/:id', async (req, res) => {
    const { id } = req.params;
    const { status, disposition, assignedTo, resolvedAt } = req.body;
    let connection;

    try {
        connection = await pool.getConnection();
        const fields = [];
        const params = [];
        if (status !== undefined) { fields.push("status = ?"); params.push(status); }
        if (disposition !== undefined) { fields.push("disposition = ?"); params.push(disposition); }
        if (assignedTo !== undefined) { fields.push("assignedTo = ?"); params.push(assignedTo); }
        if (resolvedAt !== undefined) { fields.push("resolvedAt = ?"); params.push(resolvedAt ? new Date(resolvedAt) : null); }

        if (fields.length === 0) return res.status(400).json({ message: "No fields to update" });

        params.push(id); // For WHERE
        const sql = `UPDATE inquiries SET ${fields.join(", ")} WHERE id = ?`;
        await connection.execute(sql, params);
        res.status(200).json({ message: "Inquiry updated successfully" });
    } catch (error) {
        console.error("Failed to update inquiry:", error);
        res.status(500).json({ message: "Failed to update inquiry." });
    } finally {
        if (connection) connection.release();
    }
});

// New endpoint to fetch all inquiries
app.get('/api/inquiries', async (req, res) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const [rows] = await connection.execute('SELECT * FROM inquiries ORDER BY submittedAt DESC');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Failed to fetch inquiries:', error);
        res.status(500).json({ status: 'error', message: 'Failed to fetch inquiries from database.' });
    } finally {
        if (connection) connection.release();
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
