import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SquareWidget from './SquareWidget';

function IndividualServices() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    
    const [showBookingWidget, setShowBookingWidget] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    
    const services = [
        { 
            name: 'High Quality Photos', 
            price: [
                '0 - 1,999 sq ft : $250',
                '2,000 - 2,999 sq ft : $300',
                '3,000 - 3,999 sq ft : $350',
                '4,000 - 4,999 sq ft : $400'
            ],
            descriptions: ['High-quality interior and exterior shots', 'Next-day turnaround (by noon)','Consistent high-quality HDR'] 
        },
        { 
            name: '3D Virtual Tour : Matterport',
            price: [
                '0 - 1,999 sq ft : $250',
                '2,000 - 2,999 sq ft : $350',
                '3,000 - 3,999 sq ft : $450',
                '4,000 - 4,999 sq ft : $550'
            ], 
            descriptions: ['Interactive 4K 3D Virtual Tour by Matterport'] },
        { 
            name: '4K Cinematic Video', 
            price: [
                '0 - 1,999 sq ft : $450',
                '2,000 - 2,999 sq ft : $525',
                '3,000 - 3,999 sq ft : $600',
                '4,000 - 4,999 sq ft : $675'
            ],  
            descriptions: ['Beautiful smooth movements, capitalize on video marketing'] 
        },
        { 
            name: 'Drone / Aerial Services', 
            price: [
                'Photos :',
                ' 5 - 8 : $200',
                '10 - 12 : $250',
                'Videos',
                '20 - 30 sec : $250',
                '1 min : $350'
            ], 
            descriptions: ['Aerial Photos (5-10) & 4K Video'] 
        },
        { 
            name: '2D Floor Plans', 
            price: 'Starting at $70', 
            descriptions: ['Approximate measurements for illustrative purposes only', '2-3 business days turnaround', 'Delivered as PDF & PNG']
        },
        { 
            name: 'Twilight Services', 
            price: [
                '0 - 3,000 sq ft : $200',
                '3,000 - 5,000 sq ft : $300',
            ], 
            descriptions: ['Differentiate your listings with Twilight Photos, Video, and Drone.', 'Bundle Twilight Services for Discount']
        },
    ];

    const renderServiceCard = (service, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg flex flex-col h-full transform transition duration-300 hover:scale-105 hover:shadow-2xl dark:hover:shadow-gray-700 border border-gray-200 dark:border-gray-700"
        >
            <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">{service.name}</h3>
                {Array.isArray(service.price) ? (
                    <ul className="mb-4 text-gray-700 dark:text-gray-300 text-sm space-y-1 text-center">
                        {service.price.map((price, i) => (
                            <li key={i} className="font-medium">{price}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="font-medium mb-4 text-gray-700 dark:text-gray-300 text-sm text-center">{service.price}</p>
                )}
                <ul className="mb-6 text-gray-600 dark:text-gray-400 space-y-2">
                    {service.descriptions.map((description, i) => (
                        <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>{description}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <button
                onClick={() => {
                    setSelectedService(service);
                    setShowBookingWidget(true);
                }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-xl text-white py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition duration-300 mt-auto font-semibold shadow-md hover:shadow-lg"
            >
                Book Now
            </button>
        </motion.div>
    );

    const closeBookingWidget = () => {
        setShowBookingWidget(false);
        setSelectedService(null);
    };

    return (
        <section id="services" ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Individual Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => renderServiceCard(service, index))}
                </div>
            </div>
            {showBookingWidget && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg w-full max-w-2xl max-h-full overflow-auto">
                        <button 
                            onClick={closeBookingWidget}
                            className="float-right text-2xl text-gray-600 dark:text-gray-300"
                        >
                            &times;
                        </button>
                        <SquareWidget onClose={closeBookingWidget} />
                    </div>
                </div>
            )}
        </section>
    );
}

export default IndividualServices;