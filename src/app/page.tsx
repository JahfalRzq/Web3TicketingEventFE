import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      {/* Header Section */}
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
      <div className="relative flex min-h-screen items-center justify-center p-6 md:p-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Asets/bannerWith1200.png')" }}>
      </div>
      {/* Main Content */}
      <main className="flex flex-col items-center p-4">   
   {/* Search Section */}
   
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

    {/* Filters Group */}
    {/* <div className="flex flex-col sm:flex-row gap-4"> */}
      {/* Location Filter */}
      {/* <div className="flex items-center bg-[#4A4A4A] rounded-lg overflow-hidden">
        <select 
          className="bg-[#4A4A4A] text-white p-3 outline-none"
          defaultValue="all-locations"
        >
          <option value="all-locations">All Locations</option>
          <option value="jakarta">Jakarta</option>
          <option value="bandung">Bandung</option>
        </select>
      </div> */}

      {/* Date Filter */}
      {/* <div className="flex items-center bg-[#4A4A4A] rounded-lg overflow-hidden">
        <input 
          type="date" 
          className="bg-[#4A4A4A] text-white p-3 outline-none [&::-webkit-calendar-picker-indicator]:invert"
        />
      </div>
    </div> */}
  </div>
</section>


{/* Events Section */}
{/* Events Section */}
<section className="w-full mb-8">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl">Nearby Events</h2>
    <a href="#" className="text-blue-500 hover:underline">See All</a>
  </div>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {Array(4).fill(0).map((_, index) => (
      <div key={index} className="bg-gray-800 rounded-xl overflow-hidden group">
        {/* Image Section with Background */}
        <div className="relative h-48">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Asets/SuiWith1200.png')" }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          {/* Brand Logo */}
          <img
            src="/Asets/sui-logo.png"
            className="w-12 h-12 absolute top-2 right-2 z-10"
            alt="SUI Logo"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-4">
          {/* Badges */}
          <div className="flex gap-2">
            <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
              Free Entry
            </span>
            <span className="bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full">
              NFT
            </span>
          </div>

          {/* Event Details */}
          <h3 className="text-lg font-bold line-clamp-2">
            Blockchain Day With SUI & Tokocrypto
          </h3>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>Surabaya</span>
            </div>
            <span>21 Dec 24</span>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm transition-colors">
            Join Event
          </button>
        </div>
      </div>
    ))}
  </div>
</section>






        {/* Local Events Section */}
        <section className="w-full mb-8">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl">Nearby Events</h2>
    <a href="#" className="text-blue-500 hover:underline">See All</a>
  </div>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {Array(4).fill(0).map((_, index) => (
      <div key={index} className="bg-gray-800 rounded-xl overflow-hidden group">
        {/* Image Section with Background */}
        <div className="relative h-48">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Asets/cardWith1200.png')" }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          {/* Brand Logo */}
          <img
            src="/Asets/sui-logo.png"
            className="w-12 h-12 absolute top-2 right-2 z-10"
            alt="SUI Logo"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-4">
          {/* Badges */}
          <div className="flex gap-2">
            <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
              Free Entry
            </span>
            <span className="bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full">
              NFT
            </span>
          </div>

          {/* Event Details */}
          <h3 className="text-lg font-bold line-clamp-2">
            Blockchain Day With SUI & Tokocrypto
          </h3>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>Surabaya</span>
            </div>
            <span>21 Dec 24</span>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm transition-colors">
            Join Event
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* Leaderboard Section */}
<section className="w-full mb-8">
  {/* Banner Section */}

  <h2 className="text-2xl mb-4 text-white">Leaderboard Participant</h2>
  <div className="grid grid-cols-1 gap-3">
    {Array(7).fill(0).map((_, index) => (
      <div 
        key={index} 
        className="bg-[#2D2D2D] p-4 rounded-lg flex justify-between items-center"
      >
        {/* Participant Avatar */}
        <div className="flex items-center gap-3">
  <div 
    className="w-8 h-8"
    style={{ 
      backgroundImage: "url('/Asets/Frame31.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '50%'
    }}
  />
  <span className="text-white">Brittany</span>
</div>
        
        <div className="text-right">
          <p className="text-sm text-[#E5E5E5]">Champion · 250 Event NFT</p>
          <p className="text-sm text-[#808080]">2000 EXP</p>
        </div>
      </div>
    ))}
  </div>
</section>

        
      </main>

     {/* Footer Section */}
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
<div className="mt-4 md:mt-0  md:text-left w-full md:w-auto">
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

    </div>
  );
}

