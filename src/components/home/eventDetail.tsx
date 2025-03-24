// src/components/events/EventDetail.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

interface EventTicketTier {
  name: string;
  price: string | number;
  currency?: string;
  canRefund: boolean;
  nftType: 'Regular' | 'Rare' | 'Exclusive';
  experiencePoints: number;
}

interface EventOrganizer {
  name: string;
}

interface EventDetailProps {
  id: string;
  title: string;
  location: {
    name: string;
    city: string;
    region: string;
    country: string;
  };
  date: string;
  timeRange: string;
  timezone: string;
  ticketTiers: EventTicketTier[];
  organizers: EventOrganizer[];
  description: string;
  attendees: number;
  backgroundImage?: string;
  logoSrc?: string;
}

export function EventDetail({
  title,
  location,
  date,
  timeRange,
  timezone,
  ticketTiers,
  organizers,
  description,
  attendees,
  backgroundImage,
  logoSrc
}: EventDetailProps) {
  return (
    <div className="bg-[#2C2C2C] rounded-lg overflow-hidden shadow-md">
      {/* Event Header with Background Image (optional) */}
      {backgroundImage && (
        <div className="relative h-40">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          {/* Brand Logo */}
          {logoSrc && (
            <img
              src={logoSrc}
              className="w-12 h-12 absolute top-2 right-2 z-10"
              alt="Event Logo"
            />
          )}
        </div>
      )}

      {/* Event Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
        
        {/* Location */}
        <div className="flex items-start mb-2">
          <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p className="text-white">{location.name} {location.name.includes('↗') ? '' : '↗'}</p>
            <p className="text-gray-400 text-sm">
              {location.city}, {location.region}, {location.country}
            </p>
          </div>
        </div>
        
        {/* Date & Time */}
        <div className="flex items-start mb-4">
          <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div>
            <p className="text-white">{date}</p>
            <p className="text-gray-400 text-sm">{timeRange} {timezone}</p>
          </div>
        </div>
        
        <hr className="border-gray-700 my-4" />
        
        {/* Ticket Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2">Ticket Tier</h3>
          
          {ticketTiers.map((tier, index) => (
            <div key={index} className="bg-[#3A3A3A] rounded p-3 mb-3">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-white font-medium">{tier.name}</h4>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Refund Status */}
              <div className="flex items-center mb-1 text-sm text-gray-300">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {tier.canRefund ? 'Can be refund' : 'Cannot be refunded'}
              </div>
              
              {/* NFT Type */}
              <div className="flex items-center mb-3 text-sm text-gray-300">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                {tier.nftType} NFT
              </div>
              
              <a href="#" className="text-[#00B4D8] text-sm hover:underline">Detail</a>
              
              <div className="flex justify-between items-center mt-3">
                <div>
                  <p className="text-gray-400 text-xs">Total (1 Pax)</p>
                  <p className="text-white font-medium">
                    {typeof tier.price === 'string' ? tier.price : `${tier.price} ${tier.currency || 'USDT'}`}
                  </p>
                  <p className="text-gray-400 text-xs">Get {tier.experiencePoints} Experience Points</p>
                </div>
                <Button 
                  variant="default" 
                  size="sm"
                  className="bg-[#00B4D8] hover:bg-[#0096c7]"
                >
                  Pick Ticket
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <hr className="border-gray-700 my-4" />
        
        {/* Organizers */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2">Held by</h3>
          {organizers.map((organizer, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="w-5 h-5 rounded-full bg-gray-400 mr-2"></div>
              <p className="text-white">{organizer.name}</p>
            </div>
          ))}
        </div>
        
        <hr className="border-gray-700 my-4" />
        
        {/* Description */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
          <p className="text-gray-300 line-clamp-3">{description}</p>
          <button className="text-[#00B4D8] mt-2 hover:underline">Read More</button>
        </div>
        
        <hr className="border-gray-700 my-4" />
        
        {/* Attendees */}
        <div className="mb-4">
          <p className="text-lg font-semibold text-white mb-2">{attendees} people are going</p>
          <div className="flex -space-x-2 overflow-hidden mb-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#2C2C2C] bg-gray-500"></div>
            ))}
          </div>
          <p className="text-sm text-gray-300">Be one of {attendees} attendees with Akbar and Vayan!</p>
        </div>
        
        {/* Register Button */}
        <Button 
          variant="default" 
          size="lg"
          className="w-full bg-[#00B4D8] hover:bg-[#0096c7] py-4 rounded-md"
        >
          Register
        </Button>
      </div>
    </div>
  );
}