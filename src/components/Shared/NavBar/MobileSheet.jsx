import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import mobileMenuLinks from "@/data/mobileMenuLinks";
import { Menu, User, LogOut, Package } from 'lucide-react'; // Added Package icon
import Link from 'next/link';

export default function MobileSheet() {
    // These are the links from your Header's desktop nav
    const productLinks = [
        { label: "Create your own", href: "/personalized-products" },
        { label: "Ready-made gifts", href: "/products/ready-made-gifts" },
        { label: "Home decoration", href: "/products/home-decoration" },
        { label: "Gadgets and accessories", href: "/products/gadgets" },
        { label: "Explore all items", href: "/products" }
    ];

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Menu size={28} />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-[85%] sm:max-w-[350px] bg-white overflow-y-auto">
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

                    {/* 2. Products Accordion */}
                    <Accordion type="single" collapsible className="w-full border-none">
                        <AccordionItem value="products" className="border-none">
                            <AccordionTrigger className="flex items-center gap-4 py-3 text-[#182235] hover:text-[#DAB79C] hover:no-underline transition-colors">
                                <div className="flex items-center gap-4">
                                    <Package size={22} strokeWidth={2} />
                                    <span className="text-base font-semibold">Products</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-2 pl-10 pt-2 pb-4">
                                    {productLinks.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="text-sm py-2 text-[#182235]/80 hover:text-[#DAB79C] transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/* 1. Regular Mobile Links */}
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

                    {/* Sign Out */}
                    <button className="flex items-center gap-4 py-3 text-[#182235] hover:text-red-500 transition-colors w-full text-left">
                        <LogOut size={22} strokeWidth={2} />
                        <span className="text-base font-semibold px-1">Sign out</span>
                    </button>
                </div>
            </SheetContent>
        </Sheet>
    );
}