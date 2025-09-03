import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import icons from Tabler Icons for a consistent look
import { 
    IconBottle, 
    IconReceipt, 
    IconStack3, 
    IconBuildingStore, 
    IconTruckLoading, 
    IconQuestionMark,
    IconChevronDown
} from '@tabler/icons-react';

// Data for the Key Features section
const featuresData = [
    {
        icon: <IconBottle size={48} />,
        title: "Expiry Date & Batch Control",
        bullets: [
            "Assign batch numbers with manufacture and expiry dates.",
            "Set automatic alerts for expiring stock.",
            "Deprioritize expired stock in sales to reduce waste."
        ]
    },
    {
        icon: <IconReceipt size={48} />,
        title: "HSN Code & GST Compliance",
        bullets: [
            "Auto-assign HSN codes to medicines.",
            "Calculate GST rates (0%, 5%, 12%, 18%, etc.) per product.",
            "Generate tax-compliant invoices effortlessly."
        ]
    },
    {
        icon: <IconStack3 size={48} />,
        title: "Multi-Unit Workflows",
        bullets: [
            "Allow sales in different units (strip, pack, bottle, tablet).",
            "Auto-convert quantities for accurate stock deduction.",
            "Enable flexible invoice entry with dynamic unit pricing."
        ]
    },
    {
        icon: <IconBuildingStore size={48} />,
        title: "FIFO & Stock Valuation",
        bullets: [
            "Use First-In-First-Out method for stock issuance.",
            "Monitor real-time stock valuation based on purchase price.",
            "Understand profit margins accounting for stock cost."
        ]
    },
    {
        icon: <IconTruckLoading size={48} />,
        title: "Purchase Order & Supplier Approval",
        bullets: [
            "Generate POs with approval routing.",
            "Track PO status and supplier history.",
            "Reorder via auto-suggestions based on threshold levels."
        ]
    },
];

// Data for the FAQ section
const faqsData = [
    {
        question: "How does expiry tracking help reduce stock write-offs?",
        answer: "The software provides automated alerts for stock nearing its expiry date, allowing you to take proactive measures like running promotions or returning stock. This helps minimize losses from unsellable inventory."
    },
    {
        question: "Can I sell in strips and still manage inventory correctly?",
        answer: "Yes, our system handles multi-unit conversions dynamically. You can sell a single strip from a pack, and the software will automatically adjust the inventory of both the strip count and the total number of packs."
    },
    {
        question: "Is GST billing handled automatically per medicine?",
        answer: "Yes, once a medicine is configured, the system automatically applies the correct HSN code and GST rate to generate fully tax-compliant invoices, eliminating manual calculation errors."
    },
    {
        question: "How does FIFO affect stock valuation and profit tracking?",
        answer: "By using the First-In-First-Out method, the software ensures that the oldest stock is sold first. This provides an accurate cost of goods sold, giving you a truer picture of your profit margins on a real-time basis."
    },
    {
        question: "Can I manage purchase orders and supplier limits?",
        answer: "Our purchase management module allows you to create and track purchase orders with approval workflows. You can also view a complete history of your transactions with each supplier to better manage your relationships."
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

const Pharmacy = ({ setCurrentPage }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    
    return (
        <div className="bg-gray-50 text-gray-800 font-inter">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-teal-500 to-cyan-500 text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold"
                    >
                        Smart Accounting & Inventory Software for Pharmacies
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto"
                    >
                        Manage drug inventory with precision, automate billing and GST compliance, and reduce expiries—all from one intuitive system designed for pharmacies.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentPage('freetrial')}
                        className="mt-8 bg-white text-teal-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
                    >
                        Start Your Free Trial
                    </motion.button>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Powerful Features for Your Pharmacy
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
                                className="bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-teal-500"
                            >
                                <div className="text-teal-500 mb-4">{feature.icon}</div>
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
                                        <IconQuestionMark size={20} className="inline-block mr-2 text-teal-600" />
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        initial={false}
                                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <IconChevronDown size={24} className="text-teal-600" />
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

export default Pharmacy;
