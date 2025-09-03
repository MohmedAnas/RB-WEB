import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import icons from Tabler Icons
import {
    IconPalette,
    IconBuildingWarehouse,
    IconBarcode,
    IconPackage,
    IconSettings,
    IconBoxSeam,
    IconTruckLoading,
    IconQuestionMark,
    IconChevronDown
} from '@tabler/icons-react';

// Data for the Key Features section
const featuresData = [
    {
        icon: <IconPalette size={48} />,
        title: "BOM & Production Workflow",
        bullets: [
            "Define product composition with raw material breakdown.",
            "Track production stages—from mixing to packaging.",
            "Link inventory consumption directly to output."
        ]
    },
    {
        icon: <IconTruckLoading size={48} />,
        title: "Material Requirement Planning (MRP)",
        bullets: [
            "Project material needs based on impending orders.",
            "Prevent shortages or overstock with strategic procurement planning.",
            "Multi-warehouse inventory management for stock visibility."
        ]
    },
    {
        icon: <IconBuildingWarehouse size={48} />,
        title: "Multi-Warehouse Inventory",
        bullets: [
            "Visually manage stock across multiple godowns or sites.",
            "Track transfers and stock redistribution seamlessly.",
            "Ensure accurate stock counts for all locations."
        ]
    },
    {
        icon: <IconSettings size={48} />,
        title: "Custom Item Attributes",
        bullets: [
            "Manage details like shade, finish, volume, and pack size.",
            "Enable precise filtering and search in inventory systems.",
            "Simplify product categorization for better control."
        ]
    },
    {
        icon: <IconBarcode size={48} />,
        title: "Barcode & QR Code Generation",
        bullets: [
            "Create unique identifiers for all products.",
            "Speed up picking, packing, and billing via scanning.",
            "Reduce human error in sales and inventory tracking."
        ]
    },
    {
        icon: <IconBoxSeam size={48} />,
        title: "Packaging & Unit Measurement",
        bullets: [
            "Maintain flexible packaging data—drums, cans, packs.",
            "Automate SKU-level pricing and stock deduction logic.",
            "Ensure accurate billing and stock management."
        ]
    },
];

// Data for the FAQ section
const faqsData = [
    {
        question: "How does BOM help reduce production wastage?",
        answer: "By precisely defining the raw materials required for each product, the Bill of Materials (BOM) feature helps you forecast material needs accurately and avoid over-consumption, directly reducing wastage and controlling costs."
    },
    {
        question: "Can the software plan raw material reorders?",
        answer: "Yes, our Material Requirement Planning (MRP) system can project your future material needs and provide automatic reorder suggestions based on pre-defined thresholds, preventing stockouts and production delays."
    },
    {
        question: "Is multi-godown stock balance possible?",
        answer: "Absolutely. The software provides real-time visibility and tracking of your inventory across multiple warehouses or godowns, allowing you to manage stock levels and transfers seamlessly from a single dashboard."
    },
    {
        question: "Can I use barcode labels to expedite billing?",
        answer: "Yes, the system can generate unique barcode and QR code labels for all your products. By scanning these labels, you can significantly speed up the billing process and reduce the chances of manual entry errors."
    },
    {
        question: "Does it support variable packaging units like drums and cans?",
        answer: "Yes, our solution is built to handle flexible packaging. You can define multiple units of measurement (e.g., liters, gallons, drums) for a single product, and the software will handle the unit conversions automatically during billing and inventory deduction."
    },
    {
        question: "How do I define product attributes like shade or finish?",
        answer: "Our Custom Item Attributes feature allows you to tag each product with specific details like shade, finish, and volume. This makes it easy to filter, search, and manage your inventory with a high degree of precision."
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

const Paint = ({ setCurrentPage }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-inter">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-orange-400 to-amber-500 text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold"
                    >
                        Next-Gen Accounting & Production Management for Paint Shops
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto"
                    >
                        Streamline your operations from production planning and BOM handling to real-time inventory tracking, packaging, and billing—all in a single, efficient platform that boosts accuracy and productivity.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentPage('freetrial')}
                        className="mt-8 bg-white text-orange-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
                    >
                        Start Free Trial
                    </motion.button>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Powerful Features for Your Paint Shop
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
                                className="bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600"
                            >
                                <div className="text-amber-600 mb-4">{feature.icon}</div>
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
                                        <span className="text-orange-500 font-bold mr-2">{index + 1}.</span>
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        initial={false}
                                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <IconChevronDown size={24} className="text-orange-500" />
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

export default Paint;
