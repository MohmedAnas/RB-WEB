import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    IconFileInvoice,
    IconReport,
    IconUser,
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
        title: "Automated TDS Calculation",
        bullets: [
            "Automatically calculate TDS based on predefined rates.",
            "Apply TDS on payments and manage all related accounts.",
            "Ensure accurate deduction and compliance with tax laws."
        ]
    },
    {
        icon: <IconReport size={32} />,
        title: "TDS Reporting",
        bullets: [
            "Generate Form 26Q and Form 27Q for filing TDS returns.",
            "Create detailed reports for all TDS deductions.",
            "Simplify tax audit and review processes."
        ]
    },
    {
        icon: <IconUser size={32} />,
        title: "TDS Certificates",
        bullets: [
            "Generate and print Form 16A and other TDS certificates.",
            "Provide accurate certificates to your deductees.",
            "Maintain a clear record of all TDS transactions."
        ]
    }
];

// Data for the FAQ section
const faqsData = [
    {
        question: "What is TDS and why is it important?",
        answer: "TDS stands for Tax Deducted at Source. It is a system where tax is deducted from payments made at the time of their payment. It is a key tool for the government to collect revenue and ensures that tax is collected at the time of income generation."
    },
    {
        question: "On which payments is TDS deducted?",
        answer: "TDS is deducted on various payments like salaries, professional fees, interest, rent, and commissions. The applicable rate and threshold for deduction vary for each type of payment."
    },
    {
        question: "How does BUSY simplify TDS compliance?",
        answer: "Our software automates the calculation and deduction of TDS, ensuring the correct rates are applied. It also helps in generating the required forms (Form 26Q, Form 27Q) for filing returns, making compliance effortless."
    },
    {
        question: "What is Form 16A?",
        answer: "Form 16A is a TDS certificate issued by the deductor to the deductee for tax deducted on payments other than salary. Our software can help you generate and manage these certificates easily."
    }
];

const pages = [
    { name: "Basics of GST", pageName: 'gstbasics' },
    { name: "E-Way Bill", pageName: 'ewaybill' },
    { name: "GST Returns", pageName: 'gstreturns' },
    { name: "A Guide to Invoicing", pageName: 'gstinvoicing' },
    { name: "TDS", pageName: 'tds' },
];

const Tds = ({ setCurrentPage }) => {
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
                        TDS: Streamlining Tax Deductions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto"
                    >
                        Tax Deducted at Source (TDS) is a vital component of the Indian tax system. Our software automates the entire TDS process, from accurate calculation and deduction to generating certificates and filing returns. With features designed to simplify compliance and minimize errors, you can manage your TDS obligations effortlessly and focus on growing your business.
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
                        Key Features of TDS Module
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
            
            <NumberedNav pages={pages} currentPage="tds" setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default Tds;
