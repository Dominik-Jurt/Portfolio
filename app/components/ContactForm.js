"use client"
import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send email using your chosen email service/API
        // Include name, email, and message in the email content

        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form className="mx-auto flex border border-gray-800 border-8 w-2/5 mt-20 space-x-12 p-12" onSubmit={handleSubmit}>
            <div className="flex items-center w-1/2">
                <div>
                    <div className="text-3xl font-bold mb-2">Get in Touch</div>
                    <div className="text-gray-600 font-semibold text-xl">If you have any questions or requests, feel free to contact me through the contact form or on Social media linked below</div>
                </div>
            </div>
            <div className='w-1/2'>
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
                </button></div>

        </form>
    );
}

export default ContactForm;
