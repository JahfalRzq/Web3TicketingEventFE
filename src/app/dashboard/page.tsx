// src/app/page.tsx
import React from "react";
import { Footer } from "../../components/layout/footer";
import { SearchSection } from "../../components/home/searchSection";
import { EventsSection } from "../../components/home/eventsSection";
import { LeaderboardSection } from "../../components/home/leaderboardSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
        {/* Search Section */}
        <SearchSection />
      
      <div className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-[50px] h-[50px] rounded-full bg-cover bg-center"
                style={{ backgroundImage: "url('/Asets/bannerWith1200.png')" }}
              />
              <div>
                <h2 className="text-lg font-semibold">Hi, Oxdxzy</h2>
                <p className="text-sm text-gray-400">Newbie Rank</p>
                <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: '70%' }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  So close! Just 250 XP to level
                </p>
              </div>
            </div>
            <button className="text-white">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </button>
          </div>


           {/* Your Events Section */}
    <section className="px-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Your Event</h3>
        <button className="text-sm text-blue-500">See All (7)</button>
      </div>
      <div className="overflow-x-auto">
        <div className="flex space-x-3">
          {[1,2,3].map((_, index) => (
            <div 
              key={index} 
              className="bg-gray-700 rounded-lg p-3 min-w-[250px]"
            >
              <h4 className="font-semibold">
                Blockchain Day With SUI & Tokocrypto
              </h4>
              <p className="text-sm text-gray-400">
                @ Surabaya 21 Dec 24
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
      
      {/* Main Content */}
      <main className="flex flex-col items-center p-4">
 
        
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