import React from 'react';
import { motion } from 'framer-motion';
import { Photo } from '../../types';

interface GalleryProps {
  onBack: () => void;
}

// Using picsum with specific seeds to get consistent "lifestyle/couple-ish" vibe images
// In a real app, these would be real user photos.
const PHOTOS: Photo[] = [
  { url: "https://picsum.photos/seed/love1/300/300", caption: "Sweet Hello", rotation: -5 },
  { url: "https://picsum.photos/seed/love2/300/300", caption: "True Smile", rotation: 3 },
  { url: "https://picsum.photos/seed/love3/300/300", caption: "Perfect Day", rotation: -2 },
  { url: "https://picsum.photos/seed/love4/300/300", caption: "Only Us", rotation: 4 },
  { url: "https://picsum.photos/seed/love5/300/300", caption: "My Home", rotation: -3 },
  { url: "https://picsum.photos/seed/love6/300/300", caption: "Forever Us", rotation: 6 },
];

export default function Gallery({ onBack }: GalleryProps) {
  return (
    <div className="min-h-screen p-8 bg-rose-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
           <button 
            onClick={onBack}
            className="text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-2 transition-colors bg-white px-4 py-2 rounded-full shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
          <h2 className="text-3xl md:text-4xl font-handwriting text-rose-600 text-center flex-1">
            Look at this cutie 🥰
          </h2>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 p-4">
          {PHOTOS.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className="bg-white p-4 shadow-xl rounded-sm transform transition-transform duration-300"
              style={{ rotate: `${photo.rotation}deg` }}
            >
              <div className="aspect-square bg-gray-100 overflow-hidden mb-4 rounded-sm">
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover filter hover:brightness-110 transition-all"
                />
              </div>
              <p className="text-center font-handwriting text-2xl text-gray-700">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}