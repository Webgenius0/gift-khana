'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import Link from 'next/link';
import CommonContainer from '../CommonContainer/CommonContainer';
import { cn } from '@/lib/utils';
import Logo from '../logo/Logo';

export default function Header({ className }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        "Create your own",
        "Ready-made gifts",
        "Home decoration",
        "Gadgets and accessories",
        "Explore all items"
    ];

    return (
        <header className={cn('font-montserrat', className)}>
            <CommonContainer className='pb-6 md:pb-0'>
                <div className="flex items-center justify-between gap-4">
                    {/* Mobile Menu Toggle */}
                    {/* <Button
                        variant="ghost"
                        className="md:hidden"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </Button> */}

                    {/* Logo */}
                    <Logo />

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

                        <Button>
                            Sign in
                        </Button>

                        <Button className="rounded-full" size="icon">
                            <ShoppingCart size={24} strokeWidth={2.5} />
                        </Button>
                    </div>
                </div>


                <div className="md:hidden relative -bottom-4 w-full z-10 flex flex-1 max-w-xl group">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full bg-white rounded-full pl-8 pr-16 py-3 text-gray-500 placeholder-gray-400 outline-none shadow-xl border border-transparent transition-all focus:border-[#DAB79C]"
                    />
                    <Button variant="secondary" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 p-0" size="icon">
                        <Search size={20} strokeWidth={2.5} />
                    </Button>
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
            </CommonContainer>
        </header>
    );
}