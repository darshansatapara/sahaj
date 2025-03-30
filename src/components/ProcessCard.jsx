'use client'
import React from 'react';
import Image from 'next/image';

const ProcessCard = ({ imageSrc, title, bgColor }) => {
    return (
        <div className={`flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6 rounded-lg ${bgColor} w-[90px] h-[120px] sm:w-[110px] sm:h-[150px] md:w-[130px] md:h-[170px] lg:w-[150px] lg:h-[200px] flex-shrink-0`}>
            <Image
                src={imageSrc}
                alt={title}
                width={100}
                height={100}
                className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] object-contain"
            />
            <p className="mt-2 md:mt-3 lg:mt-4 text-center font-bold text-xs sm:text-sm md:text-base">{title}</p>
        </div>
    );
};

export default ProcessCard;