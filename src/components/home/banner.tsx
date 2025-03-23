// src/components/home/Banner.tsx
import React from 'react';

export function Banner() {
  return (
    <div 
      className="relative flex min-h-screen items-center justify-center p-6 md:p-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Asets/bannerWith1200.png')" }}
    />
  );
}