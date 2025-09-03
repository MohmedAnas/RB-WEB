import React from 'react';
import { motion } from 'framer-motion';

// Import Icons from MUI
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import InventoryIcon from '@mui/icons-material/Inventory';

// Import Icons from Tabler Icons
import { IconReportAnalytics, IconPrinter, IconChefHat, IconBuildingStore, IconTruckDelivery, IconShoppingCart } from '@tabler/icons-react';

const FB = ({ setCurrentPage }) => {
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

    return (
        <div className="bg-gray-50 text-gray-800 font-inter">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-extrabold"
                    >
                        Busy Accounting for Food & Beverage
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light"
                    >
                        Streamline your restaurant, cafe, or catering business with a powerful, GST-ready accounting solution.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        className="mt-8"
                    >
                        <button
                            onClick={() => setCurrentPage('freetrial')}
                            className="bg-white text-yellow-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                        >
                            Start Your Free Trial
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Prompt 1: Summary Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
                        Busy's Solution for the Food & Beverage Sector
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        Busy’s GST-compliant accounting solution is specifically designed to meet the unique needs of the food and beverage industry. It simplifies and automates crucial business processes, ensuring accuracy and compliance. The software streamlines **billing** with customizable invoice templates and fast POS functionality, allowing for quick order processing. For **inventory**, it offers robust management tools to track raw materials, finished goods, and wastage, helping businesses minimize costs and prevent stockouts. Crucially, it automates **taxation** by handling GST calculations, e-invoicing, and generating required reports, making compliance effortless. This integrated approach ensures that all aspects of a business, from a customer order to a tax return, are managed efficiently and transparently.
                    </p>
                </div>
            </section>

            {/* Prompt 2: Features Section */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Key Features of Busy’s F&B Module
                    </h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {/* Feature 1 */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-500"
                        >
                            <FastfoodIcon className="text-amber-500" style={{ fontSize: 48 }} />
                            <h3 className="text-xl font-semibold mt-4 mb-2">POS & Billing</h3>
                            <p className="text-gray-600 text-sm">
                                Facilitates quick and easy billing at the counter. Supports customizable invoices, table management, and KOT (Kitchen Order Ticket) generation to streamline operations.
                            </p>
                        </motion.div>
                        {/* Feature 2 */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-500"
                        >
                            <InventoryIcon className="text-amber-500" style={{ fontSize: 48 }} />
                            <h3 className="text-xl font-semibold mt-4 mb-2">Recipe & Inventory Management</h3>
                            <p className="text-gray-600 text-sm">
                                Accurately track inventory of raw materials and finished products. Manage recipes to automatically deduct ingredients from stock when a dish is sold.
                            </p>
                        </motion.div>
                        {/* Feature 3 */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-500"
                        >
                            <DescriptionIcon className="text-amber-500" style={{ fontSize: 48 }} />
                            <h3 className="text-xl font-semibold mt-4 mb-2">GST & Taxation</h3>
                            <p className="text-gray-600 text-sm">
                                Ensures full GST compliance with automated tax calculations, e-invoicing, and the generation of all necessary GST reports (GSTR-1, GSTR-2A, etc.) directly from the software.
                            </p>
                        </motion.div>
                        {/* Feature 4 */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-500"
                        >
                            <IconReportAnalytics className="text-amber-500" size={48} />
                            <h3 className="text-xl font-semibold mt-4 mb-2">Financial Reporting</h3>
                            <p className="text-gray-600 text-sm">
                                Gain real-time insights into your business with comprehensive financial reports, including Profit & Loss statements, Balance Sheets, and Cash Flow analysis.
                            </p>
                        </motion.div>
                        {/* Feature 5 */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-500"
                        >
                            <IconChefHat className="text-amber-500" size={48} />
                            <h3 className="text-xl font-semibold mt-4 mb-2">Wastage Management</h3>
                            <p className="text-gray-600 text-sm">
                                Track and record wastage of raw materials and ingredients to get a clear picture of your operational losses and improve cost control.
                            </p>
                        </motion.div>
                        {/* Feature 6 */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-500"
                        >
                            <IconBuildingStore className="text-amber-500" size={48} />
                            <h3 className="text-xl font-semibold mt-4 mb-2">Multi-Location Management</h3>
                            <p className="text-gray-600 text-sm">
                                Manage multiple outlets or branches from a single platform, with centralized data and reporting for efficient multi-location business management.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Prompt 3: FAQ Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
                        Frequently Asked Questions
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {/* FAQ Item 1 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Is this software suitable for small cafes and food trucks?
                            </h3>
                            <p className="text-gray-600">
                                Yes, Busy’s Food & Beverage solution is scalable and perfect for businesses of all sizes, from small cafes and food trucks to large restaurant chains.
                            </p>
                        </div>
                        {/* FAQ Item 2 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Does the software handle different types of billing, like dine-in, takeaway, and delivery?
                            </h3>
                            <p className="text-gray-600">
                                Absolutely. The module is designed to handle various billing scenarios, including dine-in, takeaway, and home delivery, with options for managing KOTs and separate invoices.
                            </p>
                        </div>
                        {/* FAQ Item 3 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                How does the software assist with GST compliance?
                            </h3>
                            <p className="text-gray-600">
                                The software automates GST calculations on all transactions, generates e-invoices, and prepares all necessary GST returns, such as GSTR-1, GSTR-3B, etc., making compliance simple and error-free.
                            </p>
                        </div>
                        {/* FAQ Item 4 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Can I manage multiple outlets with this software?
                            </h3>
                            <p className="text-gray-600">
                                Yes, the solution provides robust multi-location management, allowing you to centrally control and track the performance of all your outlets from a single platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FB;
