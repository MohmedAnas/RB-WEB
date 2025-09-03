import React, { useState, useEffect, useRef } from 'react';
import { Mail, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import Typed from 'typed.js';
import gsap from 'gsap';

const Feedback = () => {
    const [formData, setFormData] = useState({
        enquiryType: 'Query', // Default value for the new dropdown
        name: '',
        phone: '',
        email: '',
        description: '',
    });
    const [isGenerating, setIsGenerating] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const typedEl = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedEl.current, {
            strings: [
                "Have a question?",
                "Need a demo?",
                "Looking for renewal support?"
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            showCursor: false,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    
    useEffect(() => {
        // GSAP hover animations for inputs
        if (formRef.current) {
            gsap.fromTo(formRef.current.querySelectorAll('input, select, textarea'),
                { borderColor: '#E5E7EB' },
                {
                    borderColor: '#f97316',
                    duration: 0.3,
                    stagger: 0.05,
                    paused: true,
                    ease: 'power2.inOut',
                    overwrite: 'auto'
                }
            );
        }
        
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const generateMessage = async () => {
        if (!formData.name || !formData.email) {
            toast.error("Please enter your name and email to generate a message.");
            return;
        }

        setIsGenerating(true);
        const prompt = `Write a professional and concise enquiry message for a company named "R.B. Computers & Software Solution" on behalf of a person named "${formData.name}". The person is interested in Busy Accounting Software solutions. The message should be friendly and prompt a response, and should not be a question. The message should not use any greetings or salutations like 'Hello' or 'Hi', just the body of the message.`;

        const generationPromise = new Promise(async (resolve, reject) => {
            try {
                const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
                const payload = { contents: chatHistory };
                const apiKey = ""; // You must replace this with a valid Gemini API key
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
                if (!response.ok) {
                const errorText = await response.text();
                console.error("Server error:", errorText);
                reject(`Server error: ${response.status} ${response.statusText}`);
                return;
                }
                const result = await response.json();
                resolve(result.message || 'Feedback submitted successfully!');

                const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

                if (text) {
                    setFormData(prev => ({ ...prev, description: text.trim() }));
                    resolve('Message generated successfully!');
                } else {
                    reject('Invalid response from API.');
                }
            } catch (error) {
                console.error('Message generation API error:', error);
                reject('Failed to generate a message. Please try again.');
            } finally {
                setIsGenerating(false);
            }
        });

        toast.promise(generationPromise, {
            loading: 'Generating message...',
            success: (message) => message,
            error: (err) => err,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const submissionPromise = new Promise(async (resolve, reject) => {
            console.log("Submitting feedback data:", formData);
            try {
                const response = await fetch('http://localhost:5000/api/feedback', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                    enquiryType: formData.enquiryType,
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    description: formData.description,  // ✅ matches backend
                }),
                });
                const result = await response.json();

                if (response.ok) {
                    setIsSubmitted(true);
                    resolve(result.message);
                    setFormData({ enquiryType: 'Query', name: '', phone: '', email: '', description: '' });
                } else {
                    reject(result.message);
                }
            } catch (error) {
                console.error('Form submission error:', error);
                reject('An unexpected error occurred. Please ensure your backend server is running and try again later.');
            }
        });

        toast.promise(submissionPromise, {
            loading: 'Submitting enquiry...',
            success: (message) => message,
            error: (err) => err,
        });
    };
    
    // GSAP animation for the button pulse
    useEffect(() => {
        if (formRef.current) {
            gsap.to(formRef.current.querySelector('.submit-btn'), {
                scale: 1.05,
                duration: 0.6,
                yoyo: true,
                repeat: -1,
                ease: "power1.inOut"
            });
        }
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-100 to-indigo-100">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl p-8 backdrop-blur-lg bg-white/60 border border-white/80"
            >
                <AnimatePresence mode="wait">
                    {isSubmitted ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            className="text-center p-12"
                        >
                            <h2 className="text-4xl font-extrabold text-green-600 mb-4">
                                Thank You!
                            </h2>
                            <p className="text-lg text-gray-700">
                                Your enquiry has been submitted successfully. We will get back to you shortly.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    <span ref={typedEl} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"></span>
                                </h1>
                                <p className="text-gray-600">
                                    Please fill out the form below and we will get back to you as soon as possible.
                                </p>
                            </div>
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700">Type of Enquiry</label>
                                    <select
                                        id="enquiryType"
                                        name="enquiryType"
                                        value={formData.enquiryType}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-white"
                                    >
                                        <option>Query</option>
                                        <option>Demo</option>
                                        <option>Renewal</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-white"
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
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-white"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                        <button
                                            type="button"
                                            onClick={generateMessage}
                                            disabled={isGenerating || !formData.name || !formData.email}
                                            className="flex items-center text-sm text-blue-600 hover:text-blue-800 font-semibold disabled:text-gray-400"
                                        >
                                            {isGenerating ? (
                                                <>
                                                    <svg className="animate-spin h-4 w-4 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Generating...
                                                </>
                                            ) : (
                                                <>
                                                    <Sparkles size={16} className="mr-1" />
                                                    Generate message
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows="4"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-white"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="submit-btn w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                                    disabled={isGenerating}
                                >
                                    {isGenerating ? 'Sending...' : 'Submit Enquiry'}
                                </button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
            <Toaster position="bottom-right" reverseOrder={false} />
        </div>
    );
};

export default Feedback;