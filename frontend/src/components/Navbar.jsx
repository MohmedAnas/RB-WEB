import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
    IconMenu2,
    IconX,
    IconApps,
    IconInfoCircle,
    IconShoppingBag,
    IconVideo,
    IconCreditCard,
    IconMessageCircle,
    IconChevronDown,
    IconCheck,
    IconCalendarEvent,
    IconPhoneCall,
} from '@tabler/icons-react';


const menuItems = [
    { name: "About Us & Products", page: "/", icon: <IconInfoCircle size={28} /> },
    { name: "Shop", page: "/shop", icon: <IconShoppingBag size={28} /> },
    { name: "Busy Tutorial Video", page: "/gallery", icon: <IconVideo size={28} /> },
    { name: "Webinars", page: "/webinars", icon: <IconCalendarEvent size={28} /> },
    { name: "Add-Ons", page: "/addons", icon: <IconApps size={28} /> },
    { name: "Payment", page: "/payment", icon: <IconCreditCard size={28} /> },
    { name: "Feedback", page: "/feedback", icon: <IconMessageCircle size={28} /> },
    { name: "Contact Us", page: "/contactus", icon: <IconPhoneCall size={28} /> },
];

const gstMenuItems = {
    col1: [
        { name: "GST Basics", page: "/gstbasics" },
        { name: "GST Schemes", page: "/gst-schemes" },
        { name: "E-Way Bill", page: "/ewaybill" },
        { name: "Transitioning To GST", page: "/transitioning-gst" },
        { name: "SAC Codes", page: "/sac-codes" },
    ],
    col2: [
        { name: "GST Returns", page: "/gstreturns" },
        { name: "E-Invoice", page: "/e-invoice" },
        { name: "Input Tax Credit", page: "/input-tax-credit" },
        { name: "GST Penalties and Appeals", page: "/gst-penalties" },
        { name: "GST Rates", page: "/gst-rates" },
    ],
    col3: [
        { name: "GST Invoicing", page: "/gstinvoicing" },
        { name: "GST Payments and Appeals", page: "/gst-payments" },
        { name: "Time, Place And Value Of Supply", page: "/value-of-supply" },
        { name: "HSN Codes", page: "/hsn-codes" },
        { name: "TDS", page: "/tds" },
    ],
};

const menuVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
};

const backdropVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
};

const gstDropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
            staggerChildren: 0.05,
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.2,
            ease: "easeIn"
        }
    }
};

const Navbar = ({ isModalOpen }) => { // Accept isModalOpen prop
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isGstOpen, setIsGstOpen] = useState(false);
    const location = useLocation();

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close menu on navigation
        setIsGstOpen(false); // Close GST menu as well
    };
    
    const toggleGstMenu = () => {
        setIsGstOpen(!isGstOpen);
    };

    return (
        <AnimatePresence>
            {!isModalOpen && (
                <motion.nav
                    className="fixed top-0 left-0 w-full z-[100] bg-white bg-opacity-90 backdrop-blur-md shadow-md border-b border-gray-200"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="container mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
                        {/* Left side - Company Name & GST Dropdown */}
                        <div className="flex items-center space-x-6">
                            <Link to="/" className="text-2xl font-extrabold text-gray-900 cursor-pointer">
                                R.B. <span className="text-orange-500">Computers</span>
                            </Link>
                            <div
                                className="relative hidden lg:block" // Hide on mobile, show on desktop
                                onMouseEnter={() => setIsGstOpen(true)}
                                onMouseLeave={() => setIsGstOpen(false)}
                            >
                                <button
                                    className={`flex items-center space-x-2 font-semibold text-lg hover:text-indigo-600 transition-colors duration-300
                                    ${isGstOpen ? 'text-indigo-600' : 'text-gray-700'}`}
                                >
                                    <span>GST</span>
                                    <motion.div
                                        animate={{ rotate: isGstOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <IconChevronDown size={20} />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {isGstOpen && (
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={gstDropdownVariants}
                                            className="absolute top-full left-0 mt-3 bg-white p-6 rounded-2xl shadow-lg border border-gray-200 z-50 w-[800px] origin-top"
                                        >
                                            <div className="grid grid-cols-3 gap-8">
                                                {Object.keys(gstMenuItems).map((colKey) => (
                                                    <div key={colKey}>
                                                        <ul className="space-y-2">
                                                            {gstMenuItems[colKey].map((item, index) => (
                                                                <motion.li
                                                                    key={item.page}
                                                                    initial={{ opacity: 0, y: -10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ duration: 0.2, delay: index * 0.05 }}
                                                                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                                                                    onClick={handleLinkClick}
                                                                >
                                                                    <Link to={item.page} className="flex items-center">
                                                                        <IconCheck className="h-4 w-4 text-green-500 mr-2" />
                                                                        {item.name}
                                                                    </Link>
                                                                </motion.li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Right side - Hamburger Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-gray-700 hover:text-orange-500 transition-colors duration-300 z-[101]"
                            aria-label="Toggle navigation menu"
                        >
                            {isMenuOpen ? (
                                <IconX size={28} className="text-orange-500" />
                            ) : (
                                <IconMenu2 size={28} />
                            )}
                        </button>
                    </div>

                    {/* Sliding Mobile Menu */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <>
                                {/* Backdrop to close the menu and improve visibility */}
                                <motion.div
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={backdropVariants}
                                    onClick={handleLinkClick}
                                    className="fixed inset-0 bg-black bg-opacity-30 z-[95]"
                                    style={{ top: "64px" }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Sliding Side Panel Menu */}
                                <motion.div
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={menuVariants}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="fixed right-0 w-80 max-w-[80%] h-full bg-white bg-opacity-100 shadow-xl z-[99] p-6 space-y-4 overflow-y-auto"
                                    style={{ top: "64px", height: "calc(100vh - 64px)" }}
                                >
                                    {/* GST Dropdown for Mobile */}
                                    <div className="lg:hidden">
                                        <button
                                            onClick={toggleGstMenu}
                                            className={`flex items-center w-full text-left p-4 rounded-lg font-semibold text-xl transition-colors duration-300
                                            ${isGstOpen ? 'bg-gray-100 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}
                                        >
                                            <span>GST</span>
                                            <motion.div
                                                animate={{ rotate: isGstOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="ml-auto"
                                            >
                                                <IconChevronDown size={28} />
                                            </motion.div>
                                        </button>
                                        <AnimatePresence>
                                            {isGstOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden p-4 space-y-2 bg-gray-50 rounded-lg shadow-inner mt-2"
                                                >
                                                    {Object.values(gstMenuItems).flat().map((item, index) => (
                                                        <motion.li
                                                            key={item.page}
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                                                            className="flex items-center w-full text-left p-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
                                                        >
                                                            <Link to={item.page} className="flex items-center w-full" onClick={handleLinkClick}>
                                                                <IconCheck className="h-5 w-5 text-green-500 mr-2" />
                                                                {item.name}
                                                            </Link>
                                                        </motion.li>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <hr className="my-4" />
                                    {menuItems.map((item, index) => (
                                        <motion.li
                                            key={item.page}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                                            className="flex items-center w-full text-left p-4 rounded-lg font-semibold text-xl transition-colors duration-300"
                                        >
                                            <Link to={item.page} className="flex items-center w-full" onClick={handleLinkClick}>
                                                {item.icon ? <span className="mr-3">{item.icon}</span> : null}
                                                {item.name}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default Navbar;
