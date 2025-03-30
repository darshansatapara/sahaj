'use client'
import Image from 'next/image';
import ProductCard from './ProductCard';

const ProductSection = () => {
    const products = [
        {
            id: 1,
            name: 'સાહજ સીંગતેલ-Jar',
            description: 'Healthy & tasty groundnut oil',
            image: '/5liter.png',
            size: '5 Litre',
            price: '1120',
            colors: ['blue', 'yellow'],
            selectedColor: 0,
            quantity: 1
        },
        {
            id: 2,
            name: 'સાહજ સીંગતેલ-Tin',
            description: 'Healthy & tasty groundnut oil',
            image: '/15liter.png',
            size: '15 kg',
            originalPrice: '3499',
            price: '3150',
            colors: ['blue', 'yellow'],
            selectedColor: 0,
            quantity: 1
        },
        {
            id: 3,
            name: 'સાહજ સીંગતેલ-Tin',
            description: 'Healthy & tasty groundnut oil',
            image: '/15liter.png',
            size: '15 Litre',
            originalPrice: '3499',
            price: '2950',
            colors: ['blue', 'yellow'],
            selectedColor: 0,
            quantity: 1
        }
    ];

    return (
        <div className="w-full bg-[#FFF0C8] py-12 px-4 md:px-8 lg:px-12 relative ">
            {/* Curved background */}
            <div className="absolute bottom-1 z-10 left-0 w-full">
                <img
                    src="/section4bg.png"
                    alt="bg"
                    className="w-full h-full"
                />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex justify-center mb-8">
                    <button className="bg-blue-900 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-800 transition">
                        ઓર્ડર કરો ને વ્હાલા
                    </button>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0 md:w-1/3 text-center">
                        <Image
                            src="/ladyparampara.png"
                            alt="Traditional Cooking"
                            width={300}
                            height={300}
                            className="mx-auto"
                        />
                        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-800 mt-4">
                            પરંપરાનો સાચો સ્વાદ !!
                        </h2>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
