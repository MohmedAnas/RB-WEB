import React from 'react';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    CheckCircle,
    FlaskConical,
    PieChart,
    Layers,
    CalendarCheck,
    ListChecks,
    HelpCircle,
    User,
    BarChart,
    Database,
    ShieldCheck
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

const ChemicalIndustryPage = ({ setCurrentPage }) => {
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
            icon: <Layers size={48} className="text-amber-500" />,
            title: "Flexible Units Management",
            bullets: [
                "Track and sell products in multiple units (liters, kilograms, drums).",
                "Ensures precision in inventory and pricing."
            ]
        },
        {
            icon: <ListChecks size={48} className="text-amber-500" />,
            title: "Material Requirement Planning (MRP)",
            bullets: [
                "Forecast raw material needs and automate restocking.",
                "Avoid stockouts and optimize procurement."
            ]
        },
        {
            icon: <PieChart size={48} className="text-amber-500" />,
            title: "Batch-Level Inventory Control",
            bullets: [
                "Tag each batch with manufacturing and expiry dates.",
                "Support safe consumption and compliance."
            ]
        },
        {
            icon: <CalendarCheck size={48} className="text-amber-500" />,
            title: "Expiry & Manufacturing Date Tracking",
            bullets: [
                "Automate shelf-life checks to prevent expired stock.",
                "Enhance quality control and transparency."
            ]
        },
        {
            icon: <FlaskConical size={48} className="text-amber-500" />,
            title: "BOM & Production Workflow",
            bullets: [
                "Build and manage Bills of Materials for formulations.",
                "Link raw materials to finished products, reducing waste."
            ]
        },
    ];

    const whyChooseIt = [
        "Excise duty automation for error-free tax calculations.",
        "Batch traceability for safety and regulatory compliance.",
        "Detailed cost tracking across the entire production cycle.",
        "Scalable to grow with your manufacturing operations."
    ];

    const faqs = [
        {
            question: "What differentiates this software for chemical businesses?",
            answer: "Our software offers tailored features like batch tracking, expiry alerting, and excise handling that are crucial for the chemical industry."
        },
        {
            question: "Does it support multiple unit conversions?",
            answer: "Yes, it automatically converts and bills products in different units such as kilograms, liters, or pieces."
        },
        {
            question: "How does the software handle excise and GST compliance?",
            answer: "It automates all tax calculations and statutory reporting, ensuring smooth and error-free compliance with excise and GST regulations."
        },
        {
            question: "Can it manage formulations and production costs?",
            answer: "Yes, you can use the Bill of Materials (BOM) feature to accurately estimate production costs and manage raw material consumption for your formulations."
        },
    ];

    return (
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                className="relative bg-gradient-to-r from-blue-700 to-sky-800 text-white py-24 md:py-32 overflow-hidden"
            >
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Smart Accounting & Inventory Software <br /> for the Chemical Industry
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        Streamline your entire supply chain, manage batches with precision, and ensure compliance with a powerful software solution.
                    </p>
                    <button
                        onClick={() => setCurrentPage('freetrial')}
                        className="inline-flex items-center bg-white text-blue-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        Try Free Trial <ChevronRight size={20} className="ml-2" />
                    </button>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <img src="https://placehold.co/1920x1080/000000/ffffff?text=Chemical+Industry+Illustration" alt="Abstract background" className="w-full h-full object-cover" />
                </div>
            </motion.section>

            {/* Key Features Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features for Chemical Businesses</h2>
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
                                <div className="mb-4">{feature.icon}</div>
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

            {/* Why Choose It? Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Solution?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our software provides tailored advantages that address the unique challenges of the chemical industry.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChooseIt.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-start space-x-3 bg-gray-100 p-6 rounded-xl shadow-md border-l-4 border-blue-500"
                            >
                                <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-lg text-gray-700">{benefit}</span>
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
                            Answers to common queries about our chemical industry software.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Chemical Business?</h2>
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

export default ChemicalIndustryPage;
