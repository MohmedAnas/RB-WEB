import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    IconFileInvoice,
    IconCertificate, // Replaced IconStamp with IconCertificate
    IconPrinter,
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
        icon: <IconFileInvoice size={32} />,
        title: "Invoice Generation",
        bullets: [
            "Create GST-compliant invoices with automatic tax calculation.",
            "Customize invoice templates with your brand logo and details.",
            "Generate e-invoices and e-way bills with a single click."
        ]
    },
    {
        icon: <IconCertificate size={32} />, // Used the new icon here
        title: "GSTIN Validation",
        bullets: [
            "Validate your customer's GSTIN number automatically.",
            "Prevent errors and ensure correct tax reporting.",
            "Maintain accurate records for all your transactions."
        ]
    },
    {
        icon: <IconPrinter size={32} />,
        title: "Bulk Invoicing",
        bullets: [
            "Generate and print multiple invoices in a batch.",
            "Save time during peak business periods.",
            "Automate invoice delivery via email."
        ]
    }
];

// Data for the FAQ section
const faqsData = [
    {
        question: "What are the mandatory details for a GST invoice?",
        answer: "A valid GST invoice must include your business's GSTIN, invoice number and date, the customer's name and GSTIN (if applicable), HSN/SAC codes, product descriptions, and the applicable GST rates."
    },
    {
        question: "How does the software handle different GST rates?",
        answer: "Our software allows you to set different GST rates for various products. It automatically applies the correct rate during billing and calculates the total tax, ensuring your invoices are always accurate and compliant."
    },
    {
        question: "Can I customize the look and feel of my invoices?",
        answer: "Yes, you can choose from a variety of professional templates and customize them with your company's logo, colors, and other details. This helps you maintain a consistent brand identity."
    },
    {
        question: "Is e-invoicing mandatory for all businesses?",
        answer: "E-invoicing is currently mandatory for businesses with a certain turnover. Our software is fully equipped to handle e-invoice generation and reporting, so you can stay compliant with the latest regulations."
    }
];

const pages = [
    { name: "Basics of GST", pageName: 'gstbasics' },
    { name: "E-Way Bill", pageName: 'ewaybill' },
    { name: "GST Returns", pageName: 'gstreturns' },
    { name: "A Guide to Invoicing", pageName: 'gstinvoicing' },
    { name: "TDS", pageName: 'tds' },
];

const GstInvoicingGuide = ({ setCurrentPage }) => {
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
                        A Guide to Invoicing Under GST
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto"
                    >
                        Invoicing is a critical aspect of your business and must adhere to GST regulations. Our software makes it simple to generate professional, GST-compliant invoices with all the required details. From automatic tax calculation and e-invoicing to customizable templates, you can streamline your billing process, ensure accuracy, and present a professional face to your customers.
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
                        Key Features of GST Invoicing
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

            <NumberedNav pages={pages} currentPage="gstinvoicing" setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default GstInvoicingGuide;
