// components/Footer.jsx
'use client'
import Link from 'next/link';
import Image from 'next/image';
import { BiLogoFacebookSquare, BiLogoInstagram, BiLogoYoutube, BiLogoLinkedin } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className="bg-[#003366] text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="flex flex-col items-start">
                        <div className="mb-4">
                            <Image
                                src="/logowhite.png"
                                alt="Sahaj Logo"
                                width={180}
                                height={90}
                                className=" p-2 rounded-full"
                            />
                        </div>
                        <p className="text-sm mt-2">
                            We're a groundnut oil company truly passionate about bringing the authentic taste of nature to you.
                        </p>

                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-xl font-medium mb-4">Navigation</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:underline">Home</Link></li>
                            <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
                            <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
                            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                            <li><Link href="/terms-condition" className="hover:underline">Terms & Condition</Link></li>
                            <li><Link href="/shipping-policy" className="hover:underline">Shipping Policy</Link></li>
                            <li><Link href="/refund-return-policy" className="hover:underline">Refund and Return policy</Link></li>
                        </ul>
                    </div>

                    {/* Factory Outlets */}
                    <div>
                        <h3 className="text-xl font-medium mb-4">Factory Outlets</h3>
                        <ul className="space-y-3">
                            <li>AHMEDABAD - 99741 16500</li>
                            <li>VADODARA - 99742 66500</li>
                            <li>SURAT - 99747 16500</li>
                            <li>BHAVNAGAR - 99741 56500</li>
                            <li>RAJKOT - 85117 16500</li>
                            <li>BHUJ - 99742 76500</li>
                            <li>MEHSANA - 99742 96500</li>
                        </ul>
                    </div>

                    {/* Address and Contact */}
                    <div>
                        <h3 className="text-xl font-medium mb-4">Address</h3>
                        <p className="mb-4">
                            Survey No.1068/03, Dhari-Amreli Road, Amreli, Gujarat, India – 365601
                        </p>

                        <h3 className="text-xl font-medium mt-8 mb-4">Contact</h3>
                        <p>+91 9104116500 (9AM to 6PM)</p>
                    </div>
                </div>

                <div className="border-t border-gray-600 mt-10 pt-6 flex justify-between">
                    <div className="flex ml-10 space-x-3">
                        <Link href="#" className="border border-white p-2 hover:bg-white hover:text-[#003366] transition">
                            <BiLogoFacebookSquare />
                        </Link>
                        <Link href="#" className="border border-white p-2 hover:bg-white hover:text-[#003366] transition">
                            <BiLogoInstagram />
                        </Link>
                        <Link href="#" className="border border-white p-2 hover:bg-white hover:text-[#003366] transition">
                            <BiLogoYoutube />
                        </Link>
                        <Link href="#" className="border border-white p-2 hover:bg-white hover:text-[#003366] transition">
                            <BiLogoLinkedin />
                        </Link>
                    </div>
                    <p className="text-sm justify-center">Designed by Egniol</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;