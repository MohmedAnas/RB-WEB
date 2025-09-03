import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    CheckCircle,
    Truck,
    Wallet,
    ClipboardList,
    Layers,
    BarChart,
    Search,
    Lightbulb,
    HelpCircle
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FMCG = ({ setCurrentPage }) => {
    // Reusable Framer Motion variants
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const keyFeatures = [
        {
            icon: <Truck size={48} className="text-orange-500" />,
            title: "Distribution Management",
            description: "Optimize your supply chain from a single dashboard. Manage consignments, track shipments, and ensure timely delivery."
        },
        {
            icon: <Wallet size={48} className="text-orange-500" />,
            title: "Scheme & Offer Management",
            description: "Easily handle complex promotional schemes and discounts. Implement seasonal offers and track their performance."
        },
        {
            icon: <ClipboardList size={48} className="text-orange-500" />,
            title: "Customizable Invoicing",
            description: "Generate professional, GST-compliant invoices tailored to your business needs, with support for multiple formats."
        },
        {
            icon: <Layers size={48} className="text-orange-500" />,
            title: "Batch & Expiry Control",
            description: "Gain complete visibility into your stock with batch-wise and expiry-date tracking, minimizing waste and ensuring compliance."
        },
        {
            icon: <BarChart size={48} className="text-orange-500" />,
            title: "Detailed Analytics",
            description: "Access powerful reports and analytics to monitor sales, inventory, and profit margins in real-time."
        },
        {
            icon: <Search size={48} className="text-orange-500" />,
            title: "Quick Search & Audit",
            description: "Find any transaction or voucher instantly. The built-in audit trail helps maintain accountability and security."
        },
    ];

    const faqs = [
        {
            question: "How can this software improve my distribution process?",
            answer: "The software provides an integrated system to manage your entire distribution network, from stock allocation to delivery tracking, all from a centralized platform."
        },
        {
            question: "Is it suitable for multi-location businesses?",
            answer: "Yes, it is specifically designed to handle multi-branch operations, allowing you to manage inventory, sales, and reporting for all your locations in one place."
        },
        {
            question: "What kind of support is available?",
            answer: "We offer comprehensive support services, including remote assistance and on-site training, to ensure your team is proficient and your operations run smoothly."
        },
        {
            question: "Can I manage different promotional schemes?",
            answer: "Absolutely. The software's scheme management module allows you to create, track, and manage various discounts and promotional offers, giving you full control over your marketing campaigns."
        },
    ];

    useEffect(() => {
        // GSAP animation for the CTA button
        gsap.fromTo('.fmcg-cta',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.6 }
        );

        // GSAP ScrollTrigger for sections
        gsap.utils.toArray('.animated-section').forEach((section) => {
            gsap.fromTo(section,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        });
    }, []);

    return (
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 md:py-32 overflow-hidden animated-section"
            >
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Smart Solutions for <br /> FMCG Distribution
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        Streamline your entire supply chain, manage complex schemes, and get real-time insights with our advanced accounting software.
                    </p>
                    <button
                        onClick={() => setCurrentPage('freetrial')}
                        className="inline-flex items-center bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 fmcg-cta"
                    >
                        Learn More <ChevronRight size={20} className="ml-2" />
                    </button>
                </div>
                {/* Abstract background illustration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <img src="https://placehold.co/1920x1080/000000/ffffff?text=Abstract+Geometric+Pattern" alt="Abstract background" className="w-full h-full object-cover" />
                </div>
            </motion.section>

            {/* Key Features Section */}
            <section className="py-16 md:py-24 animated-section">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" animate="visible" variants={container} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features for FMCG</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our software is built to handle the unique challenges of the FMCG industry, from distribution to promotions.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" animate="visible" variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {keyFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
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

            {/* Benefits Section */}
            <section className="bg-white py-16 md:py-24 animated-section">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of Our Solution</h2>
                            <ul className="space-y-6 text-lg text-gray-700">
                                <motion.li variants={fadeIn} className="flex items-start space-x-3">
                                    <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>Improved operational efficiency and reduced manual errors in your workflow.</span>
                                </motion.li>
                                <motion.li variants={fadeIn} className="flex items-start space-x-3">
                                    <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>Better control over inventory with precise tracking and reorder notifications.</span>
                                </motion.li>
                                <motion.li variants={fadeIn} className="flex items-start space-x-3">
                                    <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>Enhanced decision-making with access to real-time financial and sales data.</span>
                                </motion.li>
                                <motion.li variants={fadeIn} className="flex items-start space-x-3">
                                    <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>Increased compliance with automated GST reporting and invoicing features.</span>
                                </motion.li>
                            </ul>
                        </div>
                        <motion.div variants={fadeIn} className="lg:w-1/2">
                            <img src="https://placehold.co/600x400/D1D5DB/1F2937?text=Operational+Dashboard" alt="Dashboard illustration" className="rounded-xl shadow-2xl w-full" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24 animated-section">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Find answers to the most frequently asked questions about our FMCG solutions.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" animate="visible" variants={container} className="space-y-6 max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <motion.div variants={fadeIn} key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-2">
                                    <HelpCircle size={20} className="text-blue-500 mr-2 flex-shrink-0" />
                                    <span>{faq.question}</span>
                                </h3>
                                <p className="text-gray-600 pl-7">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-green-500 to-teal-600 text-white py-16 md:py-24 animated-section">
                <div className="container mx-auto px-6 text-center">
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your FMCG Business?</h2>
                        <p className="text-lg md:text-xl mb-8">
                            Get started with a personalized demo or a free trial to see our software in action.
                        </p>
                        <button
                            onClick={() => setCurrentPage('freetrial')}
                            className="inline-flex items-center space-x-2 bg-white text-green-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 fmcg-cta"
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

export default FMCG;
