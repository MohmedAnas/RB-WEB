import React from 'react';
import { motion } from 'framer-motion';

// Import icons from Tabler Icons for a consistent look
import { IconBuildingFactory, IconRuler, IconFileText, IconTrash, IconCalculator, IconQuestionMark } from '@tabler/icons-react';

// Data for the Key Features section
const featuresData = [
    {
        icon: <IconRuler size={48} />,
        title: "Multiple Units of Measurement",
        bullets: [
            "Set pricing and billing in units like pieces, sets, or cubic feet.",
            "Reduce errors with automatic unit conversions.",
            "Offer flexible selling based on client preferences."
        ]
    },
    {
        icon: <IconBuildingFactory size={48} />,
        title: "Material Requirement Planning (MRP)",
        bullets: [
            "Forecast raw material needs accurately.",
            "Avoid production delays with auto-generated purchase suggestions.",
            "Control costs by balancing inventory levels with demand."
        ]
    },
    {
        icon: <IconFileText size={48} />,
        title: "Job Work Management",
        bullets: [
            "Manage outsourcing workflows (e.g., upholstery, framing) efficiently.",
            "Track job work costs and progress in real time.",
            "Improve delivery speed with clear task oversight."
        ]
    },
    {
        icon: <IconTrash size={48} />,
        title: "Wastage Tracking & Control",
        bullets: [
            "Monitor material wastage during production.",
            "Identify areas of loss and implement reduction measures.",
            "Boost profitability through data-driven waste prevention."
        ]
    },
    {
        icon: <IconCalculator size={48} />,
        title: "Automated Wages Calculation",
        bullets: [
            "Support time-based or production-based payroll modes.",
            "Reduce manual errors and ensure timely labor payments.",
            "Maintain compliance with labor laws while improving transparency."
        ]
    },
];

// Data for the FAQ section
const faqsData = [
    {
        question: "How do I set up inventory with multiple measurement units?",
        answer: "Our software allows you to configure multiple units of measurement for a single product, such as 'pieces' and 'cubic feet,' and automatically converts between them to simplify inventory and billing."
    },
    {
        question: "Can I manage outsourcing job details and costs?",
        answer: "Yes, the Job Work Management feature provides a clear overview of all outsourced tasks, allowing you to track costs, monitor progress, and ensure timely completion."
    },
    {
        question: "Does the software handle material wastage tracking?",
        answer: "Absolutely. Our system includes dedicated tools to track material wastage during the production process. This data helps you identify areas for improvement and increase profitability."
    },
    {
        question: "How is labor payroll calculated?",
        answer: "The software supports both time-based and production-based wage calculation. You can set up specific rules and rates, and the system will automate payroll to reduce manual errors."
    },
    {
        question: "Can I track inventory in real-time across product categories?",
        answer: "Yes, you get real-time visibility into your inventory levels across all product categories. This helps you manage stock efficiently and fulfill customer orders without delays."
    }
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

const Furniture = ({ setCurrentPage }) => {
    return (
        <div className="bg-gray-50 text-gray-800 font-inter">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-stone-600 to-gray-800 text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold"
                    >
                        Smart Accounting & Inventory Software for Furniture Businesses
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto"
                    >
                        Streamline your sales and manufacturing workflows with intuitive invoice processing, live inventory tracking, and smart order management—built exclusively for furniture businesses.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentPage('freetrial')}
                        className="mt-8 bg-white text-stone-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
                    >
                        Start Your Free Trial
                    </motion.button>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Powerful Features for Your Furniture Business
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
                                className="bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600"
                            >
                                <div className="text-amber-600 mb-4">{feature.icon}</div>
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
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    <IconQuestionMark size={20} className="inline-block mr-2 text-stone-600" />
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Furniture;
