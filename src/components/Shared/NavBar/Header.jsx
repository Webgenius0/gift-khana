'use client'


import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import Link from 'next/link';
import CommonContainer from '../CommonContainer/CommonContainer';
import { cn } from '@/lib/utils';
import Logo from '../logo/Logo';
import HeaderSearch from './HeaderSearch';
import MobileSheet from './MobileSheet';

export default function Header({ className }) {
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
                    <div className="flex items-center gap-2">
                        {/* Mobile Menu Trigger */}
                        <div className="md:hidden">
                            <MobileSheet />
                        </div>

                        {/* Logo */}
                        <Logo />
                    </div>

                    {/* Desktop Search Bar - Hidden on Mobile */}
                    <HeaderSearch className='max-w-xl hidden md:flex' />

                    {/* Actions */}
                    <div className="flex items-center gap-2 md:gap-6">
                        <div className="hidden lg:block">
                            <LanguageSelector />
                        </div>

                        <Button className="hidden sm:inline-flex">
                            Sign in
                        </Button>

                        <Button className="rounded-full" size="icon">
                            <ShoppingCart size={24} strokeWidth={2.5} />
                        </Button>
                    </div>
                </div>

                <HeaderSearch className='w-full md:hidden -bottom-4' />


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
            </CommonContainer>
        </header>
    );
}
