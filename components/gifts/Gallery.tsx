import React from "react";
import { motion } from "framer-motion";

interface VideoItem {
  url: string;
  caption: string;
  rotation: number;
}

interface GalleryProps {
  onBack: () => void;
}

/* ===============================
   🎬 LOCAL VIDEOS (public folder)
   =============================== */

const VIDEOS: VideoItem[] = [
  { url: "/videos/v1.mp4", caption: "Sweet Hello", rotation: -5 },
  { url: "/videos/v2.mp4", caption: "True Smile", rotation: 3 },
  { url: "/videos/v3.mp4", caption: "Perfect Day", rotation: -2 },
  { url: "/videos/v4.mp4", caption: "Only Us", rotation: 4 },
  { url: "/videos/v5.mp4", caption: "My Home", rotation: -3 },
  { url: "/videos/v6.mp4", caption: "Forever Us", rotation: 6 },
];

export default function Gallery({ onBack }: GalleryProps) {
  return (
    <div className="min-h-screen p-8 bg-rose-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={onBack}
            className="text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-2 transition-colors bg-white px-4 py-2 rounded-full shadow-sm"
          >
            ← Back
          </button>

          <h2 className="text-3xl md:text-4xl font-handwriting text-rose-600 text-center flex-1">
            Our Memories 🎥❤️
          </h2>

          <div className="w-20" />
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 p-4">
          {VIDEOS.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className="bg-white p-4 shadow-xl rounded-sm transform transition-transform duration-300"
              style={{ rotate: `${video.rotation}deg` }}
            >
              {/* 🎬 VIDEO */}
              <div className="aspect-square bg-black overflow-hidden mb-4 rounded-sm">
                <video
                  src={video.url}
                  controls
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover hover:brightness-110 transition-all"
                />
              </div>

              <p className="text-center font-handwriting text-2xl text-gray-700">
                {video.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
