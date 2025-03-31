'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useAuthStore from '@/store/useAuthStore';

const HomePageSection = () => {
    const user = useAuthStore((state) => state.user);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="relative w-full h-auto md:h-auto lg:h-auto  bg-[url('/section1bg.png')] bg-cover bg-center overflow-hidden">
                {/* Navbar */}
                <nav className="relative flex items-center justify-between py-3 bg-transparent bg-opacity-10 px-4 md:px-8 lg:px-10 z-10">
                    <div className="flex items-center w-[100px] lg:w-[180px]">
                        <Image
                            src="/logo.png"
                            alt="Sahaj Logo"
                            width={140}
                            height={100}
                            className="mr-4 md:mr-8"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-[#fff] hover:text-blue-700 font-medium text-sm md:text-base">
                            Home
                        </Link>
                        <Link href="/about-us" className="text-[#fff] hover:text-blue-700 font-medium text-sm md:text-base">
                            About Us
                        </Link>
                        <Link href="/sahaj-products" className="text-[#fff] hover:text-blue-700 font-medium text-sm md:text-base">
                            Sahaj Products
                        </Link>
                        <Link href="/sahaj-seva" className="text-[#fff] hover:text-blue-700 font-medium text-sm md:text-base">
                            Sahaj Seva
                        </Link>
                        <Link href="/faq" className="text-[#fff] hover:text-blue-700 font-medium text-sm md:text-base">
                            FAQ
                        </Link>
                        {user && user.role !== 'admin' && (
                            <Link href="/my-account" className="text-[#fff] hover:text-blue-700 font-medium text-sm md:text-base">
                                My Account
                            </Link>
                        )}
                        {!user && !user?.role && (
                            <Link href="/login" className="text-[#fff] hover:text-blue-700 font-medium text-sm md:text-base">
                                Login
                            </Link>
                        )}
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            href="/contact-us"
                            className="px-1 md:px-3 py-1 border-2 border-blue-900 text-blue-900 rounded hover:bg-blue-900 hover:text-white transition font-bold  md:text-base"
                        >
                            <span className='text-[12px] md:text-base'>Contact Us</span>
                        </Link>
                        <Link
                            href="/cart"
                            className="flex items-center px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
                        >
                            <svg
                                className="w-4 h-6 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                ></path>
                            </svg>
                            <span className='text-[12px] md:text-base'>My Cart</span>
                        </Link>
                    </div>
                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(true)} aria-label="Open Menu">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Sidebar Menu */}
                    {menuOpen && (
                        <div className="fixed top-0 left-0  h-screen w-1/2 backdrop-blur-md bg-opacity-80 z-50 flex flex-col items-center pt-10">
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="self-end mr-4 text-white"
                                aria-label="Close Menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="flex flex-col items-center space-y-4 mt-8">
                                <Link onClick={() => setMenuOpen(false)} href="/" className="text-white text-lg">
                                    Home
                                </Link>
                                <Link onClick={() => setMenuOpen(false)} href="/about-us" className="text-white text-lg">
                                    About Us
                                </Link>
                                <Link onClick={() => setMenuOpen(false)} href="/sahaj-products" className="text-white text-lg">
                                    Sahaj Products
                                </Link>
                                <Link onClick={() => setMenuOpen(false)} href="/sahaj-seva" className="text-white text-lg">
                                    Sahaj Seva
                                </Link>
                                <Link onClick={() => setMenuOpen(false)} href="/faq" className="text-white text-lg">
                                    FAQ
                                </Link>
                                {user && user.role !== 'admin' && (
                                    <Link onClick={() => setMenuOpen(false)} href="/my-account" className="text-white text-lg">
                                        My Account
                                    </Link>
                                )}
                                {!user && !user?.role && (
                                    <Link onClick={() => setMenuOpen(false)} href="/login" className="text-white text-lg">
                                        Login
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}
                </nav>

                <div className="relative w-full -mt-30 h-auto md:h-auto lg:h-auto">
                    {/* section1 */}
                    <div className="relative py-12 px-4 min-h-[70vh] lg:min-h-[116vh]">
                        {/* Plant Background */}
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-40 z-0">
                            <div className="relative bottom-0 w-[300vw]">
                                <img
                                    src="/plant.png"
                                    alt="Leaves Background"
                                    className="w-[100vw]  lg:w-[800vw] lg:h-[800px]"
                                />
                            </div>
                        </div>

                        {/* Bottle Image */}
                        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
                            <img src="/bottel.png" alt="Oil Bottle" className='w-[95px] h-[300px] lg:w-[200px] lg:h-[600px]' />
                        </div>

                        {/* Right Side Content */}
                        <div className="absolute right-0 bottom-0 z-10">
                            <div className="relative">
                                <div className="absolute lg:top-10 top-10 right-5 lg:right-40">
                                    <img src="/1karod.png" alt="1 Crore Slogan" className="w-[120px] h-[80px] lg:w-[340px] lg:h-[200px]" />
                                </div>
                                <div className="relative -right-15 lg:-right-30">
                                    <img src="/valasahaj.png" alt="Person" className="w-[90vw] h-[50vh] lg:w-[70vw] lg:h-[100vh]" />
                                </div>
                            </div>

                            <div className="absolute bottom-8 lg:bottom-20 z-10 right-0">
                                <Link href="tel:+1234567890" className="inline-flex items-center">
                                    <img src="/callnow.png" alt="Call Icon" className='w-[80px] h-[30px] lg:w-[180px] lg:h-[65px]' />
                                </Link>
                            </div>
                        </div>

                        {/* Left Leaf */}
                        <div className="absolute hidden lg:block left-10 lg:left-20 top-20 z-10">
                            <img src="/leaf.png" alt="leaf" className='w-[100px] h-[100px]' />
                        </div>
                        {/* Right Leaf */}
                        <div className="absolute hidden lg:block right-10 lg:right-35 lg:top-40 z-0">
                            <img src="/leaf.png" alt="leaf" className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]' />
                        </div>

                        {/* Order Button and Board */}
                        <div className="absolute left-0 lg:left-20 bottom-0 z-10">
                            <div className="lg:ml-10 mb-2 ml-3">
                                <Link href="/order" className="inline-block rounded-md">
                                    <p className="text-xs md:text-4xl md:py-4 font-bold bg-blue-900 text-white p-2 rounded-md">
                                        ઓર્ડેર કરો ને વ્હાલા
                                    </p>
                                </Link>
                            </div>
                            <div className="relative">
                                <img src="/board.png" alt="Wooden Board" className='w-[150px] h-[200px] lg:w-[400px] lg:h-[450px]' />
                                <div className="absolute top-4 lg:top-10 left- text-md space-y-2 lg:text-4xl lg:space-y-10 text-center w-full">
                                    <p className="text-[#EFEDB3] font-bold">1-Ltr(910gm)</p>
                                    <p
                                        className="text-[#EFEDB3] font-bold rotate-2 pt-1"

                                    >
                                        ઘાણીનું સીંગતેલ
                                    </p>
                                    <p className="text-[#EFEDB3] font-bold">₹1,120</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Background */}
                        <div className="absolute -bottom-1 z-10 left-0 w-full">
                            <img src="/bottombg.png" alt="Brown Grass" className="w-full h-[60px] md:h-[100px]" />
                        </div>
                    </div>
                </div>
            </div>
            {/* section2 */}
            <div className="w-full relative">
                <img
                    src="/section2.png"
                    alt="section2"
                    className="w-full h-auto lg:h-[160vh] object-cover z-10"
                />
            </div>

        </>
    );
};

export default HomePageSection;
