import React from 'react';
import { motion } from 'framer-motion';

// Import icons from Tabler Icons
import { IconPlane, IconCreditCard, IconChartPie, IconBuildingBank, IconFileText, IconChartBar } from '@tabler/icons-react';

// Data for the Features section
const featuresData = [
    {
        icon: <IconPlane size={48} />,
        title: "Dynamic Fare & Tax Automation",
        bullets: [
            "Auto-calculates fares, commissions, and applicable taxes.",
            "Supports seasonal pricing and agent discounts.",
            "Generates travel receipts with full compliance."
        ]
    },
    {
        icon: <IconBuildingBank size={48} />,
        title: "Package & Tour Cost Breakdown",
        bullets: [
            "Track line-item costs (hotels, transport, meals, guides).",
            "Auto-generate P&L per tour.",
            "Compare forecasted vs. actual costs."
        ]
    },
    {
        icon: <IconCreditCard size={48} />,
        title: "Multi-Currency & Payment Gateway Support",
        bullets: [
            "Handle payments in USD, EUR, INR, and other currencies.",
            "Auto-convert exchange rates at billing time.",
            "Integrate seamlessly with online payment gateways."
        ]
    },
    {
        icon: <IconFileText size={48} />,
        title: "Agent Commission Management",
        bullets: [
            "Define commission slabs per agent or group.",
            "Automate payouts based on bookings.",
            "Generate commission statements and reports."
        ]
    },
    {
        icon: <IconChartPie size={48} />,
        title: "Expense Tracking & Reconciliation",
        bullets: [
            "Log trip expenses—transport, allowances, vendor payments.",
            "Upload receipts/PDFs and categorize spending.",
            "Reconcile with accounting ledgers."
        ]
    },
    {
        icon: <IconChartBar size={48} />,
        title: "Real-Time Reporting & Analytics",
        bullets: [
            "Visual dashboards: daily sales, bookings, revenue vs. cost.",
            "Exportable reports (CSV, PDF) for audits or insights.",
            "Filter by agent, package type, or date range."
        ]
    }
];

// Data for the FAQ section
const faqsData = [
    {
        question: "Can the software manage group tour packages along with individual bookings?",
        answer: "Yes, our solution allows you to create and manage both packaged tours and one-off bookings from a unified dashboard, giving you a comprehensive overview of your business."
    },
    {
        question: "Does it support multi-currency billing for international clients?",
        answer: "Absolutely. Our system is built to handle multi-currency transactions. Billing, reporting, and conversions adjust dynamically per the selected currency, making international business seamless."
    },
    {
        question: "Can agent commissions be automated and tracked?",
        answer: "Yes, you can easily define commission rates and slabs for individual agents or groups. The system will then automate payouts and generate detailed commission statements and reports."
    },
    {
        question: "Is there a way to upload and reconcile trip-related expenses?",
        answer: "Yes, our expense tracking feature allows you to log all trip expenses, upload receipts, and categorize spending. You can then swiftly reconcile these with your accounting ledgers."
    },
    {
        question: "Can the system produce financial reports by package or region?",
        answer: "Yes, our robust analytics engine allows you to filter dashboards and reports by various parameters, including tour type, agent, or geographical region, to gain deeper insights."
    }
];

// Animation variants for staggered fade-in effect
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

const Travel = ({ setCurrentPage }) => {
    return (
        <div className="bg-gray-50 text-gray-800 font-inter">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold"
                    >
                        Intelligent Accounting & Fare Management for Travel Agencies
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto"
                    >
                        Streamline fare billing, manage complex tour-package accounting, track agent commissions, and handle multi-currency transactions with a single, powerful solution.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentPage('freetrial')}
                        className="mt-8 bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    >
                        Start Your Free Trial
                    </motion.button>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Powerful Features for Your Travel Business
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
                                className="bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-blue-500"
                            >
                                <div className="text-blue-500 mb-4">{feature.icon}</div>
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
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Travel;
