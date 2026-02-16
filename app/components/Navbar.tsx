'use client';

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [, setActiveDropdown] = useState<string | null>(null); // Fixed unused var

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/98 backdrop-blur-md border-b border-gray-200 text-black font-sans uppercase tracking-wide font-bold shadow-sm">
            <div className="max-w-[1400px] mx-auto px-12 h-24 flex items-center justify-between">

                {/* Left: Mobile Menu Button + Logo */}
                <div className="flex items-center gap-5">
                    <button
                        className="lg:hidden text-black"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    <Link href="/" className="flex items-center">
                        <Image
                            src="/punch-logo.png"
                            alt="Punch Fitness"
                            width={250}
                            height={120}
                            className="h-20 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Right: Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-12">

                    {/* GYM INFO Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown('gym-info')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="flex items-center gap-1.5 hover:text-punch-red py-6 transition-colors text-[15px] font-semibold uppercase">
                            Gym Info <ChevronDown className="w-4 h-4" />
                        </button>
                        <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 rounded-b-lg">
                            <div className="flex flex-col py-2">
                                <Link href="/locations" className="px-4 py-3 hover:bg-gray-50 hover:text-punch-red text-sm">Locations</Link>
                                <Link href="/trainers" className="px-4 py-3 hover:bg-gray-50 hover:text-punch-red text-sm">Personal Trainers</Link>
                                <Link href="/about" className="px-4 py-3 hover:bg-gray-50 hover:text-punch-red text-sm">About Us</Link>
                                <Link href="/contact" className="px-4 py-3 hover:bg-gray-50 hover:text-punch-red text-sm">Contact</Link>
                            </div>
                        </div>
                    </div>

                    {/* Main Nav Links */}
                    <Link href="/about" className="hover:text-punch-red transition-colors text-[15px] font-semibold uppercase">About Us</Link>
                    <Link href="/join" className="hover:text-punch-red transition-colors text-[15px] font-semibold uppercase">Join Now</Link>
                </div>

                {/* Mobile Right: Join */}
                <Link href="/join" className="lg:hidden text-punch-red font-bold">
                    JOIN
                </Link>

            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 p-4 flex flex-col gap-4 shadow-xl">
                    <div className="space-y-4">
                        <div className="font-bold text-punch-red border-b border-gray-100 pb-2">Gym Info</div>
                        <div className="pl-4 flex flex-col gap-2 text-gray-600">
                            <Link href="/locations" onClick={() => setIsMobileMenuOpen(false)}>Locations</Link>
                            <Link href="/trainers" onClick={() => setIsMobileMenuOpen(false)}>Personal Trainers</Link>
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                        </div>
                    </div>
                    <Link href="/about" className="block py-2 border-t border-gray-100 font-bold" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    <Link href="/join" className="block py-2 border-t border-gray-100 font-bold text-punch-red" onClick={() => setIsMobileMenuOpen(false)}>Join Now</Link>
                </div>
            )}
        </nav>
    );
}
