import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Typed from 'typed.js';
import SupportedIndustries from '../components/SupportedIndustries.jsx';

// Corrected import paths for UI components and icons
import { Check } from "lucide-react";
import { IconShoppingCart, IconCurrencyRupee, IconCloudUpload, IconMessage, IconGauge, IconCalendarEvent, IconClock, IconLink } from '@tabler/icons-react';

// Imports from lucide-react that are still used on this page
import { MessageSquareText, ArrowRight, Book, Package, Receipt, ClipboardList, Scan, Globe, FileBarChart, LifeBuoy, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const allowedTokens = [
  "Super-token-739",
  "Normal-token-139",
  "Middle-token-239",
  "Low-token-339"
];



const servicesData = [
  { icon: <Book size={48} />, title: "Financial Accounting", description: "Manage ledgers, budgets, multi-currency transactions, and create audit-ready financial statements.", page: '/financialaccounting' },
  { icon: <Package size={48} />, title: "Inventory Management", description: "Efficiently handle stock levels, reorder points, multiple locations, and track items with serial numbers or batches.", page: '/inventorymanagement' },
  { icon: <Receipt size={48} />, title: "GST Billing & Return", description: "Generate GST-compliant invoices and automate the filing of GST returns directly from the software.", page: '/gstbasics' },
  { icon: <ClipboardList size={48} />, title: "Payroll Management", description: "Simplify payroll processing, employee record management, salary slip generation, and statutory compliance.", page: '/payroll' },
  { icon: <Scan size={48} />, title: "Barcode & POS Integration", description: "Integrate billing with barcode scanners and point-of-sale systems for faster and more accurate transactions.", page: '/barcode' },
  { icon: <Globe size={48} />, title: "Remote Access", description: "Access your business data securely from anywhere, anytime, using our web and mobile-friendly solutions.", page: '/remoteaccess' },
  { icon: <FileBarChart size={48} />, title: "Data Migration", description: "Seamlessly migrate your existing data from platforms like Tally, Excel, and other accounting software.", page: '/datamigration' },
  { icon: <LifeBuoy size={48} />, title: "AMC & Support Services", description: "Benefit from our Annual Maintenance Contracts (AMC) and fast, reliable on-site and remote support.", page: '/amc' },
  { icon: <GraduationCap size={48} />, title: "On-site Training", description: "We provide comprehensive training for your staff to ensure a smooth transition and full utilization of all Busy modules.", page: '/training' },
];

const addonsData = [
    {
        icon: <IconShoppingCart size={48} />,
        name: "Kart Manager",
        description: "Helps import data from E-Commerce Portals like eBay, Amazon, FlipKart",
    },
    {
        icon: <IconCurrencyRupee size={48} />,
        name: "Collection Engine",
        description: "Automate your Payment Reminder, Dues, Outstanding & Manage your customer groups on the basis of purchase & Interest",
    },
    {
        icon: <IconCloudUpload size={48} />,
        name: "Busy to Google (B2G)",
        description: "Effortlessly Synchronize and Manage Your BUSY with Google Sheets",
    },
    {
        icon: <IconMessage size={48} />,
        name: "Message Rider",
        description: "Automated WhatsApp Notification tools integrated with BUSY software",
    },
    {
        icon: <IconGauge size={48} />,
        name: "Sale Force Automation (SFA)",
        description: "Optimize your sales processes, improve sales performance, and provide better customer experiences by Automation",
    },
];

const plans = [
    {
        name: "Busy Standard Edition",
        price: "₹14,999",
        tag: "Most Popular",
        features: [
            "All Features of Basic Edition",
            "Quotation / Order / Challan",
            "POS",
            "Scheme Management",
            "Bill of Material & Production",
            "Date wise Pricing",
            "Voucher Auditing",
            "Automatic E-Way Bill & E-Invoice Generation",
            "Serial No.-wise Stock Tracking",
            "MRP-wise Stock Tracking",
            "Batch-wise Stock Tracking",
            "Parameter-wise Stock Tracking",
            "Binding Data / User with Hard Disk",
            "Configurable Balance Sheet / P&L A/c.",
            "Job Work",
            "GSTR1 & IFF direct upload to portal",
            "GST eReturns in JSON Format",
            "Reconciliation of GSTR 2A & GSTR 2B",
        ],
    },
    {
        name: "Busy Enterprise Edition",
        price: "₹19,999",
        tag: "Most Selling",
        features: [
            "All Features of Standard Edition",
            "Indent Management",
            "Voucher / Master Approval",
            "Branch wise Rate of Tax & Prices for Items",
            "Message Centre",
            "Enquiry / Support Management",
            "Master Series Groups",
            "Branch Management",
            "Audit Trail (as per MCA guidelines)",
        ],
    },
    {
        name: "Busy Saffron Edition",
        price: "₹6,999",
        tag: "Most Reliable / Subscription License",
        features: [
            "All Features of Basic Edition",
            "Quotation / Order / Challan",
            "POS",
            "Scheme Management",
            "Bill of Material & Production",
            "Date wise Pricing",
            "Voucher Auditing",
            "Automatic E-Way Bill & E-Invoice Generation",
            "Serial No.-wise Stock Tracking",
            "MRP-wise Stock Tracking",
            "Batch-wise Stock Tracking",
            "Parameter-wise Stock Tracking",
            "Binding Data / User with Hard Disk",
            "Configurable Balance Sheet / P&L A/c.",
            "Job Work",
            "GSTR1 & IFF direct upload to portal",
            "GST eReturns in JSON Format",
            "Reconciliation of GSTR 2A & GSTR 2B",
        ],
    },
];

const handleAdminTokenSubmit = (e) => {
    e.preventDefault();
    if (!adminToken) {
      setAdminError("Please enter your secret token.");
      return;
    }
    if (!allowedTokens.includes(adminToken)) {
      setAdminError("Invalid token, please try again.");
      return;
    }
    localStorage.setItem("employee_token", adminToken);
    setShowAdminModal(false);
    setAdminError("");
    setAdminToken("");
    navigate("/querypanel");
  };

const allWebinars = [
    {
        title: "Trade Specific – Built for Builders: BUSY Software for Bricks & Aggregates Retailers",
        description: "Designed for bricks & cement trade – BUSY simplifies billing and credit tracking.",
        link: "https://zoom.us/webinar/register/WN_RvDHm8l0Tg2MPUwpCticnw#/registration",
        dateTime: "2025-08-22T17:00:00Z"
    },
    {
        title: "Outstanding Report + Auto Interest in BUSY – Simple & Powerful",
        description: "Track party-wise outstanding and auto-calculate interest easily in BUSY – all in a few clicks.",
        link: "https://zoom.us/webinar/register/WN_drczWOmtRamR-5NTuU9bbw#/registration",
        dateTime: "2025-08-29T17:00:00Z"
    },
    {
        title: "BUSY Makes GSTR-1 Filing Effortless – From Upload to Final Submit!",
        description: "GSTR-1 filing in BUSY is now faster and simpler – end-to-end in just a few clicks!",
        link: "http://zoom.us/webinar/register/WN_1lTxWWg6SESM6gV-ONWM2w#/registration",
        dateTime: "2025-09-05T17:00:00Z"
    },
    {
        title: "Run Your Business On-the-Go with BUSY Mobile App!",
        description: "BUSY Mobile App puts your business at your fingertips – transactions, reports, reminders & more.",
        link: "https://zoom.us/webinar/register/WN_yTRfR52dQ-Wo-P3COH62QQ#/registration",
        dateTime: "2025-09-12T17:00:00Z"
    },
    {
        title: "Advanced Invoice Customization in BUSY – Tips, Tricks & Templates",
        description: "Customize invoices your way in BUSY – with logo, layout, and templates that suit your business needs.",
        link: "https://zoom.us/webinar/register/WN_S1q3wYj7TxmOd9IE2XOlFw#/registration",
        dateTime: "2025-09-19T17:00:00Z"
    },
    {
        title: "Trade Specific – BUSY – The Perfect Fit for Wood & Plywood Retail Business",
        description: "BUSY – A perfect accounting fit for Wood & Plywood businesses with unit-wise stock tracking, custom pricing & trade-ready billing.",
        link: "https://zoom.us/webinar/register/WN_3uhmlprkTmGqJbw7NJ7vOA#/registration",
        dateTime: "2025-09-26T17:00:00Z"
    }
];

const AboutUs = () => {
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminToken, setAdminToken] = useState("");
  const [adminError, setAdminError] = useState("");
  const navigate = useNavigate();
  
    const typedEl = useRef(null);
    const heroSectionRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedEl.current, {
            strings: ['Helping Businesses Succeed with Busy Software Since 2004'],
            typeSpeed: 50,
            showCursor: false,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        // GSAP animation for the hero section headline and subheadline
        gsap.fromTo('.hero-title',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
        gsap.fromTo('.hero-subtitle',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
        );
        // GSAP animation for the CTA buttons
        gsap.fromTo('.whatsapp-cta',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.6 }
        );
        gsap.fromTo('.trial-cta',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.8 }
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

    const handleMouseMove = (e) => {
        const card = heroSectionRef.current;
        if (!card) return;

        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        gsap.to(card, {
            rotationY: x * 5,
            rotationX: -y * 5,
            ease: 'power1.out',
            duration: 0.5,
        });
    };

    const handleMouseLeave = () => {
        const card = heroSectionRef.current;
        if (!card) return;

        gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            ease: 'power1.inOut',
            duration: 0.5,
        });
    };

    const nextWebinar = allWebinars.find(webinar => {
        const webinarTime = new Date(webinar.dateTime);
        const currentTime = new Date();
        const sixHoursInMs = 6 * 60 * 60 * 1000;
        return webinarTime.getTime() > currentTime.getTime() - sixHoursInMs;
    });

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    };

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
    {/* === QUERY PANEL ADMIN BUTTON, floated top-right, beside hamburger === */}
      <button
  onClick={() => setShowAdminModal(true)}
  title="Admin Query Panel"
  className="
    fixed top-5 right-24 z-50
    px-7 py-3 rounded-full
    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
    text-white font-medium tracking-wide
    shadow-lg shadow-indigo-300/30
    transition-transform duration-300 ease-out
    hover:scale-105 hover:shadow-xl hover:shadow-indigo-400/40
    active:scale-95
    focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-offset-2
  "
  style={{ minWidth: '140px' }}
