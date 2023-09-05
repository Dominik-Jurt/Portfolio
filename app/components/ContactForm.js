"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';


function ContactForm() {
    emailjs.init('p3w6RC1u3Fx1xY88I');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        emailjs.send('service_pnqa3ii', 'template_wrssqtn', {
            to_email: 'dominik.jurt712@gmail.com', // Recipient's email
            from_name: name,
            from_email: email,
            message: message,
        }, 'p3w6RC1u3Fx1xY88I')
        .then((response) => {
            console.log('Email sent successfully:', response);
            alert('Email sent successfully');
        })
        .catch((error) => {
            console.error('Email sending error:', error);
            alert('Error sending email');
        });

        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form className="mx-auto flex flex-col lg:flex-row border border-gray-800 border-8 w-4/5 max-w-3xl mx-6 mt-20 lg:space-x-12 p-6 lg:p-12" onSubmit={handleSubmit}>
            <div className="w-full lg:w-1/2">
                <div className="text-3xl font-bold mb-4">Get in Touch</div>
                <div className="text-gray-600 font-semibold text-lg mb-6">If you have any questions or requests, feel free to contact me through the contact form or on Social media linked below</div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        className="w-full px-4 py-2 border rounded"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

emailjs.init('p3w6RC1u3Fx1xY88I');

export default ContactForm;
