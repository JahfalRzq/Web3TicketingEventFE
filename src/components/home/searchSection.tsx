// src/components/home/SearchSection.tsx
import React from 'react';

export function SearchSection() {
  return (
    <section className="mb-6">
      <div className="flex flex-col md:flex-row gap-4 bg-[#2C2C2C] rounded-lg p-4">
        {/* Search Input Group */}
        <div className="flex flex-1 items-center bg-[#4A4A4A] rounded-lg overflow-hidden">
          <input 
            type="text" 
            placeholder="Search Events" 
            className="flex-1 bg-transparent p-3 outline-none text-white placeholder-gray-300"
          />
          <button className="bg-[#00B4D8] px-6 py-3 text-white font-medium hover:bg-[#0096c7] transition-colors">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}