import React from 'react';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    CheckCircle,
    Power,
    Tag,
    ClipboardList,
    ScrollText,
    ListChecks,
    HelpCircle,
    Wallet
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

const ElectricalShopPage = ({ setCurrentPage }) => {
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
            icon: <ScrollText size={48} className="text-amber-500" />,
            title: "Serial Number Tracking",
            bullets: [
                "Tag individual items with unique serial numbers.",
                "Monitor inventory across multiple locations.",
                "Trace each product's history for returns and service."
            ]
        },
        {
            icon: <CheckCircle size={48} className="text-amber-500" />,
            title: "Warranty & Support Management",
            bullets: [
                "Automate tracking of warranty periods per item.",
                "Receive alerts for warranty expiry.",
                "Streamline claims processing to build customer trust."
            ]
        },
        {
            icon: <ListChecks size={48} className="text-amber-500" />,
            title: "Product Categorization",
            bullets: [
                "Organize stock by brand, type, or specific category.",
                "Accelerate search and order fulfillment.",
                "Gain valuable insights into category-level sales performance."
            ]
        },
        {
            icon: <Wallet size={48} className="text-amber-500" />,
            title: "Efficient & Accurate Billing",
            bullets: [
                "Generate GST-compliant invoices quickly and digitally.",
                "Automatic tax calculations reduce manual errors.",
                "Supports both tax-inclusive and tax-exclusive billing modes."
            ]
        },
    ];

    const faqs = [
        {
            question: "Is this software suitable for small electrical stores?",
            answer: "Absolutely. Our solution is designed for businesses of all sizes, featuring a user-friendly interface that is easy to learn and scales with your business."
        },
        {
            question: "Can I track warranty periods for individual items?",
            answer: "Yes, you can enter and monitor warranty details for every item using its unique serial number, which simplifies after-sales service."
        },
        {
            question: "How does categorization improve inventory management?",
            answer: "Organizing your inventory by category or brand makes it faster to find items, manage stock, and generate insightful reports on what's selling best."
        },
        {
            question: "Is it possible to generate GST-compliant invoices automatically?",
            answer: "Yes, our system automatically calculates and applies the correct taxes, formatting your invoices to meet all GST regulations effortlessly."
        },
        {
            question: "Does it support returns and replacements for faulty items?",
            answer: "Certainly. Our software simplifies the process for managing returns and replacements. It automatically handles stock adjustments and invoice modifications, ensuring accuracy."
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
                        Powerful Billing & Inventory Software <br /> for Electrical Retailers
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        Streamline billing, manage inventory by serial number, track warranties, and categorize products for a more efficient business.
                    </p>
                    <button
                        onClick={() => setCurrentPage('freetrial')}
                        className="inline-flex items-center bg-white text-blue-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        Start Your Free Trial <ChevronRight size={20} className="ml-2" />
                    </button>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <img src="https://placehold.co/1920x1080/000000/ffffff?text=Electrical+Shop+Illustration" alt="Abstract background" className="w-full h-full object-cover" />
                </div>
            </motion.section>

            {/* Key Features Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features for Electrical Retail</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our software is built to handle the unique challenges of the electrical goods industry.
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
                                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
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
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">
                            Answers to common queries about our electrical goods software.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Streamline Your Electrical Business?</h2>
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

export default ElectricalShopPage;
