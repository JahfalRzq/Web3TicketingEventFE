import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { SiWalletconnect } from "react-icons/si";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../../app/styles/register.css';

const schema = yup.object({
  username: yup.string().required('Username is required').min(5, 'Username must be at least 5 characters'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
}).required();


const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      // Simulate API call (replace with your actual API call)
      console.log("Form submitted:", data);
      // After successful submission, reset the form
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors appropriately (e.g., display an error message)
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-gray-900 text-white overflow-hidden"> {/* Removed auth-page class */}
      <div className="auth-background w-full"> {/* Added w-full */}
        <Image
          src="/Asets/authBanner.png"
          alt="Fantasy Gate Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="auth-container max-w-2xl mx-auto p-8 mt-16 bg-gray-800/70 rounded-lg shadow-lg"> {/* Modified container */}
        <h1 className="text-3xl font-bold mb-4 text-white">Welcome!</h1>
        <p className="text-lg mb-6 text-gray-300">Begin your magical journey</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-300 mb-1">Username</label>
            <input
              {...register('username')}
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50"
            />
            {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
            <input
              {...register('email')}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-300 mb-1">Password</label>
            <div className="relative">
              <input
                {...register('password')}
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>
          </div>

          <button type="submit" className="w-full py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600">
            Create Account
          </button>
        </form>

        {/* Social Login and Login Link (Simplified) */}
        <div className="mt-6 text-center">
          <p className="text-gray-400">or continue with</p>
          <div className="flex space-x-4 mt-2">
            <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-6 py-2">
              <FaGoogle className="text-red-500 mr-2" /> Google
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-6 py-2">
              <SiWalletconnect className="text-blue-500 mr-2" /> Wallet Connect
            </button>
          </div>
          <p className="mt-4 text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-cyan-400 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
