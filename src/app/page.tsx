// src/app/page.tsx
import React from "react";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { Banner } from "../components/home/banner";
import { SearchSection } from "../components/home/searchSection";
import { EventsSection } from "../components/home/eventsSection";
import { LeaderboardSection } from "../components/home/leaderboardSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      {/* Header */}
      <Header />
      
      {/* Banner */}
      <Banner />
      
      {/* Main Content */}
      <main className="flex flex-col items-center p-4">
        {/* Search Section */}
        <SearchSection />
        
        {/* Events Sections */}
        <EventsSection title="Nearby Events" />
        <EventsSection 
          title="Nearby Events" 
          backgroundImage="/Asets/cardWith1200.png" 
        />
        
        {/* Leaderboard Section */}
        <LeaderboardSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}