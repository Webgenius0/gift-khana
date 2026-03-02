
"use client";
import React from "react";
import { ShoppingCart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { topSellersData } from "@/cms/topSellersData";

const CartDropdown = () => {
    // Using top sellers as mock cart items
    const cartItems = topSellersData.slice(0, 3).map((item, idx) => ({
        ...item,
        qty: idx === 1 ? 5 : 1
    }));

    const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

    return (
        <div className="relative group h-full py-2">
            <Link href="/cart">
                <Button className="rounded-full relative" size="icon">
                    <ShoppingCart size={24} strokeWidth={2.5} />
                    {totalQty > 0 && (
                        <span className="absolute -top-1 -right-1 bg-secondary text-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white pointer-events-none">
                            {totalQty}
                        </span>
                    )}
                </Button>
            </Link>

            {/* Dropdown Content */}
            <div className="absolute top-full right-0 w-[380px] bg-bg-secondary shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl p-6 transition-all duration-300 origin-top-right z-[100] opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible pointer-events-none group-hover:pointer-events-auto border border-primary/20">
                <div className="flex items-center justify-between mb-8 border-b border-secondary/10 pb-4">
                    <h3 className="text-xl font-bold text-secondary font-montserrat tracking-tight">
                        Shopping Cart <span className="text-secondary/40 font-semibold">{totalQty} items</span>
                    </h3>
                </div>

                <div className="space-y-6 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 group/item relative">
                            <div className="w-20 h-20 relative rounded-xl bg-white overflow-hidden shrink-0 shadow-sm border border-secondary/5">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover group-hover/item:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex flex-col flex-1 py-1.5">
                                <h4 className="text-[15px] font-bold text-secondary leading-snug mb-2 group-hover/item:text-primary transition-colors">
                                    {item.name}
                                </h4>
                                <div className="mt-auto flex items-center justify-between font-montserrat tracking-tight">
                                    <span className="text-xs font-black text-secondary/40">
                                        QTY: {item.qty}
                                    </span>
                                    <span className="text-sm font-black text-secondary">
                                        {item.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 pt-8 border-t border-secondary/10 flex flex-col gap-5">
                    <Link href="/cart">
                        <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 font-black h-14 rounded-xl text-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
                            View Cart ({totalQty} items)
                        </Button>
                    </Link>

                    <div className="flex items-center justify-center gap-2 group/sat cursor-default">
                        <ShieldCheck size={16} className="text-secondary/20 group-hover/sat:text-secondary/60 transition-colors" />
                        <p className="text-center text-[10px] font-black text-secondary/40 uppercase tracking-widest group-hover/sat:text-secondary/60 transition-colors">
                            100% Satisfaction Guaranteed
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDropdown;
