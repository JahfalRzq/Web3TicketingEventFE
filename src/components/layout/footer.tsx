// src/components/layout/Footer.tsx
import React from 'react';

export function Footer() {
  return (
    <>
      <footer className="flex flex-col md:flex-row justify-between items-start p-6 bg-gray-900 text-white gap-8">
        {/* Social Links Section */}
        <div className="flex flex-col md:flex-row gap-8 flex-1">
          <div>
            <p className="font-bold mb-3">Follow us on</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <div className="flex flex-col">
                <a href="#" className="hover:text-gray-300">Instagram</a>
                <a href="#" className="hover:text-gray-300">Twitter</a>
                <a href="#" className="hover:text-gray-300">Discord</a>
              </div>
              <div className="flex flex-col">
                <a href="#" className="hover:text-gray-300">Youtube</a>
                <a href="#" className="hover:text-gray-300">Facebook</a>
                <a href="#" className="hover:text-gray-300">Tiktok</a>
              </div>
            </div>
          </div>

          {/* Documentation Section - Centered */}
          <div className="mt-4 md:mt-0 md:text-left w-full md:w-auto">
            <p className="font-bold mb-3">Documentation</p>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                <div className="flex flex-col">
                  <a href="#" className="hover:text-gray-300">Instagram</a>
                  <a href="#" className="hover:text-gray-300">Twitter</a>
                  <a href="#" className="hover:text-gray-300">Discord</a>
                </div>
                <div className="flex flex-col">
                  <a href="#" className="hover:text-gray-300">Youtube</a>
                  <a href="#" className="hover:text-gray-300">Facebook</a>
                  <a href="#" className="hover:text-gray-300">Tiktok</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Copyright Section */}
      <div className="md:text-center mt-4 md:mt-0" style={{ backgroundImage: "url('/Asets/footer.png')" }}>
        <p className="text-gray-400">myt:us 2025</p>
      </div>
    </>
  );
}