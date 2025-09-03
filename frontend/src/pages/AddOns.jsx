import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    IconShoppingCart,
    IconCurrencyRupee,
    IconCloudUpload,
    IconMessage,
    IconGauge,
    IconShield,
    IconFileAnalytics,
    IconFileInvoice,
    IconDeviceMobile,
    IconBell,
    IconTransfer,
    IconCloud,
    IconSignature,
    IconChartBar,
    IconQuestionMark,
    IconChevronDown,
    IconApps
} from '@tabler/icons-react';

const addonsData = [
    {
        icon: <IconShoppingCart size={48} />,
        name: "Kart Manager",
        description: "Helps import data from E-Commerce Portals like eBay, Amazon, FlipKart.",
    },
    {
        icon: <IconCurrencyRupee size={48} />,
        name: "Collection Engine",
        description: "Automate your Payment Reminder, Dues, Outstanding & Manage your customer groups on the basis of purchase & Interest.",
    },
    {
        icon: <IconCloudUpload size={48} />,
        name: "Busy to Google (B2G)",
        description: "Effortlessly Synchronize and Manage Your BUSY with Google Sheets.",
    },
    {
        icon: <IconMessage size={48} />,
        name: "Message Rider",
        description: "Automated WhatsApp Notification tools integrated with BUSY software.",
    },
    {
        icon: <IconGauge size={48} />,
        name: "Sale Force Automation (SFA)",
        description: "Optimize your sales processes, improve sales performance, and provide better customer experiences by Automation.",
    },
    {
        icon: <IconShield size={48} />,
        name: "Backup Image 365",
        description: "Elevate your data security to new heights with our advanced cloud backup software.",
    },
    {
        icon: <IconFileAnalytics size={48} />,
        name: "Audit Trail Scrub",
        description: "Audit Trail enables logging of all the types of modification such as personalization, security and data management.",
    },
    {
        icon: <IconFileInvoice size={48} />,
        name: "Automatic Invoice Generation Tool (IG)",
        description: "A handy tool integrated with Tally software that helps to send Automated WhatsApp Notification.",
    },
    {
        icon: <IconDeviceMobile size={48} />,
        name: "Busy Mobile App",
        description: "A powerful Tool that connects with Busy Desktop Accounting Software on the Go.",
    },
    {
        icon: <IconBell size={48} />,
        name: "Lead Chain Alert",
        description: "An advanced alert system which manages reminders, updates, wishes, announcements, promotions, and schemes.",
    },
    {
        icon: <IconTransfer size={48} />,
        name: "Busy to Tally Add-Ons",
        description: "Transfer your BUSY Data to Tally Software.",
    },
    {
        icon: <IconApps size={48} />,
        name: "Peddle Mobile App",
        description: "Manage all Accounting with your Mobile. Syncs data automatically when internet is available.",
    },
    {
        icon: <IconCloud size={48} />,
        name: "Busy on Cloud",
        description: "A complete Solution to work from home or multiple locations on centralized Cloud Server.",
    },
    {
        icon: <IconSignature size={48} />,
        name: "Doc Signer",
        description: "Automate Signature on invoices and documents to avoid manual paperwork.",
    },
    {
        icon: <IconChartBar size={48} />,
        name: "Bow-Bi",
        description: "AI-powered tool to get faster Reports from BUSY.",
    },
];

const AddOns = ({ setCurrentPage }) => {
    const [openAddon, setOpenAddon] = useState(null);

    const toggleAddon = (index) => {
        setOpenAddon(openAddon === index ? null : index);
    };

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

    return (
        <div className="bg-gray-50 text-gray-800 font-inter">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold"
                    >
                        BUSY Add-On Solutions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto"
                    >
                        Enhance your Busy Accounting Software with powerful add-ons for e-commerce, automated messaging, data security, and more.
                    </motion.p>
                </div>
            </section>

            {/* Add-Ons List Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-3xl font-bold text-center mb-12 text-gray-900"
                    >
                        Explore All Add-Ons
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        {addonsData.map((addon, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-50 p-6 rounded-lg shadow-sm"
                            >
                                <div
                                    className="flex items-center cursor-pointer"
                                    onClick={() => toggleAddon(index)}
                                >
                                    <div className="text-indigo-500 mr-6 flex-shrink-0">
                                        {addon.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 flex-grow">
                                        {addon.name}
                                    </h3>
                                    <motion.div
                                        initial={false}
                                        animate={{ rotate: openAddon === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <IconChevronDown size={24} className="text-indigo-600" />
                                    </motion.div>
                                </div>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: openAddon === index ? 'auto' : 0, opacity: openAddon === index ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden text-gray-600"
                                >
                                    <p className="pt-4 text-sm">{addon.description}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AddOns;
