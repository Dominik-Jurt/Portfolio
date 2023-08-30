"use client"
import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function SocialMedia() {
    return (
        <div className='items-start ml-52 flex flex-col items-center border border-gray-800 border-8 w-1/4 mt-20 p-12 mb-4'>
            <div className="text-3xl font-bold mb-4 text-gray-800">Social Media</div>
            <div className='flex space-x-8 mt-8'>
                <div className='border border-gray-800 border-4 p-2'>
                    <LinkedInIcon fontSize="large" />
                </div>
                <div className='border border-gray-800 border-4 p-2'>
                    <InstagramIcon fontSize="large" />
                </div>
                <div className='border border-gray-800 border-4 p-2'>
                    <GitHubIcon fontSize="large" />
                </div>
                <div className='border border-gray-800 border-4 p-2'>
                    <EmailIcon fontSize="large" />
                </div>
            </div>
        </div>

    )
}

export default SocialMedia;