import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Menu, User, Package, Palette, Heart, LogOut } from 'lucide-react';
import Link from 'next/link';


export default function MobileSheet() {
    const mobileMenuLinks = [
        { icon: User, label: "My Account", href: "/account" },
        { icon: Package, label: "My Orders", href: "/orders" },
        { icon: Palette, label: "Saved Designs", href: "/saved-designs" },
        { icon: Heart, label: "Likes", href: "/likes" },
    ];


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Menu size={28} />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-[85%] sm:max-w-[350px] bg-white">
                {/* User Profile Section */}
                <div className="p-8 pb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full border-2 border-[#182235]/10 flex items-center justify-center">
                            <User size={32} className="text-[#182235]" />
                        </div>
                        <span className="text-xl font-bold text-[#182235]">Ahmad Ghassan</span>
                    </div>
                </div>

                <div className="px-8 flex flex-col gap-1">
                    <hr className="border-[#F3E8E0] mb-4" />

                    {mobileMenuLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="flex items-center gap-4 py-3 text-[#182235] hover:text-[#DAB79C] transition-colors"
                        >
                            <link.icon size={22} strokeWidth={2} />
                            <span className="text-base font-semibold">{link.label}</span>
                        </Link>
                    ))}

                    <hr className="border-[#F3E8E0] my-4" />

                    <button className="flex items-center gap-4 py-3 text-[#182235] hover:text-red-500 transition-colors w-full text-left">
                        <LogOut size={22} strokeWidth={2} />
                        <span className="text-base font-semibold px-1">Sign out</span>
                    </button>
                </div>
            </SheetContent>
        </Sheet>
    )
}