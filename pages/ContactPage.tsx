
import React, { useState } from 'https://esm.sh/react@18.2.0';
import { WhatsAppIcon } from '../components/icons.tsx';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        // Mock submission
        setTimeout(() => {
            setStatus(`Thank you, ${formData.name}! Your message has been sent.`);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 1500);
    };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Contact Us</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Have a question or want to get in touch? We'd love to hear from you.
            </p>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2 bg-gray-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
                        Submit
                    </button>
                    {status && <p className="mt-4 text-center text-green-600">{status}</p>}
                </form>
            </div>
            
            {/* Map and Info */}
            <div className="lg:w-1/2">
                <div className="mb-8">
                     <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                     <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059637843!2d-74.2598661352446!3d40.6971494192666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1625845017415!5m2!1sen!2s" 
                            width="100%" 
                            height="100%"
                            style={{border:0}} 
                            allowFullScreen={false}
                            loading="lazy"
                            title="Office Location"
                        ></iframe>
                    </div>
                </div>
                <div className="bg-cyan-50 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Quick Contact</h3>
                    <p className="text-gray-700 mb-4">For immediate assistance, reach out via WhatsApp.</p>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
                        <WhatsAppIcon className="w-6 h-6" />
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;