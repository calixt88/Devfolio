import React from 'react';

export const Experience = () => {
    const timelineData = [
        {
            year: '2021 - 2024',
            title: 'B.S. Software Engineering',
            location: 'Milwaukee School of Engineering',
            description: '',
            image: '/images/msoe.png', 
        },
        {
            year: '2021 - 2023',
            title: 'Software Engineering Intern',
            location: 'Miller Electric Mfg.',
            description: '',
            image: '/images/miller.jpeg', 
        },
        {
            year: '2024 - Present',
            title: 'Software Developer',
            location: 'Miller Electric Mfg.',
            description: '',
            image: '/images/miller.jpeg', // Replace with the actual image path
        },
    ];

    return (
        <div className="bg-transparent py-16 mt-32">
            <h2 className="text-4xl font-bold mb-10 text-left">Experience</h2>
            <div className="relative border-l border-gray-200 dark:border-gray-700 mx-8">
                {timelineData.map((item, index) => (
                    <div key={index} className="mb-8 ml-8 flex items-start">
                        <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 border border-white"></div>
                        
                        {/* Image Section */}
                        <img 
                            src={item.image} 
                            alt={`${item.title} logo`} 
                            className="w-12 h-12 mr-6 shadow-lg object-contain"
                        />
                        <div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {item.year}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {item.location}
                            </p>
                            <p className="mt-2 text-gray-700 dark:text-gray-400">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
