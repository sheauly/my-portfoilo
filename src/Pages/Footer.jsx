import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import logo1 from '../assets/'
const Footer = () => {
    return (
        
        <footer className="bg-gray-900 text-white py-8">

            <div className="w-full h-[2px] bg-gray-700">
                {/* <div className="flex flex-col items-center justify-center gap-2 mb-4 sm:flex-row">
                    <img
                        src={logo}
                        alt="Sheauly Logo"
                        className="h-16 w-auto rounded-md shadow-md"
                    />
                    <h2 className="text-2xl font-semibold">Sheauly Akhter</h2>
                </div> */}
            </div>

            <div className="max-w-4xl mx-auto text-center px-4 mt-6">


                {/* Name */}
                <h2 className="text-2xl font-semibold mb-2">Sheauly Akhter</h2>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mb-4">
                    <a
                        href="https://github.com/sheauly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <FaGithub size={26} />
                    </a>
                    <a
                        href="https://www.facebook.com/sheauly.akhter.7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <FaFacebook size={26} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sheauly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <FaLinkedinIn size={26} />
                    </a>
                </div>

                {/* Bottom Text */}
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Sheauly Akhter. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
