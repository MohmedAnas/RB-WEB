import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';

const Payment = () => {
    const [formData, setFormData] = useState({
        service: '',
        amount: '',
        name: '',
        phone: '',
        email: '',
    });

    const servicesForPayment = [
        { label: "Select a service", value: "" },
        { label: "Busy Software Purchase", value: "busy_software" },
        { label: "AMC Services", value: "amc" },
        { label: "Data Migration", value: "data_migration" },
        { label: "Training", value: "training" },
        { label: "Other", value: "other" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dummy payment form submitted:', formData);
        alert('Payment functionality is under development. Please contact us for details.');
    };

    return (
        <div className="container mx-auto px-4 py-12 flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 w-full max-w-lg">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    <CreditCard size={32} className="inline-block mr-2 text-orange-500" />
                    Make a Payment
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                        >
                            {servicesForPayment.map((service, index) => (
                                <option key={index} value={service.value}>{service.label}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., 5000"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" />
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
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" />
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
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" />
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                    >
                        Pay Now
                    </button>
                </form>
                <div className="mt-6 p-4 bg-yellow-50 text-yellow-800 rounded-md">
                    <p className="font-medium text-sm text-center">
                        <span className="font-bold">Note:</span> This is a dummy payment interface. Payment functionality is under development. Please contact us for details.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Payment;
