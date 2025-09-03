import React from 'react';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    CheckCircle,
    HardDrive,
    Tag,
    ClipboardList,
    ScrollText,
    ListChecks,
    HelpCircle,
    User,
    ShieldCheck
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

const ComputerHardwarePage = ({ setCurrentPage }) => {
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
            icon: <Tag size={48} className="text-blue-500" />,
            title: "Serial Number-Wise Stock Control",
            description: "Track each individual hardware unit with a unique serial number to monitor its precise movement and location, preventing loss and mismatch."
        },
        {
            icon: <ScrollText size={48} className="text-blue-500" />,
            title: "Warranty Tracking & Support",
            description: "Record warranty start and end dates for every device. The system automates reminders for claims and streamlines the support process."
        },
        {
            icon: <ListChecks size={48} className="text-blue-500" />,
            title: "Categorization & Product Labelling",
            description: "Organize your inventory by type, brand, or model. This speeds up order fulfillment and provides clear insights into category performance."
        },
        {
            icon: <ClipboardList size={48} className="text-blue-500" />,
            title: "Rapid & Accurate Billing",
            description: "Create GST-compliant invoices quickly using pre-set templates. The automated billing process reduces errors and saves time during checkout."
        },
        {
            icon: <User size={48} className="text-blue-500" />,
            title: "Quotation & Order Management",
            description: "Generate instant quotes for clients. Seamlessly convert these quotes into confirmed orders and maintain clear records for future reference."
        },
        {
            icon: <ShieldCheck size={48} className="text-blue-500" />,
            title: "Secure Data Exchange",
            description: "Share invoices and other documents with clients via a secure, encrypted system. This ensures data integrity and saves time on manual transfers."
        },
    ];

    const faqs = [
        {
            question: "Is this software suitable for multi-branch hardware stores?",
            answer: "Yes, our solution is designed for scalability and can handle multiple store locations with centralized inventory and accounting management."
        },
        {
            question: "Can I track individual components and accessories?",
            answer: "Yes, every item, from a single component to a full device, can be tracked using unique serial numbers or part numbers for complete visibility."
        },
        {
            question: "Does it support billing in both tax-inclusive and tax-exclusive modes?",
            answer: "Yes, you can easily toggle between tax-inclusive and tax-exclusive billing modes to accommodate different customer preferences or regulatory requirements."
        },
        {
            question: "How is warranty support handled?",
            answer: "The software records warranty periods at the time of sale and provides automated alerts, streamlining the claims process and improving customer service."
        },
        {
            question: "Is the software easy for non-accountants to use?",
            answer: "Absolutely. The software's intuitive user interface is designed for store managers and front-desk staff with minimal accounting knowledge, allowing for rapid onboarding and high efficiency."
        },
    ];

    return (
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 md:py-32 overflow-hidden"
            >
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Advanced Billing & Inventory Software <br /> for Computer Hardware Stores
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        Simplify sales, track individual units with precision, and support warranties effortlessly to deliver outstanding customer service.
                    </p>
                    <button
                        onClick={() => setCurrentPage('freetrial')}
                        className="inline-flex items-center bg-white text-blue-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        Start a Free Trial <ChevronRight size={20} className="ml-2" />
                    </button>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <img src="https://placehold.co/1920x1080/000000/ffffff?text=Computer+Hardware+Illustration" alt="Abstract background" className="w-full h-full object-cover" />
                </div>
            </motion.section>

            {/* Key Features Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Features for Hardware Retail</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our software provides a comprehensive suite of tools to manage your entire operation.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {keyFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                                className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-500 transition-all duration-300"
                            >
                                <div className="mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                    {feature.description.split("\n").map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">
                            Answers to common queries about our computer hardware software.
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

            {/* Final CTA Section */}
            <section className="bg-gradient-to-br from-green-500 to-teal-600 text-white py-16 md:py-24">
                <div className="container mx-auto px-6 text-center">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Hardware Business?</h2>
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

export default ComputerHardwarePage;
