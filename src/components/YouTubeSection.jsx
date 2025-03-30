'use client'
import React from 'react';
import Image from 'next/image';
import { FaYoutube, FaPlay } from 'react-icons/fa';

const YoutubeSection = () => {
    return (
        <>
            <section className="bg-amber-100 py-8 md:py-12 px-2">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="max-w-lg md:ml-16 text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
                            <span className="text-yellow-500">WHY GROUNDNUT OIL</span> <br /> IS BEST FOR HEALTH?
                        </h2>

                        <button className="mt-4 bg-blue-950 text-white text-lg px-6 py-3 rounded-md shadow-md">
                            Subscribe Now
                        </button>

                        {/* Stats Section */}
                        <div className="flex justify-center md:justify-start items-center gap-8 mt-6">
                            <div className="flex items-center gap-2">
                                <FaYoutube className="text-red-600 text-3xl" />
                                <div>
                                    <p className="text-xl font-bold text-blue-950">100K+</p>
                                    <p className="text-gray-700 text-sm">Subscribers</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaPlay className="text-gray-800 text-3xl" />
                                <div>
                                    <p className="text-xl font-bold text-blue-950">500+</p>
                                    <p className="text-gray-700 text-sm">Videos</p>
                                </div>
                            </div>
                        </div>

                        {/* Video Thumbnails */}
                        <div className="flex justify-center md:justify-start gap-4 mt-6">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 flex items-center justify-center rounded-md shadow-md">
                                <FaPlay className="text-white text-2xl" />
                            </div>
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 flex items-center justify-center rounded-md shadow-md">
                                <FaPlay className="text-white text-2xl" />
                            </div>
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 flex items-center justify-center rounded-md shadow-md">
                                <FaPlay className="text-white text-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative mt-10 md:mt-0 overflow-hidden -bottom-8 md:-bottom-12">
                        {/* Background Circle */}
                        <div className="absolute  -bottom-20 md:-bottom-30 right-2 md:bg-yellow-500 rounded-full w-40 h-40 md:w-100 md:h-100 z-0"></div>

                        {/* Farmer Image */}
                        <img
                            src="/valasahaj2.png"
                            alt="Gujarati Farmer"
                            className="relative z-10 right-0 md:right-10 w-[80vw] md:w-[45vw] -bottom-4 md:-bottom-12 h-auto md:h-[65vh] object-cover"
                        />

                        {/* Speech Bubble */}
                        <div className="absolute -top-2 right-4 md:right-8">
                            <Image
                                src="/samjavu2.png"
                                alt="samjavu"
                                width={150}
                                height={100}
                                className="w-20 md:w-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5 */}
            <img src="/section5.png" alt="5" className="w-full h-auto" />

            {/* Section 6 */}
            <img src="/section6.png" alt="6" className="w-full h-auto bg-white" />

            {/* Section 7 */}
            <img src="/section7.png" alt="7" className="w-full h-auto bg-white p-2 px-4" />
        </>
    );
};

export default YoutubeSection;
