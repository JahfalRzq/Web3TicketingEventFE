import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-900 text-white">
      {/* Banner Image - reduced height */}
      <div className="w-full h-52 md:h-64 lg:h-72 relative">
        <Image
          src="/Asets/authBanner.png"
          alt="Fantasy Gate Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* Time overlay */}
        <div className="absolute top-10 left-6 text-white text-lg font-semibold">
          9:41
        </div>
        {/* Network icons overlay */}
        <div className="absolute top-10 right-6 flex space-x-2">
          <div className="w-5 h-5">
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M7 19h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1zm4 0h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm4 0h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1z" />
            </svg>
          </div>
          <div className="w-5 h-5">
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" fillOpacity="0" />
              <path d="M5.64 18.36A9 9 0 0 0 12 21v-3a6 6 0 0 1-4.24-1.76l-2.12 2.12z" />
              <path d="M16.24 16.24A6 6 0 0 1 12 18v3a9 9 0 0 0 6.36-2.64l-2.12-2.12z" />
              <path d="M19.07 4.93A9 9 0 0 0 12 3v3a6 6 0 0 1 4.24 1.76l2.83-2.83z" />
              <path d="M7.76 7.76A6 6 0 0 1 12 6V3a9 9 0 0 0-6.36 2.64l2.12 2.12z" />
            </svg>
          </div>
          <div className="w-5 h-5">
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M18 9h-2V7h2v2zm-8 8h2v-2h-2v2zm-8-8h2V7H2v2zm12 8h2v-2h-2v2zm4-8h2V7h-2v2zM6 9h2V7H6v2zm8 0h2V7h-2v2zm-4 8h2v-2h-2v2zm-4 0h2v-2H6v2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Form Container - increased negative margin to reduce the gap */}
      <div className="w-full max-w-md px-6 -mt-24 relative z-10">
        {/* Welcome Text - reduced margin */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-1">Welcome!</h1>
          <p className="text-lg text-gray-300">Get ready for amazing experiences.</p>
        </div>

        {/* Form Fields - reduced spacing */}
        <form className="space-y-3">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                id="username"
                placeholder="Input Username"
                className="w-full bg-gray-100 text-gray-800 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                placeholder="Input your Email"
                className="w-full bg-gray-100 text-gray-800 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Passwords
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Input Password"
                className="w-full bg-gray-100 text-gray-800 pl-10 pr-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-400" />
                ) : (
                  <FaEye className="text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Register Button - reduced top margin */}
          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors mt-4"
          >
            Register
          </button>
        </form>

        {/* Divider - reduced vertical margin */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="px-4 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        {/* Social Login Options - reduced spacing */}
        <div className="space-y-2">
          <button className="w-full py-3 border border-cyan-500 text-cyan-500 rounded-lg font-medium hover:bg-gray-800 transition-colors flex justify-center items-center">
            Google
          </button>
          <button className="w-full py-3 border border-cyan-500 text-cyan-500 rounded-lg font-medium hover:bg-gray-800 transition-colors flex justify-center items-center">
            Wallet Connect
          </button>
        </div>

        {/* Login Link - reduced top margin */}
        <div className="text-center mt-4 mb-6">
          <p className="text-gray-400">
            Already Have an Account?{" "}
            <Link href="/login" className="text-cyan-400 hover:underline">
              Login Here!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;