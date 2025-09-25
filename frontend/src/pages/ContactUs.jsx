
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, user } from "lucide-react";

const contactGroups = [
  {
    group: "Sales",
    contacts: [
      {
        name: "Saad Desai",
        role: "User Assistance",
        email: "rboffice.ahd@gmail.com",
        phone: "+91 94848 22607"
      },
      // You can add more contacts - one per object
    ]
  },
  {
    group: "Technichal Support",
    contacts: [
      {
        name: "Museb Shaikh",
        role: "New Purchases/ Licensing/ Technichal",
        email: "rbcss.museb@gmail.com",
        phone: "+91 94096 32760"
      }
    ]
  },
  {
    group: "Product Support",
    contacts: [
      {
        name: "Rahil Ganchi",
        role: "Subscription & Product Renewal",
        email: "renewal@rbcomputers.com",
        phone: "+91 94848 66026"
      }
    ]
  }
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
            Whether you have a question about our software, need technical support, or want to discuss a customized solution, our team is ready to help. Reach out to us by the relevant contact group below.
          </motion.p>
        </div>
      </section>

      {/* List Format Contact Groups */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-gray-900"
          >
            How Can We Help?
          </motion.h2>
          <div className="divide-y divide-gray-200">
            {contactGroups.map((group, idx) => (
              <div className="py-8" key={group.group}>
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">{group.group}</h3>
                <ul>
                  {group.contacts.map((person, index) => (
                    <li key={index} className="mb-3">
                      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                        <span className="font-medium text-gray-900">{person.name}</span>
                        <span className="text-gray-600 text-sm">{person.role}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <Mail size={16} className="text-orange-500" />
                        <span className="text-gray-800">{person.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <Phone size={16} className="text-orange-500" />
                        <span className="text-gray-800">{person.phone}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactUs;

