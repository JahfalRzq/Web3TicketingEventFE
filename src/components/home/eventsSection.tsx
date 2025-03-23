// src/components/home/EventsSection.tsx
import React from 'react';
import { EventCard } from './eventCard';

interface EventsSectionProps {
  title?: string;
  backgroundImage?: string;
}

export function EventsSection({ 
  title = "Nearby Events", 
  backgroundImage 
}: EventsSectionProps) {
  // Sample data - in a real app, you would pass this as props or fetch from an API
  const events = Array(4).fill({
    backgroundImage: backgroundImage || "/Asets/SuiWith1200.png",
    logoSrc: "/Asets/sui-logo.png",
    title: "Blockchain Day With SUI & Tokocrypto",
    location: "Surabaya",
    date: "21 Dec 24",
    tags: ["Free Entry", "NFT"]
  });

  return (
    <section className="w-full mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl">{title}</h2>
        <a href="#" className="text-blue-500 hover:underline">See All</a>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {events.map((event, index) => (
          <EventCard 
            key={index} 
            backgroundImage={event.backgroundImage}
            logoSrc={event.logoSrc}
            title={event.title}
            location={event.location}
            date={event.date}
            tags={event.tags}
          />
        ))}
      </div>
    </section>
  );
}