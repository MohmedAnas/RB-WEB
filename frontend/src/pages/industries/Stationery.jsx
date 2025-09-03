import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import icons from Tabler Icons
import {
    IconLayoutGrid,
    IconBarcode,
    IconFileInvoice,
    IconPackage,
    IconFileText,
    IconShoppingCart,
    IconQuestionMark,
    IconChevronDown
} from '@tabler/icons-react';

// Data for the Key Features section
const featuresData = [
    {
        icon: <IconPackage size={48} />,
        title: "Variant & Bundle Pricing",
        bullets: [
            "Price variants (e.g., pens sold individually or in packs).",
            "Set bundle offers (e.g., notebook + pen combo).",
            "Apply tiered discounts automatically based on quantity."
        ]
    },
    {
        icon: <IconLayoutGrid size={48} />,
        title: "Category-Wise Inventory Organization",
        bullets: [
            "Segment products (stationery, art supplies, office décor).",
            "Quickly locate stock using built-in filters.",
            "Boost search speed and shopping experience."
        ]
    },
    {
        icon: <IconBarcode size={48} />,
        title: "Barcode & QR Code Support",
        bullets: [
            "Generate codes for quick scanning at checkout.",
            "Accelerate billing and stock updates.",
            "Reduce checkout errors and improve inventory accuracy."
        ]
    },
    {
        icon: <IconShoppingCart size={48} />,
        title: "Real-Time Stock Alerts",
        bullets: [
            "Set reorder thresholds per item or product group.",
            "Get notifications for low stock levels.",
            "Avoid out-of-stock scenarios on fast-moving items."
        ]
    },
    {
        icon: <IconFileInvoice size={48} />,
        title: "GST-Compliant & Bulk Invoicing",
        bullets: [
            "Auto-apply GST on invoice per product category.",
            "Generate multiple invoices in a batch for schools or offices.",
            "Save time during peak billing periods."
        ]
    },
];

// Data for the FAQ section
const faqsData = [
    {
        question: "Can I create pricing bundles like pen + notebook sets?",
        answer: "Yes, our software allows you to easily set up and manage pricing bundles for promotions or combo deals. This helps you boost sales and provide more value to your customers."
    },
    {
        question: "How does variant pricing work per pack or quantity?",
        answer: "The system is flexible enough to handle different pricing based on the sales unit. For example, you can set one price for a single pen and a different, discounted price for a pack of 10 pens, and the software will apply it automatically."
    },
    {
        question: "Can I generate barcodes and scan quickly at billing?",
        answer: "Absolutely. Our barcode and QR code support allows you to generate unique codes for all products. You can then use a scanner to quickly and accurately bill customers, speeding up the checkout process."
    },
    {
        question: "Does the software alert me when stock is running low?",
        answer: "Yes. You can set customizable reorder thresholds for any item. When the stock level drops below this threshold, the software will send you an alert, helping you avoid out-of-stock situations."
    },
    {
        question: "Is GST applied automatically on invoices per product?",
        answer: "Yes. Once you have configured the GST rates for your product categories, the software will automatically apply the correct tax on every invoice. This ensures full compliance and reduces manual errors during billing."
    },
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

const Stationery = ({ setCurrentPage }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-inter">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-400 to-indigo-500 text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold text-white"
                    >
                        Smart Billing & Inventory Management for Stationery Shops
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto text-blue-100"
                    >
                        Manage your inventory across pens, papers, art materials and more—automate variant pricing, generate GST-ready invoices, and restock seamlessly—all in one intuitive system designed for stationery retailers.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentPage('freetrial')}
                        className="mt-8 bg-white text-indigo-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
                    >
                        Start Free Trial
                    </motion.button>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Powerful Features for Your Stationery Shop
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
        </div>
    );
};

export default Stationery;
