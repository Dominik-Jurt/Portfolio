"use client"
import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function SocialMedia() {

    const openPage = (page) => {
        let url = "";
        switch (page) {
            case "LinkedIn":
                url = 'https://www.linkedin.com/in/dominik-jurt-8ab491256/';
                break;

            case "Instagram":
                url = 'https://www.instagram.com/domii.j99/';
                break;

            case "Github":
                url = 'https://github.com/Dominik-Jurt';
                break;

            default:
                // Add other cases if needed
                break;
        }
        window.open(url, '_blank');
    };

    const sendEmail = () => {
        const emailAddress = 'dominik.jurt@gmx.ch';
        const mailtoLink = `mailto:${emailAddress}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className='items-start mx-auto lg:ml-20 flex flex-col items-center border border-gray-800 border-8 min-w-2/5 w-11/12 md:w-3/4 lg:w-1/4 mt-20 p-6 lg:p-12 mb-4'>
            <div className="text-3xl font-bold mb-4 text-gray-800">Social Media</div>
            <div className='flex space-x-4 mt-8'>
                <div onClick={() => openPage("LinkedIn")} className='flex items-center border border-gray-800 border-4 p-2 cursor-pointer'>
                    <LinkedInIcon fontSize="large" />
                </div>
                <div onClick={() => openPage("Instagram")} className='flex items-center border border-gray-800 border-4 p-2 cursor-pointer'>
                    <InstagramIcon fontSize="large" />
                </div>
                <div onClick={() => openPage("Github")} className='flex items-center border border-gray-800 border-4 p-2 cursor-pointer'>
                    <GitHubIcon fontSize="large" />
                </div>
                <div onClick={sendEmail} className='flex items-center border border-gray-800 border-4 p-2 cursor-pointer'>
                    <EmailIcon fontSize="large" />
                </div>
            </div>
        </div>

    )
}

export default SocialMedia;