"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {

    const [isEnglish, setIsEnglish] = useState(true);
    const [leftToggleColor, setLeftToggleColor] = useState('bg-black w-0 transition-all duration-300 rounded-full');
    const [rightToggleColor, setRightToggleColor] = useState('bg-black w-6/12 transition-all duration-300 rounded-full');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

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

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const scrollToAbout = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <header className="bg-gray-800 py-1 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-3xl font-semibold whitespace-nowrap ml-4">Dominik Jurt</div>
                <nav className="flex justify-between items-center">
                    <div className="hidden lg:flex lg:mr-12 lg:h-full">
                        <Link href="/" className="text-xl text-white rounded-md hover:text-gray-300 hover:bg-gray-700 py-6 px-4 font-light">Home</Link>
                        <Link href="/about" className="text-xl text-white rounded-md hover:text-gray-300 hover:bg-gray-700 py-6 px-4 font-light">About</Link>
                        <Link href="/projects" className="text-xl text-white rounded-md hover:text-gray-300 hover:bg-gray-700 py-6 px-4 font-light">Projects</Link>
                        <Link href="/resume" className="text-xl text-white rounded-md hover:text-gray-300 hover:bg-gray-700 py-6 px-4 font-light">CV</Link>
                        <a onClick={scrollToAbout} className="text-xl text-white rounded-md hover:text-gray-300 hover:bg-gray-700 py-6 px-4 font-light cursor-pointer">Contact</a>
                        <div className="flex space-x-2 text-white items-center ml-16 mr-8">
                            <div className='text-m hover:text-gray-300 cursor-pointer' onClick={() => toggleLanguage(true)}>En
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
                    </div>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleDropdown}
                            className="text-white hover:text-gray-300 p-2"
                        >
                            <MenuIcon className="text-6xl" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-full right-0 bg-gray-800 border border-gray-700 mt-1 py-2">
                                <Link onClick={closeDropdown} href="/" className="block text-xl text-white hover:text-gray-300 py-2 px-4">Home</Link>
                                <Link onClick={closeDropdown} href="/about" className="block text-xl text-white hover:text-gray-300 py-2 px-4">About</Link>
                                <Link onClick={closeDropdown} href="/projects" className="block text-xl text-white hover:text-gray-300 py-2 px-4">Projects</Link>
                                <Link onClick={closeDropdown} href="/resume" className="block text-xl text-white hover:text-gray-300 py-2 px-4">CV</Link>
                                <Link onClick={closeDropdown} href="/contact" className="block text-xl text-white hover:text-gray-300 py-2 px-4">Contact</Link>
                                {isEnglish ?
                                    <div className='block text-xl text-white hover:text-gray-300 py-2 px-4 cursor-pointer' onClick={() => toggleLanguage(false)}>Switch to German
                                    </div>
                                    : <div className='block text-xl text-white hover:text-gray-300 py-2 px-4 cursor-pointer' onClick={() => toggleLanguage(true)}>Switch to English
                                    </div>}
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
