import { Button } from '@/components/ui/button';
import { Search, ShoppingCart, Globe, } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import Link from 'next/link';


export default function Header() {
    return (
        <header className="px-4 py-4 font-montserrat container mx-auto">
            <div className="flex items-center justify-between gap-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logo.svg" alt="Logo" className="w-16" />
                    <img src="/logo-title.svg" alt="Logo" className="w-40 mt-4" />
                </div>



                {/* Search Bar Container */}
                <div className="flex-1 max-w-xl relative group">
                    <input
                        type="text"
                        placeholder="Search for products or designs"
                        className="w-full bg-white rounded-full pl-8 pr-16 py-4 text-gray-500 placeholder-gray-400 outline-none text-lg shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-transparent transition-all focus:border-[#DAB79C]"
                    />
                    <Button variant="secondary" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-6" size="icon">
                        <Search size={24} strokeWidth={2.5} />
                    </Button>
                </div>



                {/* Actions */}
                <div className="flex items-center gap-6 text-sm">
                    <LanguageSelector />
                    <Button>
                        Sign in
                    </Button>

                    <Button className="rounded-full" size="icon">
                        <ShoppingCart size={24} strokeWidth={2.5} />
                    </Button>
                </div>
            </div>



            {/* Navigation */}
            <nav className="mt-6 flex justify-center gap-8 text-[13px] opacity-80 uppercase tracking-wide">
                {["Create your own", "Ready-made gifts", "Home decoration", "Gadgets and accessories", "Explore all items"].map((item) => (
                    <Link key={item} href="/">
                        <Button variant="link" className="text-text-secondary transition-colors">
                            {item}
                        </Button>
                    </Link>
                ))}
            </nav>
        </header>
    )
}