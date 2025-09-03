import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    IconReport,
    IconDownload,
    IconCircleCheck,
    IconQuestionMark,
    IconChevronDown
} from '@tabler/icons-react';

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

// Data for the Key Features section
const keyFeaturesData = [
    {
        icon: <IconReport size={32} />,
        title: "Automated Return Filing",
        bullets: [
            "Generate GST returns (GSTR-1, GSTR-3B) with a single click.",
            "Automate data population from your sales and purchase records.",
            "Reduce manual work and potential for errors."
        ]
    },
    {
        icon: <IconDownload size={32} />,
        title: "Reconciliation with GSTR-2A/2B",
        bullets: [
            "Download GSTR-2A/2B from the GST portal directly.",
            "Reconcile your inward supplies with supplier data to claim accurate ITC.",
            "Identify and resolve discrepancies quickly and efficiently."
        ]
    },
    {
        icon: <IconCircleCheck size={32} />,
        title: "Compliance & Alerts",
        bullets: [
            "Stay informed with automated alerts for upcoming return due dates.",
            "Ensure full compliance with all GST regulations.",
            "Generate detailed reports for internal review and auditing."
        ]
    }
];

// Data for the FAQ section
const faqsData = [
    {
        question: "What are the common GST returns filed by businesses?",
        answer: "The most common returns are GSTR-1, which details all outward supplies (sales), and GSTR-3B, which is a summary of inward and outward supplies and tax payments. Our software simplifies the generation of both."
    },
    {
        question: "How does the software help with GSTR-2A reconciliation?",
        answer: "Our software automatically downloads GSTR-2A/2B data and matches it against your purchase records. It highlights any mismatches, allowing you to quickly resolve them and claim your full Input Tax Credit (ITC)."
    },
    {
        question: "Is it possible to file GST returns directly from the software?",
        answer: "Yes, our software is designed to integrate with the GST portal. You can generate your returns and file them directly from within the application, saving you time and effort."
    },
    {
        question: "What happens if I miss a GST return due date?",
        answer: "Missing a due date can result in late fees and interest penalties. Our software provides timely alerts for all upcoming due dates, helping you stay compliant and avoid unnecessary costs."
    }
];

const pages = [
    { name: "Basics of GST", pageName: 'gstbasics' },
    { name: "E-Way Bill", pageName: 'ewaybill' },
    { name: "GST Returns", pageName: 'gstreturns' },
    { name: "A Guide to Invoicing", pageName: 'gstinvoicing' },
    { name: "TDS", pageName: 'tds' },
];

const GstReturns = ({ setCurrentPage }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-inter">
            {/* Summary Section */}
            <section className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold"
                    >
                        GST Returns: Simplifying Your Compliance
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto"
                    >
                        GST returns are a crucial part of tax compliance for any business. Our software automates the process of generating returns like GSTR-1 and GSTR-3B directly from your sales and purchase data. With features like GSTR-2A reconciliation and automatic due date alerts, you can file your returns on time and with confidence, ensuring you claim every bit of your rightful Input Tax Credit.
                    </motion.p>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-3xl font-bold text-center mb-12 text-gray-900"
                    >
                        Key Features of GST Returns Module
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {keyFeaturesData.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-indigo-500"
                            >
                                <div className="text-indigo-500 mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                                    {feature.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 md:px-8 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
                        Frequently Asked Questions
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        {faqsData.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-sm"
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        <span className="text-indigo-600 font-bold mr-2">{index + 1}.</span>
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        initial={false}
                                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <IconChevronDown size={24} className="text-indigo-600" />
                                    </motion.div>
                                </div>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden text-gray-600"
                                >
                                    <p className="pt-4">{faq.answer}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <NumberedNav pages={pages} currentPage="gstreturns" setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default GstReturns;
