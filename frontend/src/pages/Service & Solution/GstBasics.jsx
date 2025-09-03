import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    IconInfoCircle,
    IconCurrencyRupee,
    IconFileText,
    IconSitemap,
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
        icon: <IconCurrencyRupee size={32} />,
        title: "GST Structure",
        bullets: [
            "CGST (Central GST) and SGST (State GST) for intra-state transactions.",
            "IGST (Integrated GST) for inter-state transactions.",
            "Know the difference between CGST, SGST, IGST, and UTGST to avoid errors."
        ]
    },
    {
        icon: <IconFileText size={32} />,
        title: "GST Compliance",
        bullets: [
            "Understand the importance of timely return filing (GSTR-1, GSTR-3B).",
            "Ensure accurate HSN/SAC codes for all goods and services.",
            "Stay up-to-date with the latest GST rules and regulations."
        ]
    },
    {
        icon: <IconSitemap size={32} />,
        title: "Input Tax Credit (ITC)",
        bullets: [
            "Claim credit on taxes paid on inward supplies.",
            "Automate ITC reconciliation to minimize errors.",
            "Understand the eligibility criteria for claiming ITC."
        ]
    }
];

// Data for the FAQ section
const faqsData = [
    {
        question: "What is GST and why is it important?",
        answer: "GST, or Goods and Services Tax, is a comprehensive, multi-stage, destination-based tax levied on every value addition. It replaced various indirect taxes, creating a unified market across India, and simplifies tax compliance for businesses."
    },
    {
        question: "What is the difference between CGST, SGST, and IGST?",
        answer: "CGST and SGST are levied on transactions within a state. CGST goes to the central government, while SGST goes to the state government. IGST is levied on inter-state transactions, with the revenue going to the central government."
    },
    {
        question: "What is an HSN code?",
        answer: "HSN (Harmonized System of Nomenclature) is an internationally recognized system for classifying goods. It helps in the systematic classification of goods for GST purposes, ensuring uniform taxation."
    },
    {
        question: "How does a business register for GST?",
        answer: "Businesses with a turnover above the prescribed threshold must register for GST on the GST portal. Our software simplifies this process and ensures all required information is correctly filed."
    }
];

const pages = [
    { name: "Basics of GST", pageName: 'gstbasics' },
    { name: "E-Way Bill", pageName: 'ewaybill' },
    { name: "GST Returns", pageName: 'gstreturns' },
    { name: "A Guide to Invoicing", pageName: 'gstinvoicing' },
    { name: "TDS", pageName: 'tds' },
];

const GstBasics = ({ setCurrentPage }) => {
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
                        Basics of GST: Simplifying the Tax Structure
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto"
                    >
                        The Goods and Services Tax (GST) has transformed India's tax landscape, creating a unified market. As a business owner, understanding the fundamentals of GST is crucial for compliance and seamless operations. Our guide provides a clear overview of GST types, tax credits, and the importance of timely filing. Learn how a single, comprehensive tax system can benefit your business by streamlining your billing and compliance processes, freeing you to focus on growth.
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
                        Key Features of GST in BUSY
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

            <NumberedNav pages={pages} currentPage="gstbasics" setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default GstBasics;
