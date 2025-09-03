import React from 'react';
import { MessageSquareText } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20R.B.%20Computers,%20I%20have%20a%20requirement%20for%20Busy%20Software."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 z-50"
      title="Chat with us on WhatsApp"
    >
      <MessageSquareText size={32} />
    </a>
  );
};

export default WhatsAppButton;
