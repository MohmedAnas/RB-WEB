import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import pkg from 'pg';
import 'dotenv/config';
const { Pool } = pkg;
const app = express();
const port = process.env.PORT || 5000;

// ===== DEFINE YOUR TOKENS =========
const allowedTokens = [
  "Super-token-739",
  "Normal-token-139",
  "Middle-token-239",
  "Low-token-339"
];

// ===== TOKEN CHECK MIDDLEWARE ======
function verifyToken(req, res, next) {
  // Check custom header, Authorization header, or even query param (as fallback)
  const token =
    req.headers["x-access-token"] ||
    req.headers["authorization"] ||
    req.query.token;
  if (allowedTokens.includes(token)) {
    return next();
  }
  return res.status(401).json({ message: "Unauthorized or Invalid Token" });
}

// ===== CORS SETUP =========
const allowedOrigins = [
  "https://rbcomputers123.netlify.app",
  "https://68b8164bde2847c42f6d3cb8--rbcomputers123.netlify.app",
  "http://localhost:3000",
  "http://127.0.0.1:3000"
];
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `CORS policy: Origin ${origin} not allowed`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));
app.use(express.json());

// ===== NODEMAILER SETUP =====
const gmailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL_USER,
    pass: process.env.GMAIL_EMAIL_PASS,
  },
});

// ===== POSTGRESQL SETUP =====
const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT || 5432,
  ssl: process.env.PG_SSL === 'true' ? { rejectUnauthorized: false } : false,
});
// Test PostgreSQL connection on startup
(async () => {
  try {
    const client = await pool.connect();
    console.log('Successfully connected to PostgreSQL database!');
    client.release();
  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error);
  }
})();

app.get('/', (req, res) => {
  res.status(200).send('R.B. Computers & Software Solution Backend Server (Postgres) is running!');
});

// Insert feedback (enquiry)
app.post('/api/feedback', async (req, res) => {
  const { enquiryType, name, phone, email, description } = req.body;
  let client;
  try {
    client = await pool.connect();
    const result = await client.query(
      `INSERT INTO inquiries (enquirytype, name, phone, email, description) 
      VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [enquiryType, name, phone, email, description]
    );
    const ticketId = result.rows[0].id;
    // Send email
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
    if (client) client.release();
  }
});

// Schedule meeting: Send customer email (NO DB CHANGE)
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

// ====== PROTECTED ENDPOINTS BELOW ==========
// Update inquiry (status, disposition, assignedTo, resolvedAt)
app.put('/api/inquiries/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  const { status, disposition, assignedTo, resolvedAt } = req.body;
  let client;
  try {
    client = await pool.connect();
    const fields = [];
    const params = [];
    let idx = 1;
    if (status !== undefined) { fields.push(`status = $${idx++}`); params.push(status); }
    if (disposition !== undefined) { fields.push(`disposition = $${idx++}`); params.push(disposition); }
    if (assignedTo !== undefined) { fields.push(`assignedto = $${idx++}`); params.push(assignedTo); }
    if (resolvedAt !== undefined) { fields.push(`resolvedat = $${idx++}`); params.push(resolvedAt ? new Date(resolvedAt) : null); }
    if (fields.length === 0) return res.status(400).json({ message: "No fields to update" });
    params.push(id); // For WHERE
    const sql = `UPDATE inquiries SET ${fields.join(", ")} WHERE id = $${idx}`;
    await client.query(sql, params);
    res.status(200).json({ message: "Inquiry updated successfully" });
  } catch (error) {
    console.error("Failed to update inquiry:", error);
    res.status(500).json({ message: "Failed to update inquiry." });
  } finally {
    if (client) client.release();
  }
});
// Read all inquiries (show newest first)
app.get('/api/inquiries', verifyToken, async (req, res) => {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query('SELECT * FROM inquiries ORDER BY submittedat DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Failed to fetch inquiries:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch inquiries from database.' });
  } finally {
    if (client) client.release();
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
