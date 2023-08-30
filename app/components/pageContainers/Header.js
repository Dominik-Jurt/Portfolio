"use client"
import React, {useState} from 'react';
import Link from 'next/link';

function Header() {

    const [isEnglish, setIsEnglish] = useState(true);
    const [leftToggleColor, setLeftToggleColor] = useState('bg-black w-0 transition-all duration-300 rounded-full');
    const [rightToggleColor, setRightToggleColor] = useState('bg-black w-6/12 transition-all duration-300 rounded-full');

    const toggleLanguage = (english) => {
        if (english) {
            setIsEnglish(true);
            setLeftToggleColor('bg-black w-0 transition-all duration-300 rounded-full');
            setRightToggleColor('bg-black w-6/12 transition-all duration-300 rounded-full');
        } else {
            setIsEnglish(false);
            setLeftToggleColor('bg-black w-6/12 transition-all duration-300 rounded-full');
            setRightToggleColor('bg-black w-0 transition-all duration-300 rounded-full');
        }
    };

    return (
        <header className="bg-gray-800 py-1 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-3xl font-semibold">Dominik Jurt</div>
                <nav className="flex justify-between items-center">
                    <div className="flex mr-12 h-full">
                        <Link href="/" className="text-xl text-white rounded-md hover:text-gray-300 hover:bg-gray-700 py-6 px-4 font-light">Home</Link>
                        <Link href="/about" className="text-xl text-white rounded-md hover:text-gray-300 hover:bg-gray-700 py-6 px-4 font-light">About</Link>
                        <Link href="/projects" className="text-xl text-white rounded-md hover:text-gray-300 hover:bg-gray-700 py-6 px-4 font-light">Projects</Link>
                        <Link href="/resume" className="text-xl text-white rounded-md hover:text-gray-300 hover:bg-gray-700 py-6 px-4 font-light">CV</Link>
                        <Link href="/contact" className="text-xl text-white rounded-md hover:text-gray-300 hover:bg-gray-700 py-6 px-4 font-light">Contact</Link>
                    </div>
                    <div className="flex space-x-2 text-white items-center ml-16">
                        <div className='text-m hover:text-gray-300 cursor-pointer' onClick={() => toggleLanguage(true)}>Eng
                        </div>
                        <div className="w-6 min-w-full h-1 rounded-full flex">
                            <div className={leftToggleColor}></div>
                            <div className="bg-gray-100 w-6/12 rounded-full"></div>
                            <div className={rightToggleColor}></div>
                        </div>
                        <div
                            className="text-m hover:text-gray-300 cursor-pointer"
                            onClick={() => toggleLanguage(false)}
                        >
                            De</div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
