import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// Import icons from Tabler Icons
import {
    IconBuildingWarehouse,
    IconReload,
    IconTruckLoading,
    IconLayoutGrid,
    IconQuestionMark,
    IconChevronDown,
    IconCheck,
    IconReportAnalytics,
    IconHandStop,
    IconPackage
} from '@tabler/icons-react';

// Data for the Key Features section in a flowing list format
const featuresData = [
    {
        icon: <IconReportAnalytics size={40} />,
        title: "Real-Time Stock Visibility",
        bullets: [
            "Know exact stock levels across warehouses at any moment.",
            "Receive alerts when inventory hits reorder thresholds."
        ]
    },
    {
        icon: <IconReload size={40} />,
        title: "Smart Reorder Automation",
        bullets: [
            "Automatically generate purchase orders based on sales trends.",
            "Prevent stock-outs and overstocking with intelligent reorder logic."
        ]
    },
    {
        icon: <IconHandStop size={40} />,
        title: "Batch & Expiry Tracking",
        bullets: [
            "Assign batch numbers and expiry dates to perishable goods.",
            "Automate first-in, first-out (FIFO) stock issuance.",
            "Reduce waste and improve product traceability."
        ]
    },
    {
        icon: <IconBuildingWarehouse size={40} />,
        title: "Multi-Location Sync",
        bullets: [
            "Manage and transfer stock across multiple warehouses or retail locations.",
            "Get a consolidated view of your entire inventory."
        ]
    },
    {
        icon: <IconPackage size={40} />,
        title: "Stock Valuation & Cost Control",
        bullets: [
            "Accurately track the cost and value of your inventory.",
            "Generate detailed reports on profit margins per product.",
            "Make informed pricing decisions with real-time data."
        ]
    }
];

// Sample data for the demo chart
const chartData = [
    { name: 'Shirts', 'Stock Level': 120, 'Reorder Point': 50 },
    { name: 'Pants', 'Stock Level': 98, 'Reorder Point': 40 },
    { name: 'Jackets', 'Stock Level': 20, 'Reorder Point': 30 },
    { name: 'Socks', 'Stock Level': 300, 'Reorder Point': 100 },
    { name: 'Hats', 'Stock Level': 75, 'Reorder Point': 25 },
];

// Data for the FAQ section
const faqsData = [
    {
        question: "How does the system alert me to low stock?",
        answer: "You can set custom reorder thresholds for any item. When the stock level drops below this point, the system will send you an automatic alert, ensuring you can restock in time and avoid lost sales."
    },
    {
        question: "Can I manage and track product batches or expiry dates?",
        answer: "Yes, our software supports batch-wise tracking, allowing you to assign expiry dates and manage inventory on a first-in, first-out (FIFO) basis. This is crucial for perishable goods and ensures traceability."
    },
    {
        question: "Does the system support multiple warehouse locations?",
        answer: "Absolutely. You can manage and sync inventory across any number of warehouses or store locations. The system provides a consolidated view, making it easy to track stock transfers and availability."
    },
    {
        question: "How do I forecast reorder points intelligently?",
        answer: "Our software uses historical sales data and current trends to suggest optimal reorder points. This automation helps you keep just the right amount of stock on hand, minimizing storage costs and capital tied up in inventory."
    },
    {
        question: "Can I monitor inventory valuation and cost accuracy?",
        answer: "Yes, the system tracks the true cost of your stock and provides real-time valuation reports. This allows you to monitor profitability and make data-driven decisions on pricing and purchasing."
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

const InventoryManagement = ({ setCurrentPage }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-inter">
            {/* Section 1: Summary/Hero Section */}
            <section className="bg-gradient-to-br from-teal-500 to-blue-500 text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold"
                    >
                        Seamless Inventory Management Software for Your Business
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto"
                    >
                        Track your inventory in real time, stay ahead of stock-outs with automatic reorders, and reduce waste through accurate tracking—all from one powerful interface.
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
                        Start Free Trial
                    </motion.button>
                </div>
            </section>

            {/* Section 2: Key Features - Flowing Format */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-3xl font-bold text-center mb-12 text-gray-900"
                    >
                        Core Features to Optimize Your Stock
                    </motion.h2>
                    <div className="max-w-4xl mx-auto space-y-8">
                        {featuresData.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="flex items-start p-6 rounded-lg bg-gray-50 shadow-md border-l-4 border-teal-500"
                            >
                                <div className="flex-shrink-0 text-teal-500 mr-6">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                                        {feature.bullets.map((bullet, i) => (
                                            <li key={i}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Demo Graph/Chart */}
            <section className="py-16 px-4 md:px-8 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-3xl font-bold text-center mb-12 text-gray-900"
                    >
                        Inventory Performance Snapshot
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="bg-white p-6 rounded-xl shadow-md w-full h-80 md:h-96"
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={chartData}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Stock Level" fill="#06b6d4" />
                                <Bar dataKey="Reorder Point" fill="#f43f5e" />
                            </BarChart>
                        </ResponsiveContainer>
                    </motion.div>
                </div>
            </section>

            {/* Section 4: CTA Button */}
            <section className="text-center py-12 px-4 md:px-8">
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    onClick={() => setCurrentPage('freetrial')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors"
                >
                    Try Now
                    <IconChevronDown size={24} className="ml-2" />
                </motion.button>
            </section>

            {/* Section 5: FAQ */}
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
                                        <span className="text-teal-600 font-bold mr-2">{index + 1}.</span>
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

export default InventoryManagement;
