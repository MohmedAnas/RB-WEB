import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import icons from Tabler Icons
import {
    IconTractor,
    IconBasket,
    IconFileInvoice,
    IconScale,
    IconQuestionMark,
    IconChevronDown,
    IconHandFinger,
    IconCreditCard,
    IconReceipt,
    IconLanguage,
    IconLeaf
} from '@tabler/icons-react';

// Data for the Key Features section
const featuresData = [
    {
        icon: <IconHandFinger size={48} />,
        title: "Collection & Commission Handling",
        bullets: [
            "Manage outstanding payments and dues via reminder alerts.",
            "Automate agent commission tracking and reporting.",
            "Gain cash flow insights for better planning."
        ]
    },
    {
        icon: <IconBasket size={48} />,
        title: "Batch/Lot-Wise Stock Control",
        bullets: [
            "Tag each produce lot with batch numbers and expiry dates.",
            "Improve traceability and reduce spoilage.",
            "Maintain food safety and compliance."
        ]
    },
    {
        icon: <IconLanguage size={48} />,
        title: "Local-Language Invoice Printing",
        bullets: [
            "Generate bulk invoices in local languages for community-friendly accounting.",
            "Customizable templates for regional formats.",
            "Enhance convenience and accuracy in local transactions."
        ]
    },
    {
        icon: <IconCreditCard size={48} />,
        title: "Mahajani Interest Management",
        bullets: [
            "Automate interest calculations for informal credit to retailers.",
            "Record interest accurately in accounts.",
            "Improve transparency in credit settlements."
        ]
    },
    {
        icon: <IconLeaf size={48} />,
        title: "Crop-Specific Accounting",
        bullets: [
            "Allocate cost and revenue per crop type.",
            "Optimize profitability tracking for each produce segment.",
            "Make informed decisions on future crop planning."
        ]
    }
];

// Data for the FAQ section
const faqsData = [
    {
        question: "What is the benefit of batch-wise stock tracking?",
        answer: "Batch-wise stock tracking enables precise inventory management and reduces spoilage by keeping a close watch on each lot's harvest date and expiration. It also ensures full traceability for quality control and compliance."
    },
    {
        question: "How does the software handle agricultural commissions?",
        answer: "The software automates commission calculation and reporting for agents. You can define commission rates, and the system will ensure timely and transparent payouts, while also providing clear reports for better financial oversight."
    },
    {
        question: "Can invoices be printed in local languages?",
        answer: "Yes, our solution supports bulk invoice printing in a variety of local languages. This feature is designed to aid on-field operations, making it easier to communicate with local vendors and agents."
    },
    {
        question: "How is Mahajani interest calculated and recorded?",
        answer: "The system automates the calculation of Mahajani interest on informal credit, and seamlessly records all transactions directly into your financial statements. This improves transparency and reduces manual effort in credit settlements."
    },
    {
        question: "Is crop-wise profitability analysis supported?",
        answer: "Absolutely. Our platform allows you to track all revenue and expenses per crop type. This gives you a clear picture of each crop's performance, helping you to make data-driven decisions to optimize your future planning."
    }
];

// Animation variants for staggered fade-in effect on scroll
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

const Agriculture = ({ setCurrentPage }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-inter">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-600 via-lime-600 to-emerald-700 text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold text-white"
                    >
                        Complete Billing & Accounting Software Tailored for Agriculture Businesses
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto text-green-100"
                    >
                        Easily manage your crop inventory, automate commission payouts, track batch-wise produce, and print invoices in local languages—all from one smart, agricultural-first platform built for field operations.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentPage('freetrial')}
                        className="mt-8 bg-white text-green-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
                    >
                        Start Your Free Trial
                    </motion.button>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Powerful Features for the Agriculture Sector
                    </h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {featuresData.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                                className="bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-green-600"
                            >
                                <div className="text-green-600 mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                                    {feature.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 md:px-8 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
                        Frequently Asked Questions
                    </h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        {faqsData.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-6 rounded-lg shadow-sm"
                            >
                                <div 
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        <span className="text-green-600 font-bold mr-2">{index + 1}.</span>
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        initial={false}
                                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <IconChevronDown size={24} className="text-green-600" />
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
        </div>
    );
};

export default Agriculture;
