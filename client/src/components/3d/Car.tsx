import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

type CarProps = {
  position?: [number, number, number];
  color?: string;
  rotationDirection?: 'left' | 'right' | 'none';
};

// Simplified car component with image instead of 3D model
export default function Car({ 
  color = '#d6c8a6',
  rotationDirection = 'none'
}: CarProps) {
  const [rotation, setRotation] = useState(0);
  const [isFloating, setIsFloating] = useState(false);
  const isMobile = useIsMobile();
  
  // Handle rotation direction changes
  useEffect(() => {
    if (rotationDirection === 'left') {
      setRotation(prev => prev - 30);
    } else if (rotationDirection === 'right') {
      setRotation(prev => prev + 30);
    }
  }, [rotationDirection]);
  
  // Floating animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFloating(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div 
        className={`transition-transform duration-500 ${isFloating ? 'translate-y-[-10px]' : 'translate-y-0'}`}
        style={{ 
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 300ms ease-in-out'
        }}
      >
        <div 
          className="w-64 h-32 rounded-lg relative"
          style={{ backgroundColor: color }}
        >
          {/* Car Body */}
          <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: color }}></div>
          
          {/* Windows */}
          <div className="absolute w-32 h-16 bg-black bg-opacity-70 rounded-lg left-1/2 top-0 -translate-x-1/2 -translate-y-4"></div>
          
          {/* Front Lights */}
          <div className="absolute w-8 h-4 bg-yellow-300 rounded-full left-2 bottom-2"></div>
          <div className="absolute w-8 h-4 bg-yellow-300 rounded-full right-2 bottom-2"></div>
          
          {/* Wheels */}
          <div className="absolute w-12 h-12 bg-gray-900 rounded-full -left-2 -bottom-4 border-4 border-gray-300"></div>
          <div className="absolute w-12 h-12 bg-gray-900 rounded-full -right-2 -bottom-4 border-4 border-gray-300"></div>
          <div className="absolute w-12 h-12 bg-gray-900 rounded-full left-10 -bottom-4 border-4 border-gray-300"></div>
          <div className="absolute w-12 h-12 bg-gray-900 rounded-full right-10 -bottom-4 border-4 border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
