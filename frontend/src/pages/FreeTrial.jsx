import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
const API_URL = import.meta.env.VITE_API_URL;

const FreeTrial = () => {
    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        city: '',
        query: '',
    });

    const installSteps = [
        "Download the software setup from the official Busy website or from an emailed download link.",
        "Extract the downloaded file (if necessary).",
        "Run Setup.exe to launch the installer.",
        "Click Next, accept the license agreement, and proceed through the installation.",
        "Wait for installation to complete, then click Finish."
    ];

    const keyFeatures = [
        "Multiple GSTIN (branch-wise) reports.",
        "Pre-defined GST masters for quick setup.",
        "Branch-wise bill-by-bill management.",
        "Bulk payment and receipt processing.",
        "Scheme management (e.g., FMCG / Retail).",
        "Item serial number and warranty tracking.",
        "Customizable invoice formats.",
        "Barcode designing and printing.",
        "Voucher and master approval workflows.",
        "Export screen reports to Google Sheets."
    ];

    const faqs = [
        {
            q: "How many types of Busy software are available for the free trial?",
            a: "Only one—the Busy Express Edition, designed for small businesses."
        },
        {
            q: "Can I use Busy software for free?",
            a: "Yes—during the 15-day trial period you can use all features without cost."
        },
        {
            q: "How do I activate the license after installation?",
            a: "Open Busy → go to License Management → enter your license key/activation code → follow prompts to register."
        },
        {
            q: "What happens when the 15-day trial expires?",
            a: "You'll lose access and must purchase a license to continue."
        },
        {
            q: "Is the free trial really free?",
            a: "Yes; it's fully functional and trial-based with no cost during the 15 days."
        },
        {
            q: "How do I run Busy in demo mode?",
            a: "Choose demo during setup or via the settings after installation."
        },
        {
            q: "How to use the free 15-day trial version?",
            a: "Download, install, and explore features. Purchase a license if satisfied."
        },
        {
            q: "Which OS/devices are supported?",
            a: "Compatible with Windows; ensure your system meets requirements before installation."
        },
        {
            q: "How to download the latest version?",
            a: "Visit the Busy website → go to “Download” under “Resources” → follow instructions for the latest release."
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const submissionPromise = new Promise(async (resolve, reject) => {
            try {
                // The frontend now makes a single fetch call to your own backend
                const response = await fetch(`${API_URL}/api/free-trial`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    const result = await response.json();
                    resolve(result.message);
                    setFormData({ phone: '', email: '', city: '', query: '' });
                } else {
                    const errorData = await response.json();
                    reject(errorData.message);
                }
            } catch (error) {
                console.error('Form submission error:', error);
                reject('An unexpected network error occurred. Please ensure your backend server is running and try again later.');
            }
        });

        toast.promise(submissionPromise, {
            loading: 'Submitting request...',
            success: (message) => message,
            error: (err) => err,
        });
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 py-12 space-y-12"
            >
                {/* Download Form Section */}
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 w-full max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                        <Mail size={32} className="inline-block mr-2 text-orange-500" />
                        15-Day Free Trial
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        Experience the power of Busy Accounting Software with a free trial. Fill out the form to get started.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="query" className="block text-sm font-medium text-gray-700">Your Query</label>
                            <textarea
                                id="query"
                                name="query"
                                rows="4"
                                value={formData.query}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center space-x-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                        >
                            <span>Submit</span>
                            <ArrowRight size={20} />
                        </button>
                    </form>
                </div>

                {/* Installation Steps Section */}
                <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 pb-2 inline-block border-orange-500">Steps to Install Busy (Trial Version)</h2>
                    <ol className="list-decimal list-inside space-y-4">
                        {installSteps.map((step, index) => (
                            <li key={index} className="text-lg text-gray-700 font-medium">{step}</li>
                        ))}
                    </ol>
                </section>
                
                {/* Key Features Section */}
                <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 pb-2 inline-block border-orange-500">Key Features Covered in the Demo Software</h2>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                        {keyFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </section>

                {/* FAQ Section */}
                <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 pb-2 inline-block border-orange-500">Frequently Asked Questions (FAQ)</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index}>
                                <h3 className="text-xl font-bold text-gray-800 flex items-start space-x-2">
                                    <span className="text-orange-500">Q.</span>
                                    <span>{faq.q}</span>
                                </h3>
                                <p className="mt-2 text-md text-gray-700 pl-7">
                                    <span className="text-orange-500 font-bold">A.</span>
                                    <span>{faq.a}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </motion.div>
            <Toaster position="bottom-right" reverseOrder={false} />
        </>
    );
};

export default FreeTrial;
