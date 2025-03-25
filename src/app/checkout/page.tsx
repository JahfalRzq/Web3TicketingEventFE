import React from 'react';

// Ticket Tier Interface
interface TicketTier {
name: string;
price: string;
nftType: string;
experiencePoints: number;
}

// Event Detail Interface
interface EventDetailData {
id: string;
title: string;
date: string;
location: string;
description: string;
price: string;
backgroundImage: string;
ticketTiers: TicketTier[];
}

// Dummy Event Data
const dummyEvent: EventDetailData = {
id: 'blockchain-day-sui',
title: 'Blockchain Day With SUI & Tokocrypto',
date: 'Saturday, February 8 2024 12.00 - 16.00 UTC+7 (WIB)',
location: 'Bento Kopi Lontar 7, Surabaya, East Java, Indonesia',
description: 'Blockchain event exploring SUI and Tokocrypto technologies',
price: 'Free Entry',
backgroundImage: '/Asets/bannerWith1200.png',
ticketTiers: [
  {
    name: 'Free Entry',
    price: 'Free',
    nftType: 'General Admission',
    experiencePoints: 100
  }
]
};

export default function CheckoutPage({ 
params 
}: { 
params: { id: string } 
}) {
const event = dummyEvent;

return (
  <div className="min-h-screen bg-[#181818] text-white">
    <div className="container mx-auto px-4 py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <h1 className="text-lg font-semibold">Ticket Detail</h1>
        <div className="w-6"></div> {/* Placeholder to center the title */}
      </div>

           {/* Remaining Time */}
           <div className="bg-gray-800 rounded-lg p-4 mb-4 text-center">
        <p className="text-sm text-gray-400">Remaining Time</p>
        <p className="text-lg font-bold">05:00</p>
      </div>

      {/* Event Details and Ticket Tier Combined */}
      <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
        {/* Event Image */}
        <div 
          className="w-full h-48 bg-cover bg-center"
          style={{ backgroundImage: "url('/Asets/bannerWith1200.png')" }}
        />

        {/* Event Details Section */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{event.title}</h2>
          <div className="text-sm text-gray-400">
            <p>{event.location}</p>
            <p>{event.date}</p>
          </div>

          {/* Ticket Tier Section */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Ticket Type</h3>
            {event.ticketTiers.map((tier, index) => (
              <div 
                key={index} 
                className="bg-gray-700 rounded-lg p-4 mb-2 shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold">{tier.name}</h4>
                    <p className="text-sm text-gray-400">{tier.nftType}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{tier.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

 

      {/* Checkout Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#181818] shadow-top">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  </div>
);
}