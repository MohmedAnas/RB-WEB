import React from 'react';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    CheckCircle,
    Clipboard,
    PieChart,
    Layers,
    Lightbulb,
    HelpCircle,
    User,
    BarChart,
    Database,
    ShieldCheck,
    LifeBuoy
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

const PaperMill = ({ setCurrentPage }) => {
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

    const keyComponents = [
        {
            icon: <Clipboard size={48} className="text-orange-500" />,
            title: "GST Billing Module",
            description: "Automate invoicing and ensure full compliance with GST regulations for all your paper products and services."
        },
        {
            icon: <PieChart size={48} className="text-orange-500" />,
            title: "Accounting Dashboard",
            description: "Gain instant financial insights with a real-time dashboard. Track revenue, expenses, and profitability effortlessly."
        },
        {
            icon: <Layers size={48} className="text-orange-500" />,
            title: "Inventory & Stock Management",
            description: "Monitor stock levels, track batches, and manage reorder points to prevent stockouts and optimize your warehouse."
        },
    ];

    const benefits = [
        "Simplify GST compliance with automated calculations and report generation.",
        "Streamline day-to-day operations by eliminating manual data entry.",
        "Control production costs and reduce waste with accurate stock tracking.",
        "Make smarter business decisions with clear, data-driven financial reports."
    ];

    const features = [
        {
            icon: <User size={24} className="text-blue-500" />,
            text: "Intuitive and user-friendly interface for your entire team."
        },
        {
            icon: <Layers size={24} className="text-blue-500" />,
            text: "Advanced batch and expiry tracking to manage paper products effectively."
        },
        {
            icon: <BarChart size={24} className="text-blue-500" />,
            text: "Customizable financial reports to suit your business needs."
        },
        {
            icon: <Database size={24} className="text-blue-500" />,
            text: "Seamless integration with other business tools and hardware."
        },
        {
            icon: <ShieldCheck size={24} className="text-blue-500" />,
            text: "Robust security features to protect your sensitive financial data."
        },
        {
            icon: <LifeBuoy size={24} className="text-blue-500" />,
            text: "Dedicated support and training to get you started quickly."
        },
    ];

    const howToGetStarted = [
        "Assess your current business needs and identify key areas for improvement.",
        "Compare our software’s features with your requirements to find the best fit.",
        "Download and try our free trial to experience the benefits firsthand.",
        "Train your staff with our comprehensive on-site or remote training sessions.",
        "Keep your software updated to get the latest features and security enhancements."
    ];
    
    const faqs = [
        {
            question: "How does the software handle different paper sizes and types?",
            answer: "Our software's robust inventory management system allows you to categorize and track stock by various attributes, including size, weight, and paper type."
        },
        {
            question: "Can I manage multiple warehouses or locations?",
            answer: "Yes, our multi-location feature allows you to manage inventory and sales for all your warehouses from a single, centralized dashboard."
        },
        {
            question: "Is the software compatible with my existing billing hardware?",
            answer: "The software is designed to be highly compatible with a wide range of hardware, including barcode scanners and printers, for a seamless billing experience."
        }
    ];

    return (
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                className="relative bg-gradient-to-r from-blue-500 to-sky-600 text-white py-24 md:py-32 overflow-hidden"
            >
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Accounting & Inventory Software <br /> for the Paper Industry
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        Streamline your entire paper mill business, from production to distribution, with our powerful and easy-to-use software solution.
                    </p>
                    <button
                        onClick={() => setCurrentPage('freetrial')}
                        className="inline-flex items-center bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        Try Free Trial <ChevronRight size={20} className="ml-2" />
                    </button>
                </div>
                {/* Abstract background illustration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <img src="https://placehold.co/1920x1080/000000/ffffff?text=Paper+Industry+Illustration" alt="Abstract background" className="w-full h-full object-cover" />
                </div>
            </motion.section>

            {/* Key Components Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Components of Our Solution</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our software is built to address the specific needs of the paper mill industry, helping you manage every aspect of your business.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {keyComponents.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                                className="bg-white p-8 rounded-xl shadow-md border-t-4 border-orange-500 transition-all duration-300 flex flex-col items-center text-center"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12">
                        <motion.div variants={itemVariants} className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Software for Your Paper Business?</h2>
                            <ul className="space-y-6 text-lg text-gray-700">
                                {benefits.map((benefit, index) => (
                                    <motion.li variants={itemVariants} key={index} className="flex items-start space-x-3">
                                        <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className="lg:w-1/2">
                            <img src="https://placehold.co/600x400/D1D5DB/1F2937?text=Paper+Mill+Dashboard" alt="Dashboard illustration" className="rounded-xl shadow-2xl w-full" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Overview Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Features Overview</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A closer look at the advanced capabilities that set our software apart.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div variants={itemVariants} key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                                <div className="mt-1">{feature.icon}</div>
                                <p className="text-lg text-gray-700">{feature.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* How to Get Started Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Get Started</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Follow these simple steps to begin your journey to better business management.
                        </p>
                    </motion.div>
                    <motion.ol initial="hidden" whileInView="visible" variants={containerVariants} className="list-none space-y-6 max-w-3xl mx-auto text-left">
                        {howToGetStarted.map((step, index) => (
                            <motion.li variants={itemVariants} key={index} className="flex items-center space-x-4">
                                <div className="flex-shrink-0 text-white font-bold text-xl bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                                    {index + 1}
                                </div>
                                <span className="text-lg text-gray-700">{step}</span>
                            </motion.li>
                        ))}
                    </motion.ol>
                </div>
            </section>
            
            {/* FAQ Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">
                            Answers to common queries about our paper mill software.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Paper Business?</h2>
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

export default PaperMill;
