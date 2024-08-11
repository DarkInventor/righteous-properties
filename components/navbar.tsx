"use client";
import React from 'react'
import { Phone, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white relative">
    <div className="flex justify-between w-full md:w-auto">
      <button
        className="text-gray-600 hover:text-green-600 md:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <X className="h-6 w-6" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
      <div className="flex justify-center w-full md:w-auto ml-0 lg:ml-10 mr-0 sm:mr-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={90}
          height={90}
          className="md:hidden"
        />
        <Image
          src="/logo.png"
          alt="Logo"
          width={124}
          height={124}
          className="hidden md:block"
        />
      </div>
    </div>
    {showMenu && (
      <div className="absolute top-full left-0 mt-2 bg-white shadow-md md:hidden">
        <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold text-sm custom-underline text-green-700 border-b">+971 43679444</a>
        <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold text-sm custom-underline border-b">BUY</a>
        <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold text-sm custom-underline border-b">RENT</a>
        <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold text-sm custom-underline border-b">OFF PLANS</a>
        <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold text-sm custom-underline border-b">MORE</a>
        <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold text-sm custom-underline border-b">CONTACT US</a>
      
      </div>
    )}
    <div className="hidden md:flex justify-center flex-grow items-center space-x-6">
      <a
        href="#"
        className="text-gray-600 hover:text-green-600 font-semibold text-sm custom-underline hover:underline hover:underline-offset-8 hover:decoration-green-600 hover:decoration-2"
      >
        BUY
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-green-600 font-semibold text-sm custom-underline hover:underline hover:underline-offset-8 hover:decoration-green-600 hover:decoration-2"
      >
        RENT
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-green-600 font-semibold text-sm custom-underline hover:underline hover:underline-offset-8 hover:decoration-green-600 hover:decoration-2"
      >
        OFF PLANS
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-green-600 font-semibold text-sm custom-underline hover:underline hover:underline-offset-8 hover:decoration-green-600 hover:decoration-2"
      >
        MORE
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-green-600 font-semibold text-sm custom-underline hover:underline hover:underline-offset-8 hover:decoration-green-600 hover:decoration-2"
      >
        CONTACT US
      </a>
    </div>
    <div className="flex justify-end items-center text-green-600 mr-0 lg:mr-10 hidden lg:flex"><Phone size={20} className="mr-2" /><span>+971 43679444</span></div>
  </nav>
  )
}

export default NavBar