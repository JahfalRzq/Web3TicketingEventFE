// src/components/home/EventCard.tsx
import React from 'react';

interface EventCardProps {
  backgroundImage?: string;
  logoSrc?: string;
  title?: string;
  location?: string;
  date?: string;
  tags?: string[];
}

export function EventCard({ 
  backgroundImage = "/Asets/SuiWith1200.png", 
  logoSrc = "/Asets/sui-logo.png", 
  title = "Blockchain Day With SUI & Tokocrypto",
  location = "Surabaya",
  date = "21 Dec 24",
  tags = ["Free Entry", "NFT"]
}: EventCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden group">
      {/* Image Section with Background */}
      <div className="relative h-48">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Brand Logo */}
        <img
          src={logoSrc}
          className="w-12 h-12 absolute top-2 right-2 z-10"
          alt="Event Logo"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-4">
        {/* Badges */}
        <div className="flex gap-2">
          {tags.includes("Free Entry") && (
            <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
              Free Entry
            </span>
          )}
          {tags.includes("NFT") && (
            <span className="bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full">
              NFT
            </span>
          )}
        </div>

        {/* Event Details */}
        <h3 className="text-lg font-bold line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>{location}</span>
          </div>
          <span>{date}</span>
        </div>
        <a href="/event-by-id"> {/* Change to anchor tag for navigation */}

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm transition-colors">
          Join Event
        </button>
        </a>

      </div>
    </div>
  );
}