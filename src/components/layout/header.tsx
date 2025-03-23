// src/components/layout/Header.tsx
import React from 'react';

export function Header() {
  return (
    <header className="flex flex-wrap md:flex-nowrap justify-between items-center p-4 bg-gray-900 gap-4">
      <h1 className="text-xl md:text-3xl font-bold min-w-[200px] truncate">
        Cryptocurrency Events
      </h1>
      
      <div className="flex flex-1 justify-end space-x-2 md:space-x-4">
        <a
          href="/login"
          className="px-4 py-1 md:px-6 md:py-2 bg-[#00B4D8] text-white rounded-full 
                   font-medium uppercase text-xs md:text-sm 
                   shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:bg-[#0096c7] 
                   hover:-translate-y-[1px] transition-all duration-200 ease-in"
        >
          Login
        </a>
        <a
          href="/register"
          className="px-4 py-1 md:px-6 md:py-2 bg-[#00B4D8] text-white rounded-full 
                   font-medium uppercase text-xs md:text-sm 
                   shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:bg-[#0096c7] 
                   hover:-translate-y-[1px] transition-all duration-200 ease-in"
        >
          Register
        </a>
      </div>
    </header>
  );
}