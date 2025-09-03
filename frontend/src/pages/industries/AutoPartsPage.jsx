import React from 'react';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    ClipboardList,
    Layers,
    Tags,
    ShieldCheck,
    Search,
    Truck
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

const AutoPartsPage = ({ setCurrentPage }) => {
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

    const featuresData = [
        {
            icon: <Truck size={48} className="text-orange-500" />,
            title: "Region-wise Dealer Management",
            description: "Optimize your distribution by managing dealers across different territories with dedicated communication and performance tracking."
        },
        {
            icon: <Layers size={48} className="text-orange-500" />,
            title: "Model-specific Inventory Control",
            description: "Keep track of stock with granular detail, including model, make, and year, ensuring you always have the right parts on hand."
        },
        {
            icon: <Tags size={48} className="text-orange-500" />,
            title: "Serial Number & Warranty Tracking",
            description: "Easily trace every part with a unique serial number, streamlining returns and providing robust warranty support for your customers."
        },
        {
            icon: <ClipboardList size={48} className="text-orange-500" />,
            title: "Fast & Accurate Auto Billing",
            description: "Create professional and precise invoices in seconds, automating billing cycles and ensuring financial accuracy."
        },
        {
            icon: <Search size={48} className="text-orange-500" />,
            title: "Custom Pricing & Discounts",
            description: "Implement flexible pricing strategies and targeted promotions, such as volume-based discounts, to stay competitive."
        },
        {
            icon: <ShieldCheck size={48} className="text-orange-500" />,
            title: "Secure Data Exchange (BDEP)",
            description: "Ensure trusted business communications with secure, encrypted data syncs for invoices and other documents, saving you time and effort."
        },
    ];

    const faqs = [
        {
            question: "Is this software suitable for auto parts dealers?",
            answer: "Yes, our solution is tailored specifically for auto parts dealers, providing tools for inventory, billing, and dealer management."
        },
        {
            question: "How does this software help manage parts returns and warranties?",
            answer: "The software uses serial number tracking to provide item-level traceability, making it easy to manage returns and handle warranty claims efficiently."
        },
        {
            question: "Can it handle pricing and promotions by customer or vehicle model?",
            answer: "Yes, our system allows you to create custom pricing rules and apply targeted discounts based on customer profiles or specific vehicle models."
        },
        {
            question: "Is my dealership's data safe and secure with this software?",
            answer: "Our software features robust security protocols and encrypted data exchange to ensure your sensitive dealership data is always protected."
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
                        Accounting & Inventory Software <br /> for Auto Parts Stores
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        Streamline billing, manage your inventory with precision, and enhance dealer communication to drive business growth.
                    </p>
                    <button
                        onClick={() => setCurrentPage('freetrial')}
                        className="inline-flex items-center bg-white text-blue-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        Start Your Free Trial <ChevronRight size={20} className="ml-2" />
                    </button>
                </div>
                {/* Abstract background illustration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <img src="https://placehold.co/1920x1080/000000/ffffff?text=Auto+Parts+Illustration" alt="Abstract background" className="w-full h-full object-cover" />
                </div>
            </motion.section>

            {/* Feature Highlights Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features for Auto Parts Businesses</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our software provides a comprehensive suite of tools to manage your entire operation.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuresData.map((feature, index) => (
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

            {/* FAQ Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">
                            Answers to common queries about our auto parts software.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Auto Parts Business?</h2>
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

export default AutoPartsPage;
