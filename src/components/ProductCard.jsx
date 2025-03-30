'use client'
import { useState } from 'react';
import Image from 'next/image';

const ProductCard = ({ product }) => {
    const [isWishlist, setIsWishlist] = useState(false);

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md w-full sm:w-55">
           
            <div className="relative bg-[url('/section1bg.png')] p-4 flex justify-center items-center h-40 sm:h-48">
                <span className="absolute top-2 left-2 bg-white px-3 py-1 rounded-full text-gray-700 text-sm font-medium">
                    {product.size}
                </span>
                <button
                    className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
                    onClick={() => setIsWishlist(!isWishlist)}
                >
                    {isWishlist ? (
                        <svg className="w-6 h-6 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 stroke-current" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" strokeWidth="1.5" />
                        </svg>
                    )}
                </button>
                <Image
                    src={product.image}
                    alt={product.name}
                    width={120}
                    height={120}
                    className="object-contain"
                />
            </div>

            {/* Product Details */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
                    <div className="flex items-center">
                        {product.originalPrice && (
                            <span className="text-xs text-red-500 line-through mr-1">₹{product.originalPrice}</span>
                        )}
                        <span className="text-sm font-bold text-gray-700">₹{product.price}</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
                    <p className="text-xs text-gray-700 mb-3 sm:mb-0">{product.description}</p>
                    <div className="flex items-center border rounded">
                        <button className="px-2 py-1 text-gray-700">-</button>
                        <span className="px-2 py-1 text-gray-700">{product.quantity}</span>
                        <button className="px-2 py-1 text-gray-700">+</button>
                    </div>
                </div>

            
                <button className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
