import React, { useState, useEffect } from 'react';
import { Youtube, Sparkles, MessageSquareText } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const BusyTutorialVideo = () => {
    const youtubeVideos = [
        { id: 1, title: "Busy Software Tutorial 1", embedUrl: "https://www.youtube.com/embed/b3DtHVQzFts", summary: "This video provides an overview of the core features and benefits of Busy Accounting Software, focusing on initial setup and key functionalities." },
        { id: 2, title: "Busy Software Tutorial 2", embedUrl: "https://www.youtube.com/embed/57IQkY1Oy54", summary: "Learn how to efficiently manage your inventory within Busy Software, including tracking stock levels, setting reorder points, and handling multiple locations." },
        { id: 3, title: "Busy Software Tutorial 3", embedUrl: "https://www.youtube.com/embed/NVYOa7e8JDY", summary: "A step-by-step tutorial on automating GST billing and return filing, ensuring your business remains compliant with tax regulations." },
        { id: 4, title: "Busy Software Tutorial 4", embedUrl: "https://www.youtube.com/embed/JK4wmz6Debc", summary: "This video demonstrates how to use the advanced financial reporting features of Busy Software to analyze your business's performance." },
        { id: 5, title: "Busy Software Tutorial 5", embedUrl: "https://www.youtube.com/embed/Y5_aLQ7c0IE", summary: "A detailed guide on setting up and managing your payroll, including employee records, salary slips, and compliance requirements." },
        { id: 6, title: "Busy Software Tutorial 6", embedUrl: "https://www.youtube.com/embed/pp1ryB6dRaw", summary: "Learn about the process of migrating data from other platforms like Tally or Excel into Busy Accounting Software seamlessly." },
        { id: 7, title: "Busy Software Tutorial 7", embedUrl: "https://www.youtube.com/embed/0Ei9SadZFuc", summary: "This tutorial explains the benefits and implementation of integrating barcode and POS systems with Busy Software for faster billing." },
        { id: 8, title: "Busy Software Tutorial 8", embedUrl: "https://www.youtube.com/embed/fN579WcjpTk", summary: "An in-depth look at the Enterprise edition's advanced features, such as Voucher & Master Approval and multi-branch management." },
        { id: 9, title: "Busy Software Tutorial 9", embedUrl: "https://www.youtube.com/embed/MR9RNVsst6c", summary: "A comprehensive guide on managing sales, purchases, and orders within Busy Software to streamline your business operations." },
        { id: 10, title: "Busy Software Tutorial 10", embedUrl: "https://www.youtube.com/embed/bSlkfn7w31Q", summary: "Final tutorial covering tips and tricks for optimizing your workflow and getting the most out of your Busy Accounting Software." },
    ];
    
    const [videosWithSummaries, setVideosWithSummaries] = useState(youtubeVideos);
    const [loadingVideoId, setLoadingVideoId] = useState(null);

    useEffect(() => {
        gsap.fromTo('.video-card',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 }
        );
    }, []);

    const getSummary = async (videoId, videoTitle) => {
        setLoadingVideoId(videoId);
        const updatedVideos = videosWithSummaries.map(v => v.id === videoId ? { ...v, summary: '' } : v);
        setVideosWithSummaries(updatedVideos);

        try {
            const prompt = `Write a short summary for a video titled '${videoTitle}' that discusses accounting software features.`;
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
                setVideosWithSummaries(prevVideos => 
                    prevVideos.map(v => v.id === videoId ? { ...v, summary: text.trim() } : v)
                );
            } else {
                throw new Error("Invalid response from API.");
            }
        } catch (error) {
            console.error('Video summary API error:', error);
            alert('Failed to generate summary. Please try again later.');
        } finally {
            setLoadingVideoId(null);
        }
    };
    
    return (
        <div className="container mx-auto px-4 py-12 space-y-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Busy Tutorial Video</h1>
                <p className="text-lg text-gray-700">Explore our work and learn more through our videos.</p>
            </div>

            <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                    <Youtube size={32} className="text-orange-500" />
                    <span>Tutorial video</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {videosWithSummaries.map((video) => (
                        <motion.div
                            key={video.id}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-50 p-4 rounded-xl shadow-lg transform hover:shadow-2xl transition-shadow duration-300 video-card"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{video.title}</h3>
                            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                                <iframe
                                    className="w-full h-full"
                                    src={video.embedUrl}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="mt-4">
                                <button
                                    onClick={() => getSummary(video.id, video.title)}
                                    disabled={loadingVideoId === video.id}
                                    className="flex items-center space-x-2 w-full justify-center py-2 px-4 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors disabled:bg-blue-300"
                                >
                                    {loadingVideoId === video.id ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Generating...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles size={20} />
                                            <span>Summarize Video</span>
                                        </>
                                    )}
                                </button>
                                {video.summary && (
                                    <p className="mt-2 text-sm text-gray-700 text-left p-2 bg-white rounded-md border border-gray-200">{video.summary}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BusyTutorialVideo;
