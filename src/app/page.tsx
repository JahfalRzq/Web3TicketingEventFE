import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      {/* Header Section */}
      <header className="flex justify-between items-center p-4 bg-gray-900">
        <h1 className="text-3xl font-bold">Cryptocurrency Events</h1>
        <div className="flex space-x-4">
          <a href="/login" className="hover:underline">Login</a>
          <a href="/register" className="hover:underline">Register</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center p-4">
        {/* Search Bar */}
        <div className="flex items-center w-full mb-4">
          <input
            type="text"
            placeholder="Search an Events"
            className="flex-1 p-2 rounded-l-md"
          />
          <button className="bg-blue-500 text-white p-2 rounded-r-md">Search</button>
        </div>

        {/* Events Section */}
        <section className="w-full mb-8">
          <h2 className="text-2xl mb-4">Nearby Events</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {/* Event Card */}
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <p className="text-lg font-semibold">Blockchain Day With SUI & Tokocrypto</p>
                <span className="text-sm text-gray-400">Free Entry | NFT</span>
                <p className="mt-2">Sunday 21 Dec 24</p>
              </div>
            ))}
          </div>
          <a href="#" className="text-blue-500 hover:underline">See All</a>
        </section>

        {/* Local Events Section */}
        <section className="w-full mb-8">
          <h2 className="text-2xl mb-4">Local Events</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {/* Event Card */}
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <p className="text-lg font-semibold">Blockchain Day With SUI & Tokocrypto</p>
                <span className="text-sm text-gray-400">Free Entry | NFT</span>
                <p className="mt-2">Sunday 21 Dec 24</p>
              </div>
            ))}
          </div>
          <a href="#" className="text-blue-500 hover:underline">See All</a>
        </section>

        {/* Leaderboard Section */}
        <section className="w-full mb-8">
          <h2 className="text-2xl mb-4">Leaderboard Participant</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {Array(6).fill(0).map((_, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
                <p>Brittany</p>
                <span className="text-sm text-gray-400">Champion | 2000 EXP</span>
              </div>
            ))}
          </div>
        </section>
        
      </main>

      {/* Footer Section */}
      <footer className="flex justify-between items-center p-4 bg-gray-900">
        <div>
          <p>Follow us on</p>
          <p>2000 EXP</p>
        </div>
        <div>
          <p>Documentation</p>
          <p>2000 EXP</p>
        </div>
      </footer>
    </div>
  );
}