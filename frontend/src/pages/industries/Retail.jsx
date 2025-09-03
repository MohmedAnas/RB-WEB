import React from 'react';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    CheckCircle,
    ShoppingCart,
    Tag,
    Scan,
    BarChart,
    Users,
    ClipboardList,
    Layers,
    HelpCircle,
    Wallet
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

const Retail = ({ setCurrentPage }) => {
    // Framer Motion animation variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const keyFeatures = [
        {
            icon: <ShoppingCart size={48} className="text-orange-500" />,
            title: "Quick & Accurate Billing",
            description: "Generate fast invoices, automate tax calculations, and minimize manual data entry for a seamless checkout experience."
        },
        {
            icon: <Tag size={48} className="text-orange-500" />,
            title: "Dynamic Discount & Scheme Handling",
            description: "Effortlessly manage promotional offers, including item-level and invoice-level discounts, to drive sales and customer loyalty."
        },
        {
            icon: <Scan size={48} className="text-orange-500" />,
            title: "Barcode Print & Scan",
            description: "Handle stock efficiently with integrated barcode printing and fast scanning, reducing errors and saving time."
        },
        {
            icon: <Wallet size={48} className="text-orange-500" />,
            title: "Multi-Mode Payments",
            description: "Accept and track payments from various sources, including cash, cards, and digital wallets, with transparent reporting."
        },
        {
            icon: <Layers size={48} className="text-orange-500" />,
            title: "Real-Time Inventory Control",
            description: "Monitor stock levels in real-time, get instant reorder alerts, and synchronize inventory across multiple store locations."
        },
        {
            icon: <CheckCircle size={48} className="text-orange-500" />,
            title: "Reorder Automation",
            description: "Automate stock replenishment based on sales trends and predefined thresholds, ensuring popular items are always in stock."
        },
        {
            icon: <ClipboardList size={48} className="text-orange-500" />,
            title: "Quantity-Based Pricing",
            description: "Set up tiered pricing logic for different purchase volumes, allowing you to offer competitive rates for bulk buyers."
        },
        {
            icon: <Users size={48} className="text-orange-500" />,
            title: "Salesman Tracking",
            description: "Track sales performance by individual staff members, helping you monitor and reward top performers."
        },
        {
            icon: <BarChart size={48} className="text-orange-500" />,
            title: "Profitability Insights",
            description: "Access visual reports and powerful analytics to understand revenue, costs, and profit margins at a glance."
        },
    ];

    const faqs = [
        {
            question: "Can retail chains use this software across locations?",
            answer: "Yes, our solution is built for multi-store management, allowing you to centrally control inventory, sales, and reporting for all your locations."
        },
        {
            question: "Is it easy to learn for non-accountant staff?",
            answer: "Absolutely. The software features an intuitive and user-friendly interface, minimizing the learning curve for staff with no prior accounting experience."
        },
        {
            question: "Does it support offline billing during internet downtime?",
            answer: "Yes, the software is designed to function offline. It will sync all your data automatically once an internet connection is restored."
        },
        {
            question: "Can pricing be customized per store or product category?",
            answer: "Yes, our flexible pricing system allows you to set customized rates and discounts based on individual stores, product categories, or even specific customers."
        },
    ];

    return (
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white py-24 md:py-32 overflow-hidden"
            >
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Tailored Solutions for <br /> Modern Retail Shops
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        Streamline your billing, manage inventory, and boost profitability with our advanced and easy-to-use software.
                    </p>
                    <button
                        onClick={() => setCurrentPage('freetrial')}
                        className="inline-flex items-center bg-white text-orange-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        Start Free Trial <ChevronRight size={20} className="ml-2" />
                    </button>
                </div>
                {/* Abstract background illustration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <img src="https://placehold.co/1920x1080/000000/ffffff?text=Retail+Store+Illustration" alt="Abstract background" className="w-full h-full object-cover" />
                </div>
            </motion.section>

            {/* Key Features Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features for Your Retail Business</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our software is built to handle the unique challenges of the retail industry, from billing to inventory management.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {keyFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                                className="bg-white p-8 rounded-xl shadow-md border-t-4 border-orange-500 transition-all duration-300"
                            >
                                <div className="mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12">
                        <motion.div variants={itemVariants} className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Ahead of the Curve</h2>
                            <ul className="space-y-6 text-lg text-gray-700">
                                <motion.li variants={itemVariants} className="flex items-start space-x-3">
                                    <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>Seamless billing integration with real-time inventory updates.</span>
                                </motion.li>
                                <motion.li variants={itemVariants} className="flex items-start space-x-3">
                                    <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>Multi-store and multi-godown support for growing retail chains.</span>
                                </motion.li>
                                <motion.li variants={itemVariants} className="flex items-start space-x-3">
                                    <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>Intuitive UI that enables rapid staff training and minimizes errors.</span>
                                </motion.li>
                                <motion.li variants={itemVariants} className="flex items-start space-x-3">
                                    <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>Multilingual invoice capabilities to serve diverse customer bases.</span>
                                </motion.li>
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className="lg:w-1/2">
                            <img src="https://placehold.co/600x400/D1D5DB/1F2937?text=Retail+Dashboard" alt="Retail dashboard illustration" className="rounded-xl shadow-2xl w-full" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">
                            Answers to common queries about our retail accounting software.
                        </p>
                    </motion.div>
                    <Accordion.Root type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                <Accordion.Item value={`item-${index}`}>
                                    <Accordion.Header>
                                        <Accordion.Trigger className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-900 data-[state=open]:text-orange-500">
                                            {faq.question}
                                            <ChevronRight className="transform transition-transform duration-300 data-[state=open]:rotate-90" />
                                        </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content className="pt-4 overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </Accordion.Content>
                                </Accordion.Item>
                            </motion.div>
                        ))}
                    </Accordion.Root>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-green-500 to-teal-600 text-white py-16 md:py-24">
                <div className="container mx-auto px-6 text-center">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Retail Business?</h2>
                        <p className="text-lg md:text-xl mb-8">
                            Start your journey with a personalized demo or a free trial today.
                        </p>
                        <button
                            onClick={() => setCurrentPage('freetrial')}
                            className="inline-flex items-center space-x-2 bg-white text-green-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                            <span>Request a Demo</span>
                            <ChevronRight size={20} />
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Retail;
