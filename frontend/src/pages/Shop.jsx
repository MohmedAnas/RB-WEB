import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, MessageSquareText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';
import gsap from 'gsap';
import 'react-loading-skeleton/dist/skeleton.css';

const Shop = () => {
    const [activeTab, setActiveTab] = useState('desktop');
    const [isMultiUser, setIsMultiUser] = useState(false);
    const [businessDescription, setBusinessDescription] = useState('');
    const [recommendation, setRecommendation] = useState(null);
    const [isLoadingRecommendation, setIsLoadingRecommendation] = useState(false);

    const planData = {
        desktop: {
            perpetual: {
                single: [
                    { name: "Busy Basic Edition", price: "₹ 9,999*", features: "Financial Accounting, Basic GST Reports & e-Returns, User Configurable Printing." },
                    { name: "Busy Standard Edition", price: "₹ 14,999*", features: "All Basic features plus POS Billing, Order/Quotation, Reconciliation of GSTR 2A & 2B, and advanced stock tracking." },
                    { name: "Busy Enterprise Edition", price: "₹ 19,999*", features: "All Standard features plus Indent Management, Voucher & Master Approval, Branch Management, and Audit Trail." },
                ],
                multi: [
                    { name: "Busy Basic Edition", price: "₹ 24,999*", features: "Financial Accounting, Basic GST Reports & e-Returns, User Configurable Printing." },
                    { name: "Busy Standard Edition", price: "₹ 39,999*", features: "All Basic features plus POS Billing, Order/Quotation, Reconciliation of GSTR 2A & 2B, and advanced stock tracking." },
                    { name: "Busy Enterprise Edition", price: "₹ 57,999*", features: "All Standard features plus Indent Management, Voucher & Master Approval, Branch Management, and Audit Trail." },
                ],
            },
            subscription: {
                single: [
                    { name: "Busy Blue Edition", price: "₹ 4,999*", features: "Financial Accounting, Basic GST Reports & e-Returns, User Configurable Printing." },
                    { name: "Busy Saffron Edition", price: "₹ 6,999*", features: "All Basic features plus POS Billing, Order/Quotation, Reconciliation of GSTR 2A & 2B, and advanced stock tracking." },
                    { name: "Busy Emerald Edition", price: "₹ 9,999*", features: "All Standard features plus Indent Management, Voucher & Master Approval, Branch Management, and Audit Trail." },
                ],
                multi: [
                    { name: "Busy Blue Edition", price: "₹ 12,499*", features: "Financial Accounting, Basic GST Reports & e-Returns, User Configurable Printing." },
                    { name: "Busy Saffron Edition", price: "₹ 17,999*", features: "All Basic features plus POS Billing, Order/Quotation, Reconciliation of GSTR 2A & 2B, and advanced stock tracking." },
                    { name: "Busy Emerald Edition", price: "₹ 24,999*", features: "All Standard features plus Indent Management, Voucher & Master Approval, Branch Management, and Audit Trail." },
                ],
            }
        },
        mobile: [
            { name: "Mobile Plan (1-4 Devices)", price: "₹ 2,499", cycle: "/year", features: "Mobile access for sales and reporting for small teams." },
            { name: "Mobile Plan (5+ Devices)", price: "₹ 1,999", cycle: "/year", features: "Advanced mobile features for large teams." },
        ],
        online: [
            { name: "Online for Access", price: "₹ 10,800", cycle: "/yearly", features: "Cloud access for remote data entry and basic reports." },
            { name: "Online for Access", price: "₹ 4,500", cycle: "/quarterly", features: "Cloud access for remote data entry and basic reports." },
            { name: "Online for SQL", price: "₹ 16,800", cycle: "/yearly", features: "Cloud access with advanced SQL database features." },
            { name: "Online for SQL", price: "₹ 5,250", cycle: "/quarterly", features: "Cloud access with advanced SQL database features." },
        ],
        recom: [
            { name: "Recom Starter", price: "₹ 36,000", cycle: "/year", features: "Order management for up to 12,000 orders per year." },
            { name: "Recom Standard", price: "₹ 60,000", cycle: "/year", features: "Order management for up to 30,000 orders per year." },
            { name: "Recom Professional", price: "₹ 96,000", cycle: "/year", features: "Order management for up to 60,000 orders per year." },
            { name: "Recom Enterprise", price: "₹ 1,44,000", cycle: "/year", features: "Order management for up to 120,000 orders per year." },
        ]
    };

    const featuresComparison = [
        { name: "Financial Accounting", blue: true, saffron: true, emerald: true },
        { name: "Fully Configurable GST Invoicing", blue: true, saffron: true, emerald: true },
        { name: "GST Summary & e-Returns (Govt. Template)", blue: true, saffron: true, emerald: true },
        { name: "Auto Data Backup on Google Drive", blue: true, saffron: true, emerald: true },
        { name: "TDS/TCS Configuration", blue: true, saffron: true, emerald: true },
        { name: "BUSY BNS App", blue: true, saffron: true, emerald: true },
        { name: "POS Billing", blue: false, saffron: true, emerald: true },
        { name: "Quotation / Order / Challan", blue: false, saffron: true, emerald: true },
        { name: "Reconciliation of GSTR 2A & 2B", blue: false, saffron: true, emerald: true },
        { name: "Automatic E-Way Bill / E-Invoice Generation", blue: false, saffron: true, emerald: true },
        { name: "Voucher & Master Approval", blue: false, saffron: false, emerald: true },
        { name: "Audit Trail (MCA compliant)", blue: false, saffron: false, emerald: true },
        { name: "Indent Management", blue: false, saffron: false, emerald: true },
        { name: "Branch Management", blue: false, saffron: false, emerald: true },
    ];
    
    const desktopPerpetualPlans = isMultiUser ? planData.desktop.perpetual.multi : planData.desktop.perpetual.single;
    const desktopSubscriptionPlans = isMultiUser ? planData.desktop.subscription.multi : planData.desktop.subscription.single;
    const userType = isMultiUser ? "Multi-user" : "Single User";

    const waMessageTemplate = (planName, cycle, userType) => {
        const userCount = userType ? (userType === 'single' ? 'Single User' : 'Multi-user') : '';
        const planDetails = `${planName} (${userCount} ${cycle ? ` ${cycle}` : ''})`.trim();
        return `Hi, I'm interested in the ${planDetails} plan. Please guide me further.`;
    };

    const getRecommendation = async () => {
        if (!businessDescription.trim()) {
            alert('Please describe your business to get a recommendation.');
            return;
        }
        setIsLoadingRecommendation(true);
        setRecommendation(null);
        try {
            const prompt = `Given the following business description and the available Busy Software editions (Basic, Standard, Enterprise), recommend the most suitable edition and explain why. The business types are small business/shopkeepers (Basic), medium businesses (Standard), and large companies (Enterprise).

Business Description: "${businessDescription}"
Also, respond only with the text of the recommendation, do not include any other conversational filler text.`;
            const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
            const payload = { contents: chatHistory };
            const apiKey = "";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

            let response;
            let delay = 1000;
            for (let i = 0; i < 3; i++) {
                try {
                    response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    if (response.status !== 429) break;
                    await new Promise(res => setTimeout(res, delay));
                    delay *= 2;
                } catch (e) {
                    console.error("Fetch failed, retrying...", e);
                    await new Promise(res => setTimeout(res, delay));
                    delay *= 2;
                }
            }
            if (!response || !response.ok) throw new Error("API call failed");

            const result = await response.json();
            const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) {
                setRecommendation(text.trim());
            } else {
                throw new Error("Invalid response from API.");
            }
        } catch (error) {
            console.error('Plan advisor API error:', error);
            alert('Failed to get a recommendation. Please try again later.');
        } finally {
            setIsLoadingRecommendation(false);
        }
    };
    
    const renderPlans = (plans, licenseType, userType) => (
        <AnimatePresence mode="wait">
            <motion.div
                key={`${activeTab}-${userType}-${licenseType}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
            >
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                        className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center cursor-pointer"
                    >
                        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                        <p className="text-4xl font-extrabold text-orange-500 mt-4">{plan.price}</p>
                        {plan.cycle && <p className="text-sm text-gray-500 mt-2">{plan.cycle}</p>}
                        <p className="text-md text-gray-700 mt-6 min-h-[60px]">{plan.features}</p>
                        <a
                            href={`https://wa.me/919876543210?text=${encodeURIComponent(waMessageTemplate(plan.name, plan.cycle, userType))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-block w-full bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-colors transform hover:scale-105 text-center"
                        >
                            Buy Now
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </AnimatePresence>
    );


    return (
        <div className="container mx-auto px-4 py-12 space-y-12">
            {/* Hero Section */}
            <section className="text-center bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Choose Your Busy Accounting Software Plan</h1>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Find the perfect edition of Busy Software for your business, from small shops to large enterprises. Explore our features and flexible licensing options below.
                </p>
            </section>

            {/* Pricing Tabs */}
            <section className="text-center">
                <Tabs.Root className="flex flex-col" value={activeTab} onValueChange={setActiveTab}>
                    <Tabs.List className="flex justify-center border-b border-gray-200">
                        {['desktop', 'mobile', 'online', 'recom'].map((tab) => (
                            <Tabs.Trigger
                                key={tab}
                                value={tab}
                                className={`py-4 px-6 -mb-px font-semibold text-lg transition-colors duration-300
                                    ${activeTab === tab ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-900'}
                                `}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </Tabs.Trigger>
                        ))}
                    </Tabs.List>
                    
                    <div className="mt-8">
                        <Tabs.Content value="desktop">
                            {/* User Count Toggle Switch */}
                            <div className="flex justify-center items-center space-x-4 mb-8">
                                <span className={`font-semibold ${!isMultiUser ? 'text-gray-900' : 'text-gray-500'}`}>Single User</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" checked={isMultiUser} onChange={() => setIsMultiUser(!isMultiUser)} />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                                </label>
                                <span className={`font-semibold ${isMultiUser ? 'text-gray-900' : 'text-gray-500'}`}>Multi-user</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 col-span-full">Perpetual License</h3>
                                {renderPlans(desktopPerpetualPlans, 'Perpetual', isMultiUser ? 'multi' : 'single')}
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-gray-800 col-span-full">Subscription License</h3>
                                {renderPlans(desktopSubscriptionPlans, 'Subscription', isMultiUser ? 'multi' : 'single')}
                             </div>
                        </Tabs.Content>
                        <Tabs.Content value="mobile">
                             <h3 className="text-2xl font-bold text-gray-800 col-span-full mb-4">Mobile Plans</h3>
                                {renderPlans(planData.mobile)}
                        </Tabs.Content>
                        <Tabs.Content value="online">
                             <h3 className="text-2xl font-bold text-gray-800 col-span-full mb-4">Online Plans</h3>
                                {renderPlans(planData.online)}
                        </Tabs.Content>
                        <Tabs.Content value="recom">
                             <h3 className="text-2xl font-bold text-gray-800 col-span-full mb-4">Recom Plans</h3>
                                {renderPlans(planData.recom)}
                        </Tabs.Content>
                    </div>
                </Tabs.Root>
            </section>
        </div>
    );
};

export default Shop;
