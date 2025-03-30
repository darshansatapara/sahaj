'use client'
import React from 'react';
import ProcessCard from './ProcessCard';
import Image from 'next/image';

const ProcessSection = () => {
    const steps = [
        { imageSrc: '/pf1image.png', title: 'FARMING', bgColor: 'border-2 border-yellow-500 bg-yellow-500 text-blue-950' },
        { imageSrc: '/pf2image.png', title: 'CLEANING', bgColor: 'border-2 border-blue-300 bg-blue-300 text-blue-950' },
        { imageSrc: '/pf3image.png', title: 'DEHULLING', bgColor: 'border-2 border-orange-500 bg-orange-500 text-blue-950' },
        { imageSrc: '/pf4image.png', title: 'PURELY PRESSED', bgColor: 'border-2 border-blue-900 bg-blue-900 text-white' },
        { imageSrc: '/pf5image.png', title: 'FILTERING IN CLOTHES', bgColor: 'border-2 border-white bg-white text-blue-950' },
        { imageSrc: '/pf6image.png', title: 'PACKING', bgColor: 'border-2 border-yellow-500 bg-yellow-500 text-blue-950' },
        { imageSrc: '/pf7image.png', title: 'DELIVERY', bgColor: 'border-2 border-blue-300 bg-blue-300 text-blue-950' },
    ];

    return (
        <section className="py-6 border-0 sm:py-8 md:py-10 bg-[#FFF0C8] px-2 sm:px-4 md:px-6">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-bold mb-3 sm:mb-4 md:mb-6">देश की मिट्टी से देश के लोगो तक</h2>

            {/* Timeline Line */}
            <div className="flex justify-center items-center mb-5 sm:mb-8 md:mb-10 overflow-hidden">
                <img src="/psteps.png" alt="steps" className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] h-auto" />
            </div>

            {/* Process Cards Container with Horizontal Scroll */}
            <div className="relative">
                <div className="flex overflow-x-auto pb-4 md:flex-wrap md:justify-center md:overflow-visible scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-amber-100 gap-2 sm:gap-3 md:gap-4">
                    {steps.map((step, index) => (
                        <ProcessCard key={index} {...step} />
                    ))}
                </div>

                {/* Optional scroll indicators for mobile */}
                <div className="flex justify-center mt-1 gap-1 md:hidden">
                    <div className="w-8 h-1 bg-amber-400 rounded-full"></div>
                    <div className="w-8 h-1 bg-amber-300 rounded-full"></div>
                    <div className="w-8 h-1 bg-amber-300 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;