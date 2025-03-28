import React from 'react'; // Add this import at the top of your file
import { Header } from '../../../components/layout/header';
import { Metadata } from 'next';






interface EventParams {
  id: string;
}

// Gunakan tipe PageProps dari Next.js
export type EventDetailPageProps = {
  params: EventParams;
  searchParams?: Record<string, string | string[] | undefined>;
}


// Ticket Tier Interface
interface TicketTier {
name: string;
price: string;
nftType: string;
experiencePoints: number;
}

// Dummy Event Detail Interface
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
id: 'blockchain-summit',
title: 'Global Blockchain Summit 2024',
date: 'Saturday, March 30, 2024',
location: 'Tech Conference Center, San Francisco, CA',
description: `Join the most anticipated blockchain event of the year! 
Featuring top industry leaders, innovative blockchain technologies, 
and networking opportunities with global experts.

Key Highlights:
- Keynote speeches from blockchain pioneers
- Latest trends in cryptocurrency and Web3
- Interactive workshops
- Startup pitch competitions`,
price: '$299',
backgroundImage: "url('/Asets/bannerWith1200.png')",
ticketTiers: [
  {
    name: 'Explorer',
    price: '$10 USDT',
    nftType: 'Regular NFT',
    experiencePoints: 260
  },
  {
    name: 'Wanderer',
    price: '$15 USDT',
    nftType: 'Rare NFT',
    experiencePoints: 350
  },
  {
    name: 'VIP',
    price: '$25 USDT',
    nftType: 'Exclusive NFT',
    experiencePoints: 500
  }
]
};





export async function generateMetadata({ 
  params 
}: { 
  params: EventParams 
}): Promise<Metadata> {
  return {
    title: `Event Detail - ${params.id}`,
    description: `Details for event ${params.id}`
  };
}

export async function generateStaticParams() {
  return [
    { id: 'blockchain-summit' },
    // Tambahkan ID event lainnya jika perlu
  ];
}


export default async function EventDetailPage({ 
  params, 
  searchParams 
}: EventDetailPageProps) {

  const { id } = params; // Gunakan id atau tambahkan underscore


  console.log('Params:', params);
  console.log('Search Params:', searchParams);


  if (!id) {
    return <div>No Event ID Provided</div>;
  }

  // Tambahkan penggunaan minimal searchParams untuk menghindari unused warning
  const fetchEventData = async (_id: string) => { // Tambahkan underscore
    // Dalam implementasi nyata, ini akan memanggil API atau database
    console.log(_id); // Gunakan agar tidak dianggap unused

    return dummyEvent;
  };

  const event = await fetchEventData(id);




return (
  <div className="min-h-screen bg-[#181818] text-white">
    <Header />
    
    <main className="container mx-auto px-4 py-8">
      
      <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-8">
        {/* Event Image */}
        <div 
          className="bg-gray-700 rounded-lg overflow-hidden h-96 bg-cover bg-center"
          style={{ 
            backgroundImage: event.backgroundImage 
          }}
        />
        
        {/* Event Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-white">{event.title}</h1>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center space-x-4 mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-blue-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              <span>{event.date}</span>
            </div>
            
            <div className="flex items-center space-x-4 mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-green-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
              <span>{event.location}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-purple-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <span>Ticket Price: {event.price}</span>
            </div>
          </div>


{/* Ticket Tiers Section */}
<div className="space-y-4">
  <h2 className="text-xl font-semibold mb-4">Ticket Tiers</h2>
  <div className="space-y-4">
    {event.ticketTiers.map((tier, index) => (
      <div 
        key={index} 
        className="bg-gray-800 rounded-lg p-4 border border-gray-600 transition-shadow hover:shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 mr-4">
            <h3 className="text-lg font-bold">{tier.name}</h3>
            <p className="text-xs text-gray-400 mb-2">
              Harga tiket sudah termasuk pajak pemerintah
            </p>
            <p className="text-xs text-gray-400 mb-2">Cant be refunded</p>
            <p className="text-xs text-gray-400 mb-2">{tier.nftType}</p>
            <span className="text-sm text-blue-400 cursor-pointer">Detail</span>
          </div>

          <div className="flex flex-col items-end">
            <div className="text-sm mb-1">
              <span className="text-gray-400">Total (1 Pax)</span>
            </div>
            <div className="text-blue-400 font-semibold text-lg mb-2">
              {tier.price}
            </div>
            <div className="text-green-400 text-sm mb-2">
              Get {tier.experiencePoints} Experience Points
            </div>
            <button className="bg-teal-500 hover:bg-teal-400 text-white py-2 px-4 rounded flex items-center transition duration-300">
              Pick Ticket
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
          
          <div className="prose prose-invert">
            <h2 className="text-xl font-semibold mb-4">Event Description</h2>
            <p className="text-gray-300">{event.description}</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="/checkout">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Rgister Event
            </button>

            </a>
     
          </div>
        </div>
      </div>
    </main>
  </div>
);
}