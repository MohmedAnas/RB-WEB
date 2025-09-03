import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// BackButton import removed

// Import icons from Tabler Icons
import {
    IconBook,
    IconChartBar,
    IconBuildingBank,
    IconRefresh,
    IconFileInvoice,
    IconGlobe,
    IconQuestionMark,
    IconChevronDown,
    IconUsers,
    IconShield,
    IconCheck,
    IconAdjustments,
    IconArrowRight,
} from '@tabler/icons-react';

// Data for the Process Steps section
const processStepsData = [
    {
        icon: <IconBook size={48} />,
        title: "Complete Accounting Suite",
        bullets: [
            "Generate ledgers, trial balances, and final accounts effortlessly.",
            "Instantly access inventory reports, tax summaries, and P&L insights."
        ]
    },
    {
        icon: <IconChartBar size={48} />,
        title: "Sales & Purchase Analysis",
        bullets: [
            "Monitor receivables, top expenses, and top-selling items.",
            "Segment data by item, group, or party for detailed insights."
        ]
    },
    {
        icon: <IconBuildingBank size={48} />,
        title: "Bank Reconciliation Made Easy",
        bullets: [
            "Auto-sync with your bank to find and reconcile mismatches.",
            "Accelerate reconciliation without manual entry."
        ]
    },
    {
        icon: <IconRefresh size={48} />,
        title: "Accurate Ledger Reconciliation",
        bullets: [
            "Identify variances, balance cash flows, and track adjustments accurately.",
            "Maintain a clear and precise view of your account history."
        ]
    },
    {
        icon: <IconFileInvoice size={48} />,
        title: "GST-Compliant Invoicing",
        bullets: [
            "Customise branded invoice templates.",
            "Ensure GSTIN validation and simplify billing compliantly."
        ]
    },
    {
        icon: <IconGlobe size={48} />,
        title: "Multi-Currency Support",
        bullets: [
            "Process global transactions in multiple currencies.",
            "Seamlessly manage imports, exports, and forex records."
        ]
    }
];

// Sample data for the demo chart
const chartData = [
    { name: 'Jan', Revenue: 4000, Expenses: 2400 },
    { name: 'Feb', Revenue: 3000, Expenses: 1398 },
    { name: 'Mar', Revenue: 2000, Expenses: 9800 },
    { name: 'Apr', Revenue: 2780, Expenses: 3908 },
    { name: 'May', Revenue: 1890, Expenses: 4800 },
    { name: 'Jun', Revenue: 2390, Expenses: 3800 },
];

// Data for the FAQ section
const faqsData = [
    {
        question: "What accounting reports does BUSY simplify?",
        answer: "BUSY simplifies the creation of essential reports like ledgers, trial balances, and P&L statements. It also provides instant access to inventory reports and tax summaries to streamline compliance."
    },
    {
        question: "How effortless is bank reconciliation?",
        answer: "Bank reconciliation is made easy through auto-syncing capabilities that match entries and identify variances between your bank statement and ledgers. This eliminates manual work and accelerates the process significantly."
    },
    {
        question: "Does BUSY support GST invoicing and export?",
        answer: "Yes, BUSY ensures GST-compliant billing, supports branded invoices, and helps in the preparation of GST returns. It also handles GSTIN validation to prevent errors."
    },
    {
        question: "Can multiple users collaborate simultaneously?",
        answer: "Yes, the software supports real-time multi-user collaboration with customizable access and permission levels, allowing your team to work together efficiently and securely."
    },
    {
        question: "Is my financial data secure and backed up?",
        answer: "BUSY provides robust data security features, including automated backups, data encryption, and sync safeguards. This ensures your financial information is always protected and available."
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

const FinancialAccounting = ({ setCurrentPage }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-inter">
            {/* Back Button removed from here */}
            {/* Section 1: Introduction */}
            <section className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold"
                    >
                        How BUSY Streamlines the Financial Accounting Process
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto"
                    >
                        Our software enhances your financial accounting workflow, giving you effortless control over ledgers, reports, and compliance. From real-time sales analysis to automated bank reconciliation, BUSY simplifies every step to boost your business's accuracy and productivity.
                    </motion.p>
                </div>
            </section>

            {/* Section 2: Process Steps */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-3xl font-bold text-center mb-12 text-gray-900"
                    >
                        Key Financial Features
                    </motion.h2>
                    <div className="max-w-4xl mx-auto space-y-8">
                        {processStepsData.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="flex items-start p-6 rounded-lg bg-gray-50 shadow-md border-l-4 border-indigo-500"
                            >
                                <div className="flex-shrink-0 text-indigo-500 mr-6">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                                        {feature.bullets.map((bullet, i) => (
                                            <li key={i}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Demo Graph/Chart */}
            <section className="py-16 px-4 md:px-8 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-3xl font-bold text-center mb-12 text-gray-900"
                    >
                        Financial Performance Snapshot
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="bg-white p-6 rounded-xl shadow-md w-full h-80 md:h-96"
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={chartData}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Revenue" fill="#4f46e5" />
                                <Bar dataKey="Expenses" fill="#f43f5e" />
                            </BarChart>
                        </ResponsiveContainer>
                    </motion.div>
                </div>
            </section>

            {/* Section 4: CTA Button */}
            <section className="text-center py-12 px-4 md:px-8">
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    onClick={() => setCurrentPage('freetrial')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center bg-indigo-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    Want to Try BUSY?
                    <IconChevronDown size={24} className="ml-2" />
                </motion.button>
            </section>

            {/* Section 5: FAQ */}
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
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        <span className="text-indigo-600 font-bold mr-2">{index + 1}.</span>
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        initial={false}
                                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <IconChevronDown size={24} className="text-indigo-600" />
                                    </motion.div>
                                </div>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden text-gray-600"
                                >
                                    <p className="pt-4">{faq.answer}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default FinancialAccounting;
