import React from 'react';
import { motion } from 'framer-motion';
import { IconCalendarEvent, IconClock, IconLink } from '@tabler/icons-react';

const allWebinars = [
    {
        title: "Trade Specific – Built for Builders: BUSY Software for Bricks & Aggregates Retailers",
        description: "Designed for bricks & cement trade – BUSY simplifies billing and credit tracking.",
        link: "https://zoom.us/webinar/register/WN_RvDHm8l0Tg2MPUwpCticnw#/registration",
        dateTime: "2025-08-22T17:00:00",
        imageUrl: "/industryIcon.png"
    },
    {
        title: "Outstanding Report + Auto Interest in BUSY – Simple & Powerful",
        description: "Track party-wise outstanding and auto-calculate interest easily in BUSY – all in a few clicks.",
        link: "https://zoom.us/webinar/register/WN_drczWOmtRamR-5NTuU9bbw#/registration",
        dateTime: "2025-08-29T17:00:00",
        imageUrl: "/financial-reporting-and-analytics.png"
    },
    {
        title: "BUSY Makes GSTR-1 Filing Effortless – From Upload to Final Submit!",
        description: "GSTR-1 filing in BUSY is now faster and simpler – end-to-end in just a few clicks!",
        link: "http://zoom.us/webinar/register/WN_1lTxWWg6SESM6gV-ONWM2w#/registration",
        dateTime: "2025-09-05T17:00:00",
        imageUrl: "/Accurate-and-Timely-GST-Return-Filing.jpg"
    },
    {
        title: "Run Your Business On-the-Go with BUSY Mobile App!",
        description: "BUSY Mobile App puts your business at your fingertips – transactions, reports, reminders & more.",
        link: "https://zoom.us/webinar/register/WN_yTRfR52dQ-Wo-P3COH62QQ#/registration",
        dateTime: "2025-09-12T17:00:00",
        imageUrl: "/mobile-application.webp"
    },
    {
        title: "Advanced Invoice Customization in BUSY – Tips, Tricks & Templates",
        description: "Customize invoices your way in BUSY – with logo, layout, and templates that suit your business needs.",
        link: "https://zoom.us/webinar/register/WN_S1q3wYj7TxmOd9IE2XOlFw#/registration",
        dateTime: "2025-09-19T17:00:00",
        imageUrl: "/Auto-generate-E-Invoices-Quickly.jpg"
    },
    {
        title: "Trade Specific – BUSY – The Perfect Fit for Wood & Plywood Retail Business",
        description: "BUSY – A perfect accounting fit for Wood & Plywood businesses with unit-wise stock tracking, custom pricing & trade-ready billing.",
        link: "https://zoom.us/webinar/register/WN_3uhmlprkTmGqJbw7NJ7vOA#/registration",
        dateTime: "2025-09-26T17:00:00",
        imageUrl: "/Multiple-Warehouse-Management-.jpg"
    }
];

const NumberedNav = ({ pages, currentPage, setCurrentPage }) => {
    return (
        <div className="flex justify-center items-center space-x-2 my-8">
            {pages.map((page, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentPage(page.pageName)}
                    className={`h-10 w-10 flex items-center justify-center rounded-full font-bold transition-colors duration-300
                    ${currentPage === page.pageName ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

const pages = [
    { name: "Basics of GST", pageName: 'gstbasics' },
    { name: "E-Way Bill", pageName: 'ewaybill' },
    { name: "GST Returns", pageName: 'gstreturns' },
    { name: "A Guide to Invoicing", pageName: 'gstinvoicing' },
    { name: "TDS", pageName: 'tds' },
];

const Webinar = ({ setCurrentPage }) => {
    const upcomingWebinars = allWebinars.filter(webinar => {
        const webinarTime = new Date(webinar.dateTime);
        const currentTime = new Date();
        const sixHoursInMs = 6 * 60 * 60 * 1000;
        return webinarTime.getTime() > currentTime.getTime() - sixHoursInMs;
    });

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-inter">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold"
                    >
                        Upcoming Webinars
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto"
                    >
                        Whether you are an existing user of BUSY & want to explore all features of BUSY or you wish to evaluate BUSY for your business or just want to learn using BUSY, these webinars are just the right source for you. Our webinars will help you stay up-to-date on the latest trends, best practices, and tips and tricks for getting the most out of your BUSY accounting software. On this page, you will find a schedule of upcoming webinars, as well as recordings of past webinars.
                    </motion.p>
                </div>
            </section>

            {/* Webinars List Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.1 }}
                        className="space-y-6"
                    >
                        {upcomingWebinars.length > 0 ? (
                            upcomingWebinars.map((webinar, index) => (
                                <motion.div
                                    key={index}
                                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                    className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
                                >
                                    <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden shadow-md">
                                        <img src={webinar.imageUrl} alt={`Thumbnail for ${webinar.title}`} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900">{webinar.title}</h3>
                                        <p className="text-gray-600 mt-2">{webinar.description}</p>
                                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mt-4">
                                            <div className="flex items-center space-x-2 text-sm text-gray-700">
                                                <IconCalendarEvent size={20} className="text-indigo-500" />
                                                <span>{formatDate(webinar.dateTime)}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-sm text-gray-700">
                                                <IconClock size={20} className="text-indigo-500" />
                                                <span>Time: {new Date(webinar.dateTime).toLocaleTimeString('en-IN', { timeZoneName: 'short' })}</span>
                                            </div>
                                            <a
                                                href={webinar.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center bg-indigo-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
                                            >
                                                <IconLink size={20} className="mr-2" />
                                                Register
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 text-lg">No upcoming webinars at this time. Please check back later!</p>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Webinar;