>
  Query Panel
</button>


      {/* === QUERY PANEL ADMIN MODAL === */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-xs text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={() => {
                setShowAdminModal(false);
                setAdminToken("");
                setAdminError("");
              }}
              aria-label="Close"
            >✕</button>
            <h3 className="text-xl font-bold mb-4 text-indigo-700">Enquiry Management Access</h3>
            <form onSubmit={handleAdminTokenSubmit}>
              <input
                type="password"
                placeholder="Enter Secret Token"
                className="w-full border p-2 rounded mb-2"
                value={adminToken}
                onChange={e => {
                  setAdminToken(e.target.value);
                  setAdminError("");
                }}
              />
              {adminError && <div className="text-red-600 text-xs mb-2">{adminError}</div>}
              <button className="w-full bg-indigo-600 text-white py-2 rounded mt-2 hover:bg-indigo-700 transition">
                Access Panel
              </button>
            </form>
          </div>
        </div>
      )}
        {/* Company Header Section with Logo and Details */}
        <motion.section
            ref={heroSectionRef}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 animated-section relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: '1000px',
                backgroundImage: 'linear-gradient(to right, #f8f9fa, #e9ecef, #dee2e6)',
            }}
        >
            <div className="absolute inset-0 z-0 opacity-10 animated-wave"></div>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 relative z-10">
                <motion.img
                    src="/757b914c-d979-4c90-b7d1-29712cad8aea (1).png"
                    alt="R.B. Computers & Software Solution Logo"
                    className="max-w-xs md:max-w-sm w-full h-auto rounded-lg shadow-md"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
                <div className="text-center md:text-left space-y-2">
                    <motion.h1
                        className="text-2xl md:text-3xl font-extrabold text-gray-900"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        R.B. <span className="text-orange-500">COMPUTER & SOFTWARE SOLUTION</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-700"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Owner: Taqi Ranawadia
                    </motion.p>
                    <motion.p
                        className="text-lg text-gray-700"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Support: Museb Shaikh, Saad Desai, Rahil Ghanchi
                    </motion.p>
                    <motion.p
                        className="text-lg text-gray-700"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Trainee: Sohel Pothigara, Anas Ranawadiya
                    </motion.p>
                    <Link to="/contactus"
                        className="mt-4 inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
                    >
                        Contact Us
                    </Link>
                    <Link 
                     to="/enquiry"
                     className="mt-4 ml-4 inline-block bg-orange-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors transform hover:scale-105"
                      >
                     Enquiry Form
                     </Link>

                </div>
            </div>
        </motion.section>

        {/* 1. Hero Section with Animated Gradient */}
        <motion.section 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 p-8 md:p-16 rounded-3xl shadow-xl text-white animated-gradient"
        >
            <p className="text-sm font-semibold text-orange-100 uppercase tracking-widest mb-2">20+ Years of Experience</p>
            <h1 ref={typedEl} className="text-4xl md:text-6xl font-extrabold leading-tight text-shadow hero-title">
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-medium opacity-90 hero-subtitle">
                Your Trusted Partner in Accounting, Billing, Inventory, and Automation
            </p>
            <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center">
                <a
                    href="https://api.whatsapp.com/send?phone=91xxxxxxxxxx&text=Hi%20RB%20Computers,%20I%20am%20interested%20in%20your%20Busy%20Software%20solutions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-green-600 transition-colors transform hover:scale-105 whatsapp-cta"
                >
                    <div className="flex items-center space-x-2">
                        <MessageSquareText size={24} />
                        <span>Contact via WhatsApp</span>
                    </div>
                </a>
                <Link to="/freetrial"
                    className="inline-block bg-white text-orange-500 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105 trial-cta"
                >
                    <div className="flex items-center space-x-2">
                        <span>Download Free Trial</span>
                        <ArrowRight size={24} />
                    </div>
                </Link>
            </div>
        </motion.section>

        {/* 2. Company Mission & Values */}
        <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 animated-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 pb-2 inline-block border-orange-500 text-center">Our Mission & Values</h2>
            <div className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                <p className="mb-4">
                    At R.B. Computers & Software Solution, our mission is to empower small and medium-sized businesses across India by simplifying their back-office operations. We believe that with the right tools and support, businesses can focus on growth rather than getting bogged down by complex accounting and compliance tasks.
                </p>
                <p className="mb-4">
                    As an authorized and trusted partner of Busy Accounting Software, we don't just sell software; we provide tailored solutions. We are committed to understanding your unique business needs and delivering a customized setup that maximizes efficiency and compliance.
                </p>
                <p>
                    Our core values are reliability, integrity, and client success. Our team of experienced professionals provides dedicated on-site and remote support, ensuring you are never alone on your journey to digital transformation.
                </p>
            </div>
        </section>

        {/* 3. Pricing Highlights Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-gray-900">Pricing Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className="shadow-lg rounded-2xl border border-gray-200">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-2xl p-6">
                    <h3 className="text-xl font-semibold">
                      {plan.name}
                    </h3>
                    <p className="text-lg font-bold mt-1">{plan.price}</p>
                    <span className="text-sm bg-white text-indigo-600 px-3 py-1 rounded-full mt-2 inline-block">
                      {plan.tag}
                    </span>
                  </div>
                  <div className="text-left mt-4 p-6">
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <Check className="h-5 w-5 text-green-600 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/shop"
                className="inline-block bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-md font-medium"
              >
                View Plans
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Our Services – Feature Grid */}
        <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 animated-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center border-b-2 pb-2 inline-block border-orange-500">Our Services & Solutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                        className="flex items-center space-x-4 bg-gray-50 p-6 rounded-xl shadow-md cursor-pointer"
                    >
                        <Link to={service.page} className="flex items-center space-x-4 w-full">
                            <div className="p-3 bg-orange-100 text-orange-500 rounded-full flex-shrink-0 shadow-md">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 5. Supported Industries */}
        <SupportedIndustries />
        
        {/* 6. Upcoming Webinars Section */}
        {nextWebinar && (
            <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 animated-section">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center border-b-2 pb-2 inline-block border-orange-500">Upcoming Webinars – This Month</h2>
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                    {/* Placeholder Icon/Image */}
                    <div className="flex-shrink-0">
                        <IconCalendarEvent size={64} className="text-indigo-500" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">{nextWebinar.title}</h3>
                        <p className="text-gray-600 mt-2">{nextWebinar.description}</p>
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 text-sm text-gray-700">
                        <span className="flex items-center space-x-1">
                                <IconCalendarEvent size={16} className="text-orange-500" />
                                <span>{formatDate(nextWebinar.dateTime)}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                                <IconClock size={16} className="text-orange-500" />
                                <span>{new Date(nextWebinar.dateTime).toLocaleTimeString('en-IN', { timeZoneName: 'short' })}</span>
                            </span>
                        </div>
                        <a
                            href={nextWebinar.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors mt-4"
                        >
                            <IconLink size={20} className="mr-2" />
                            Register
                        </a>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <Link to="/webinars"
                        className="inline-flex items-center text-indigo-600 font-semibold"
                    >
                        View All Webinars →
                    </Link>
                </div>
            </section>
        )}

        {/* 7. Add-Ons Section */}
        <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 animated-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center border-b-2 pb-2 inline-block border-orange-500">BUSY Add-On Solutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {addonsData.map((addon, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                        className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl shadow-md"
                    >
                        <Link to="/addons" className="flex items-start space-x-4 w-full">
                            <div className="text-indigo-500 flex-shrink-0">
                                {addon.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{addon.name}</h3>
                                <p className="text-sm text-gray-600 mt-1">{addon.description}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
            <div className="text-center mt-8">
                <Link to="/addons"
                    className="inline-flex items-center bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors"
                >
                    View All 15 Add-Ons
                </Link>
            </div>
        </section>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
  <a
    href="https://api.whatsapp.com/send?phone=91xxxxxxxxxx&text=Hi%20RB%20Computers,%20I%20am%20interested%20in%20your%20Busy%20Software%20solutions."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-500 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-green-600 transition-colors transform hover:scale-105"
  >
    <div className="flex items-center space-x-2">
      <MessageSquareText size={24} />
      <span>Chat with Us on WhatsApp</span>
    </div>
  </a>

  <Link
    to="/enquiry"
    className="inline-block bg-orange-500 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-orange-600 transition-colors transform hover:scale-105"
  >
    Enquiry Form
  </Link>
</div>


        {/* 8. Final WhatsApp CTA */}
        <section className="text-center bg-gray-100 p-8 md:p-12 rounded-2xl shadow-xl animated-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Grow Your Business?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Connect with us today to find the perfect Busy Software solution for your needs.
            </p>
            <a
                href="https://api.whatsapp.com/send?phone=91xxxxxxxxxx&text=Hi%20RB%20Computers,%20I%20am%20interested%20in%20your%20Busy%20Software%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white font-bold px-8 py-4 rounded-full mt-6 text-lg hover:bg-green-600 transition-colors transform hover:scale-105"
            >
                <div className="flex items-center space-x-2">
                    <MessageSquareText size={24} />
                    <span>Chat with Us on WhatsApp</span>
                </div>
            </a>
        </section>
    </div>
  );
};

export default AboutUs;
