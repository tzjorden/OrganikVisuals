import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SquareWidget from './SquareWidget';

function Plans() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    
    const [showBookingWidget, setShowBookingWidget] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        { 
            name: '0-1999 sq ft', 
            price: '$950', 
            features: [
                'Photos: Interior, exterior, and detail shots',
                '3D Tour: 4K 3D Virtual Tour by Matterport',
                'Video: 1-2 Minute Cinematic Video Tour',
                'Drone: Aerial Photos (5-10) & 4K Video',
                '2D Floor Plan: Approximate measurements for illustrative purposes only',
            ]
        },
        { 
            name: '2000-2999 sq ft', 
            price: '$1,100', 
            features: [
                'Photos: Interior, exterior, and detail shots',
                '3D Tour: 4K 3D Virtual Tour by Matterport',
                'Video: 1-2 Minute Cinematic Video Tour',
                'Drone: Aerial Photos (5-10) & 4K Video',
                '2D Floor Plan: Approximate measurements for illustrative purposes only',
            ]
        },
        { 
            name: '3000-3999 sq ft', 
            price: '$1,250', 
            features: [
                'Photos: Interior, exterior, and detail shots',
                '3D Tour: 4K 3D Virtual Tour by Matterport',
                'Video: 1-2 Minute Cinematic Video Tour',
                'Drone: Aerial Photos (5-10) & 4K Video',
                '2D Floor Plan: Approximate measurements for illustrative purposes only',
            ]
        },
        { 
            name: '4000-4999 sq ft', 
            price: '$1,400', 
            features: [
                'Photos: Interior, exterior, and detail shots',
                '3D Tour: 4K 3D Virtual Tour by Matterport',
                'Video: 1-2 Minute Cinematic Video Tour',
                'Drone: Aerial Photos (5-10) & 4K Video',
                '2D Floor Plan: Approximate measurements for illustrative purposes only',
            ]
        },
    ];

    const renderPlanCard = (plan, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full transform transition duration-300 hover:scale-110 hover:shadow-2xl dark:hover:shadow-gray-700"
        >
            <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center">{plan.name}</h3>
                <p className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center">{plan.price}</p>
                <ul className="mb-6 text-gray-600 dark:text-gray-400 space-y-2">
                    {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <button
                onClick={() => {
                    setSelectedPlan(plan);
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
        setSelectedPlan(null);
    };

    return (
        <section id="plans" ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => renderPlanCard(plan, index))}
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

export default Plans;