import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import icons from Tabler Icons
import {
    IconScan,
    IconCurrencyRupee,
    IconFileText,
    IconLayoutGrid,
    IconInvoice,
    IconQuestionMark,
    IconChevronDown
} from '@tabler/icons-react';

// Data for the Key Features section
const featuresData = [
    {
        icon: <IconScan size={48} />,
        title: "Serial Number–Wise Stock Control",
        bullets: [
            "Tag each mobile device with a unique serial number.",
            "Track inventory movement, transfers, and warranty status.",
            "Access accurate records for audits and customer support."
        ]
    },
    {
        icon: <IconCurrencyRupee size={48} />,
        title: "Tax-Inclusive & Exclusive Billing",
        bullets: [
            "Support both pricing types for flexible invoicing.",
            "Automate tax calculation based on product type or category.",
            "Ensure accurate and compliant billing seamlessly."
        ]
    },
    {
        icon: <IconFileText size={48} />,
        title: "Quotation & Order Management",
        bullets: [
            "Create professional quotes quickly.",
            "Track approval workflows and convert to invoices.",
            "Maintain comprehensive quote history for future reference."
        ]
    },
    {
        icon: <IconLayoutGrid size={48} />,
        title: "Category-Based Product Organization",
        bullets: [
            "Categorize products based on brand, model, or type.",
            "Simplify inventory search and management.",
            "Enhance productivity with organized listing."
        ]
    },
    {
        icon: <IconInvoice size={48} />,
        title: "GST-Compliant Billing with E-Invoice & E-Way Bill",
        bullets: [
            "Generate fully compliant e-invoices and e-way bills within the platform.",
            "Automate TCS/TDS handling and GST return preparations.",
            "Simplify compliance and reduce manual effort."
        ]
    },
];

// Data for the FAQ section
const faqsData = [
    {
        question: "How does serial number tracking improve customer support?",
        answer: "Serial number tracking allows you to quickly look up a device's history, including purchase date and warranty status. This enables precise customer support, streamlined returns, and accurate repair management."
    },
    {
        question: "What’s the difference between tax-inclusive and tax-exclusive billing?",
        answer: "Tax-inclusive billing displays the final price including taxes, while tax-exclusive calculates taxes on top of the base price. Our software automatically handles both, providing flexibility and compliance."
    },
    {
        question: "Can I issue quotes and convert them to orders within the software?",
        answer: "Yes, you can create and manage professional quotes directly in the system. Once a customer approves, you can convert the quote into a sales invoice with just a few clicks, saving time and ensuring accuracy."
    },
    {
        question: "How does category organization help manage inventory?",
        answer: "By organizing products into categories (e.g., by brand, model, or type), you can simplify inventory search and management. This boosts efficiency, especially for businesses with a large number of different products."
    },
    {
        question: "Does the software handle e-invoicing and e-way bills?",
        answer: "Absolutely. Our platform is fully integrated to generate GST-compliant e-invoices and e-way bills, automating TCS/TDS calculations and simplifying the preparation of your GST returns."
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

const Mobile = ({ setCurrentPage }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-inter">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-600 to-slate-800 text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold"
                    >
                        Smart Billing & Inventory Software for Mobile Stores
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto"
                    >
                        Manage stock by serial numbers, generate flexible tax-inclusive billing, organize inventory with ease, and stay GST compliant—all from a single intuitive platform tailored for mobile retailers.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentPage('freetrial')}
                        className="mt-8 bg-white text-slate-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
                    >
                        Start Free Trial
                    </motion.button>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Powerful Features for Your Mobile Store
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
                                className="bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-slate-600"
                            >
                                <div className="text-slate-600 mb-4">{feature.icon}</div>
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
                                        <span className="text-slate-600 font-bold mr-2">{index + 1}.</span>
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        initial={false}
                                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <IconChevronDown size={24} className="text-slate-600" />
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

export default Mobile;
