'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        "Create your own",
        "Ready-made gifts",
        "Home decoration",
        "Gadgets and accessories",
        "Explore all items"
    ];

    return (
        <header className="px-4 py-4 font-montserrat container mx-auto relative">
            <div className="flex items-center justify-between gap-4">
                {/* Logo Section */}
                <div className="flex items-center gap-2 shrink-0">
                    <img src="/logo.svg" alt="Logo" className="w-10 md:w-16" />
                    {/* Hide logo title on very small mobile screens */}
                    <img src="/logo-title.svg" alt="Title" className="hidden sm:block w-32 md:w-40 mt-2 md:mt-4" />
                </div>

                {/* Desktop Search Bar - Hidden on Mobile */}
                <div className="hidden md:flex flex-1 max-w-xl relative group">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full bg-white rounded-full pl-8 pr-16 py-3 text-gray-500 placeholder-gray-400 outline-none shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-transparent transition-all focus:border-[#DAB79C]"
                    />
                    <Button variant="secondary" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 p-0" size="icon">
                        <Search size={20} strokeWidth={2.5} />
                    </Button>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 md:gap-6">
                    <div className="hidden lg:block">
                        <LanguageSelector />
                    </div>

                    <Button variant="ghost" className="md:hidden" size="icon">
                        <Search size={24} />
                    </Button>

                    <Button className="hidden sm:flex">
                        Sign in
                    </Button>

                    <Button className="rounded-full" size="icon">
                        <ShoppingCart size={24} strokeWidth={2.5} />
                    </Button>

                    {/* Mobile Menu Toggle */}
                    {/* <Button
                        variant="ghost"
                        className="md:hidden"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </Button> */}
                </div>
            </div>

            {/* Desktop Navigation - Hidden on Mobile */}
            <nav className="hidden md:flex mt-6 justify-center gap-4 lg:gap-8 text-[11px] lg:text-[13px] opacity-80 uppercase tracking-wide">
                {navLinks.map((item) => (
                    <Link key={item} href="/">
                        <Button variant="link" className="text-text-secondary h-auto p-0">
                            {item}
                        </Button>
                    </Link>
                ))}
            </nav>

            {/* Mobile Sidebar/Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white z-50 p-6 shadow-xl md:hidden border-t">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((item) => (
                            <Link key={item} href="/" onClick={() => setIsMenuOpen(false)}>
                                <span className="block py-2 text-sm font-medium uppercase tracking-wider">
                                    {item}
                                </span>
                            </Link>
                        ))}
                        <hr className="my-2" />
                        <div className="flex flex-col gap-4">
                            <LanguageSelector />
                            <Button className="w-full">Sign in</Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}