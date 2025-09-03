import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import icons from Tabler Icons
import {
    IconDiamond,
    IconCurrencyRupee,
    IconCertificate,
    IconPalette,
    IconArrowsExchange,
    IconQuestionMark,
    IconChevronDown
} from '@tabler/icons-react';

// Data for the Key Features section
const featuresData = [
    {
        icon: <IconDiamond size={48} />,
        title: "Item & Stone-Level Inventory Management",
        bullets: [
            "Track individual SKUs with metal, weight, gem clarity, and serial codes.",
            "Live stock visibility for rings, chains, bracelets, and loose stones.",
            "Manage custom orders with fine detail and style-specific attributes."
        ]
    },
    {
        icon: <IconCurrencyRupee size={48} />,
        title: "Daily Metal Price Sync & Margins",
        bullets: [
            "Automatically update gold/silver/platinum rates from trusted feeds.",
            "Calculate item pricing with accurate cost markup and profit margin logic.",
            "Track real-time margins across metal and gemstone categories."
        ]
    },
    {
        icon: <IconCertificate size={48} />,
        title: "Hallmark-Compliant Billing",
        bullets: [
            "Generate accurate invoices reflecting hallmark standards (karat, weight, charges).",
            "Auto-calculate and display hallmark charges separately for transparency.",
            "Generate digital invoices compliant with BIS and GST norms."
        ]
    },
    {
        icon: <IconPalette size={48} />,
        title: "Custom Jewel Designs & Workmanship Tracking",
        bullets: [
            "Tag custom creations with design specifications and making-of charges.",
            "Monitor production steps—casting, polishing, setting—with labor value allocation.",
            "Provide customers with accurate delivery and cost breakdowns."
        ]
    },
    {
        icon: <IconArrowsExchange size={48} />,
        title: "Exchange, Repair & Return Workflow",
        bullets: [
            "Process exchanges or repairs seamlessly with item-level details.",
            "Maintain repair history per customer and product.",
            "Manage stock reversals and financial adjustments efficiently."
        ]
    }
];

// Data for the FAQ section
const faqsData = [
    {
        question: "Can the software track individual gemstone and metal details per item?",
        answer: "Yes, our platform enables detailed tracking by weight, carat, clarity, and specific SKU attributes for each individual piece, including loose stones and metals."
    },
    {
        question: "How does dynamic pricing with daily gold rates work?",
        answer: "The software automatically syncs with live gold/silver rates from trusted feeds. It uses this data to instantly calculate and update item prices, ensuring your profit margins are always accurate."
    },
    {
        question: "Is hallmark billing automated and compliant?",
        answer: "Absolutely. The system generates BIS-compliant invoices, automatically calculating hallmark charges and formatting them correctly for GST regulations, streamlining your billing process."
    },
    {
        question: "Can custom-made orders and craftsmanship costs be managed?",
        answer: "Yes, you can track every step of a custom design’s production—from casting to final setting. The software allows you to allocate labor and material costs at each stage to provide an accurate final price to your client."
    },
    {
        question: "How are repairs, exchanges, and returns handled?",
        answer: "Our workflow is designed for efficiency. You can easily process exchanges, manage repairs by tracking their history, and handle returns with automated adjustments to both stock and billing records."
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

const Jewellery = ({ setCurrentPage }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-inter">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-yellow-600 via-yellow-700 to-amber-800 text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold text-white"
                    >
                        Elegant Accounting & Inventory Software for Jewellery Retailers
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto text-yellow-100"
                    >
                        Track loose diamonds, gold stones, and precious designs with precision. Automate hallmark billing and daily gold price syncing, while staying compliant with GST regulations—all from one polished platform made for jewellery professionals.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentPage('freetrial')}
                        className="mt-8 bg-white text-yellow-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
                    >
                        Start Free Trial
                    </motion.button>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Powerful Features for Your Jewellery Business
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
                                className="bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-yellow-600"
                            >
                                <div className="text-yellow-600 mb-4">{feature.icon}</div>
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
                                        <span className="text-yellow-600 font-bold mr-2">{index + 1}.</span>
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        initial={false}
                                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <IconChevronDown size={24} className="text-yellow-600" />
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

export default Jewellery;
