import React from 'react';
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
    HelpCircle,
    ShoppingBag,
    Tag,
    Scan,
    MessageSquareText
} from 'lucide-react';

const Garments = ({ setCurrentPage }) => {
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
            icon: <ShoppingBag size={48} className="text-orange-500" />,
            title: "Point-of-Sale (POS)",
            description: "Efficiently manage sales at the counter with a user-friendly and fast POS system, compatible with barcode scanners."
        },
        {
            icon: <Tag size={48} className="text-orange-500" />,
            title: "Scheme & Discount Management",
            description: "Easily create and track promotional offers, seasonal discounts, and customer-specific schemes to boost sales."
        },
        {
            icon: <Layers size={48} className="text-orange-500" />,
            title: "Inventory by Size/Color",
            description: "Gain complete visibility of your stock, with detailed tracking for items by size, color, and design, reducing stockouts and overstocking."
        },
        {
            icon: <ClipboardList size={48} className="text-orange-500" />,
            title: "Order & Challan Processing",
            description: "Simplify your order lifecycle from quotation to final invoice with seamless challan and order management features."
        },
        {
            icon: <Scan size={48} className="text-orange-500" />,
            title: "Barcode Printing",
            description: "Generate and print custom barcodes for your products directly from the software, speeding up your billing process."
        },
        {
            icon: <CheckCircle size={48} className="text-orange-500" />,
            title: "GST Compliance",
            description: "Automate GST-compliant billing, accounting, and return filing to ensure your business stays compliant with Indian tax regulations."
        },
    ];

    const faqs = [
        {
            question: "Is this software suitable for a small garment boutique?",
            answer: "Yes, our solution is highly scalable and perfect for boutiques. It allows you to manage inventory, sales, and customer data efficiently."
        },
        {
            question: "Can I manage multiple retail outlets with this software?",
            answer: "Absolutely. The Enterprise edition of our software is designed for multi-branch management, allowing you to centrally control all your outlets."
        },
        {
            question: "How does the software handle different sizes and colors for the same item?",
            answer: "Our advanced inventory system allows you to track a single product across multiple variants, such as size, color, and style, giving you precise stock control."
        },
        {
            question: "Is training available for my staff?",
            answer: "We offer dedicated on-site and remote training services to ensure your entire team is comfortable and proficient with the software from day one."
        },
    ];

    return (
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                className="relative bg-gradient-to-r from-teal-600 to-green-700 text-white py-24 md:py-32 overflow-hidden"
            >
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Perfect Solutions for <br /> Garment Retail
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        Streamline your entire retail operation, from inventory to sales, and delight your customers with a faster, smarter billing experience.
                    </p>
                    <button
                        onClick={() => setCurrentPage('freetrial')}
                        className="inline-flex items-center bg-white text-green-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        Request a Demo <ChevronRight size={20} className="ml-2" />
                    </button>
                </div>
                {/* Abstract background illustration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <img src="https://placehold.co/1920x1080/000000/ffffff?text=Abstract+Geometric+Pattern" alt="Abstract background" className="w-full h-full object-cover" />
                </div>
            </motion.section>

            {/* Key Features Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features for Garment Stores</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our software is designed to handle the unique demands of the garment industry, from stock management to customer service.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {keyFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                                className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-500 transition-all duration-300"
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
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12">
                        <motion.div variants={itemVariants} className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Benefits for Retailers</h2>
                            <ul className="space-y-6 text-lg text-gray-700">
                                <motion.li variants={itemVariants} className="flex items-start space-x-3">
                                    <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>Streamlined billing and faster checkout times for a better customer experience.</span>
                                </motion.li>
                                <motion.li variants={itemVariants} className="flex items-start space-x-3">
                                    <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>Accurate inventory tracking, preventing lost sales and reducing manual audits.</span>
                                </motion.li>
                                <motion.li variants={itemVariants} className="flex items-start space-x-3">
                                    <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>Customizable reports that provide valuable insights into sales, top-selling items, and stock levels.</span>
                                </motion.li>
                                <motion.li variants={itemVariants} className="flex items-start space-x-3">
                                    <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>Automated GST compliance, helping you avoid errors and save time on paperwork.</span>
                                </motion.li>
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className="lg:w-1/2">
                            <img src="https://placehold.co/600x400/D1D5DB/1F2937?text=Retail+Management" alt="Retail dashboard" className="rounded-xl shadow-2xl w-full" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Get answers to common questions about our garment management software.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="space-y-6 max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <motion.div variants={itemVariants} key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-2">
                                    <HelpCircle size={20} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span>{faq.question}</span>
                                </h3>
                                <p className="text-gray-600 pl-7">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white py-16 md:py-24">
                <div className="container mx-auto px-6 text-center">
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Garment Business?</h2>
                        <p className="text-lg md:text-xl mb-8">
                            Start your journey with a personalized demo or a free trial today.
                        </p>
                        <button
                            onClick={() => setCurrentPage('freetrial')}
                            className="inline-flex items-center space-x-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
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

export default Garments;
