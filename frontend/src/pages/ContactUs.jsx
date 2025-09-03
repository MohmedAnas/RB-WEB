import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, User, Users } from 'lucide-react';

const contactInfo = [
    {
        name: "Taqi Ranawadia",
        role: "Owner",
        phone: "+91 93741 40307",
        email: "rbcomphmt@yahoo.com",
        icon: <User size={24} />,
    },
    {
        name: "Saad Desai",
        role: "Sales & Support",
        phone: "+91 94848 22607",
        email: "rboffice.ahd@gmail.com",
        icon: <Users size={24} />,
    },
    {
        name: "Rahil Ganchi",
        role: "Sales & Support",
        phone: "+91 94848 66026",
        email: "rahil.busy@gmail.com",
        icon: <Users size={24} />,
    },
    {
        name: "Museb Shaikh",
        role: "Sales & Support",
        phone: "+91 94096 32760",
        email: "rbcss.museb@gmail.com",
        icon: <Users size={24} />,
    },
];

const ContactUs = () => {
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
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-4 text-lg md:text-xl leading-relaxed font-light max-w-4xl mx-auto"
                    >
                        Whether you have a question about our software, need technical support, or want to discuss a customized solution, our team is ready to help. Reach out to us through our contact form or get in touch with our team members directly.
                    </motion.p>
                </div>
            </section>

            {/* Contact Details Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-3xl font-bold text-center mb-12 text-gray-900"
                    >
                        Our Team
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((person, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-indigo-500 text-center"
                            >
                                <div className="text-indigo-500 mb-4 inline-block">
                                    {person.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                                <p className="text-sm text-gray-600 mb-4">{person.role}</p>
                                <ul className="space-y-2 text-sm text-left">
                                    <li className="flex items-center space-x-2">
                                        <Mail size={16} className="text-orange-500" />
                                        <span>{person.email}</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <Phone size={16} className="text-orange-500" />
                                        <span>{person.phone}</span>
                                    </li>
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
