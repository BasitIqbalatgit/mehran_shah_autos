import { useState, useEffect } from 'react';

export default function Map() {
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimated(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Static Map Background */}
      <div className="absolute inset-0 bg-gray-200 overflow-hidden">
        {/* Roads */}
        <div className="absolute top-1/2 left-0 right-0 h-8 bg-gray-700 transform -translate-y-1/2"></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-8 bg-gray-700 transform -translate-x-1/2"></div>
        
        {/* Buildings */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-900 rounded-sm"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-12 bg-gray-800 rounded-sm"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-16 bg-gray-600 rounded-sm"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-14 bg-gray-700 rounded-sm"></div>
        
        {/* Mehran Shah Autos Building (Highlighted) */}
        <div className="absolute top-1/2 left-1/2 w-24 h-20 bg-red-600 rounded-sm transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Animated Location Pin */}
      <div 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 ${isAnimated ? '-translate-y-[60%]' : '-translate-y-[40%]'} transition-transform duration-1000 ease-in-out z-10`}
        style={{ transition: 'transform 1s ease-in-out' }}
      >
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 bg-red-600 rounded-full"></div>
          <div className="w-3 h-12 bg-red-600 rounded-b-lg -mt-3"></div>
          
          {/* Shadow */}
          <div className="w-8 h-2 bg-black opacity-25 rounded-full mt-1"></div>
        </div>
      </div>
    </div>
  );
}
