import React from 'react';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    Clipboard,
    Layers,
    Book,
    FileText,
    DollarSign,
    CheckCircle,
    Truck,
    HelpCircle
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

const BookPublishingPage = ({ setCurrentPage }) => {
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
            icon: <Layers size={48} className="text-teal-500" />,
            title: "Edition & Batch Inventory Control",
            description: "Track every edition and print batch with unique identifiers. Manage reprints and phaseouts to optimize your stock."
        },
        {
            icon: <Book size={48} className="text-teal-500" />,
            title: "ISBN & Metadata Tracking",
            description: "Easily manage important metadata like ISBN, authors, and binding types. Streamline searches and stock categorization."
        },
        {
            icon: <DollarSign size={48} className="text-teal-500" />,
            title: "Royalty Calculation & Payments",
            description: "Automatically calculate author royalties based on sales and contract terms, ensuring transparent and timely disbursements."
        },
        {
            icon: <Truck size={48} className="text-teal-500" />,
            title: "Smart Stock Reorder & Planning",
            description: "Set reorder thresholds to automatically trigger purchase suggestions for new print runs, preventing stockouts and overstock."
        },
        {
            icon: <FileText size={48} className="text-teal-500" />,
            title: "Sales Channels & Returns Integration",
            description: "Sync orders from multiple channels. Easily manage returns, replacements, and financial adjustments in a unified system."
        },
        {
            icon: <Clipboard size={48} className="text-teal-500" />,
            title: "Financial Reporting & Tax Compliance",
            description: "Generate professional financial reports and GST-ready invoices. Track printing costs and ensure compliance with tax regulations."
        },
    ];

    const faqs = [
        {
            question: "Can the software handle multiple versions of the same book?",
            answer: "Yes, our system allows you to track each edition, format, and print batch separately for precise inventory and royalty management."
        },
        {
            question: "How are author royalties calculated?",
            answer: "The software automates royalty calculations by applying contract terms (like percentage or fixed rates) to sales data, providing transparent and accurate reports."
        },
        {
            question: "Is it possible to manage returns from retailers or distributors?",
            answer: "Yes, you can easily register returns from various sales channels, automatically update your inventory, and reflect the financial adjustments in your accounts."
        },
        {
            question: "Does the software support ISBN and metadata lookup?",
            answer: "Absolutely. Our system allows for quick ISBN entry and metadata search, simplifying the process of adding new titles and managing your catalog."
        },
        {
            question: "Can I generate royalty reports per author or title?",
            answer: "Yes, you can generate detailed reports that are filtered by author, book title, or specific date ranges, which streamlines the royalty payout process."
        },
        {
            question: "Is the software ready for GST or VAT compliance?",
            answer: "Yes, the software is fully equipped to handle GST and VAT compliance. It helps you create compliant invoices and export tax-ready documentation effortlessly."
        },
    ];

    return (
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                className="relative bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-24 md:py-32 overflow-hidden"
            >
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Efficient Accounting & Inventory Software <br /> for Book Publishers
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        Manage inventory, track editions, and optimize royalty payouts in one intuitive system tailored for publishers.
                    </p>
                    <button
                        onClick={() => setCurrentPage('freetrial')}
                        className="inline-flex items-center bg-white text-teal-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        Request a Demo <ChevronRight size={20} className="ml-2" />
                    </button>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <img src="https://placehold.co/1920x1080/000000/ffffff?text=Book+Publishing+Illustration" alt="Abstract background" className="w-full h-full object-cover" />
                </div>
            </motion.section>

            {/* Key Features Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Features for Modern Publishing</h2>
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
                                className="bg-white p-8 rounded-xl shadow-md border-t-4 border-amber-500 transition-all duration-300"
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

            {/* FAQ Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">
                            Answers to common queries about our book publishing software.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Publishing Business?</h2>
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

export default BookPublishingPage;
