"use client"

// components/NavBar.tsx
import Link from 'next/link';
import { useState } from 'react';
import { PiBeerBottleFill } from 'react-icons/pi';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-950 text-white shadow-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className='flex items-center'>
            <PiBeerBottleFill className='inline mx-2 text-xl' />
              <p className="text-md font-bold inline">Barbasol</p>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/features">
              <p className="hover:underline">Features</p>
            </Link>
            <Link href="/pricing">
              <p className="hover:underline">Pricing</p>
            </Link>
            <Link href="/contact">
              <p className="hover:underline">Contact</p>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-zinc-900">
          <Link href="/features">
            <p className="block px-4 py-2 hover:bg-zinc-800">Features</p>
          </Link>
          <Link href="/pricing">
            <p className="block px-4 py-2 hover:bg-zinc-800">Pricing</p>
          </Link>
          <Link href="/contact">
            <p className="block px-4 py-2 hover:bg-zinc-800">Contact</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
