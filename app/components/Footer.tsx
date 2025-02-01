import React from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-10">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* Logo or Title */}
        <h2 className="text-2xl font-bold text-white">AI Content Generator</h2>
        <p className="text-sm text-zinc-500 mt-2">
          AI-powered tools to simplify your content creation.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-5 text-zinc-400">
          <Link href="#features" className="hover:text-white">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-white">
            Pricing
          </Link>
          
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-6">
          <a href="https://github.com/ganeshkondaka" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl text-zinc-400 hover:text-white" />
          </a>
          <a href="https://x.com/ganesh_kondaka" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl text-zinc-400 hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/kondaka-ganesh-b402bb252/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl text-zinc-400 hover:text-white" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-zinc-500 text-xs mt-6">
            <p className="mb-3">made with ♥️ by Ganesh</p>
          © {new Date().getFullYear()} AI Content Generator. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
