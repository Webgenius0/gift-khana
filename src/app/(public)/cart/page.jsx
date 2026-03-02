
"use client";
import React, { useState } from "react";
import CommonContainer from "@/components/Shared/CommonContainer/CommonContainer";
import DynamicBreadcrumb from "@/components/Shared/DynamicBreadcrumb/DynamicBreadcrumb";
import {
    Heart,
    Trash2,
    Edit2,
    ChevronDown,
    ShieldCheck,
    CreditCard,
    CheckCircle2,
    Plus,
    Minus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { topSellersData } from "@/cms/topSellersData";
import { Label } from "@/components/ui/label";

export default function CartPage() {
    const [cartItems, setCartItems] = useState(
        topSellersData.slice(0, 2).map((item, idx) => ({
            ...item,
            id: item.id,
            qty: idx === 1 ? 5 : 1,
            originalPrice: 150,
            salePrice: 135.5,
            designer: "Memorable_Modern",
            soldBy: "Gift Khana",
            description: "Round Button, Standard, 2 1/4 Inch",
            status: "Order today to get it as soon as Mar 6 with expedited shipping"
        }))
    );

    const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
    const subtotal = cartItems.reduce((acc, item) => acc + (item.salePrice * item.qty), 0);
    const originalSubtotal = cartItems.reduce((acc, item) => acc + (item.originalPrice * item.qty), 0);
    const totalSavings = originalSubtotal - subtotal;

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const updateQty = (id, newQty) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, qty: parseInt(newQty) } : item));
    };

    return (
        <div className="bg-bg-secondary min-h-screen py-10 font-montserrat">
            <CommonContainer>
                {/* Breadcrumbs */}
                <div className="mb-8">
                    <DynamicBreadcrumb />
                </div>

                {/* Header */}
                <div className="flex flex-col gap-1 mb-8">
                    <h1 className="text-3xl font-bold text-secondary">
                        Your Shopping Cart <span className="text-secondary/40 font-medium">({totalQty} items)</span>
                    </h1>
                    <p className="text-sm font-medium text-secondary/80">
                        Not logged in? <Link href="/signin" className="text-secondary font-bold hover:underline underline-offset-4 tracking-tight">Sign in</Link>
                    </p>
                </div>

                {/* Satisfaction Banner */}
                <div className="bg-primary/20 border border-primary/40 rounded-lg p-4 mb-10 flex items-center gap-4 text-secondary/80">
                    <Heart size={20} className="text-secondary/40" />
                    <p className="text-sm font-bold tracking-tight">
                        100% Satisfaction, Returns Guaranteed! <Link href="#" className="underline ml-1 underline-offset-2">Learn more</Link>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Items List */}
                    <div className="lg:col-span-8 space-y-8">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-secondary/5 p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 bg-primary text-secondary text-[10px] font-bold px-3 py-1 rounded-br-lg shadow-sm">
                                    Just added
                                </div>

                                <div className="w-full md:w-56 h-56 relative bg-bg-secondary rounded-lg overflow-hidden shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-xl font-bold text-secondary tracking-tight">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-secondary/40 font-semibold italic">
                                                Designed by {item.designer}. Sold by {item.soldBy}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-sm text-secondary/20 line-through font-bold">
                                                ${(item.originalPrice * item.qty).toFixed(2)}
                                            </span>
                                            <span className="text-xl font-black text-secondary">
                                                ${(item.salePrice * item.qty).toFixed(2)}
                                            </span>
                                            <span className="text-xs font-black text-secondary mt-1">
                                                You saved ${((item.originalPrice - item.salePrice) * item.qty).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-secondary/60 mb-6 font-medium">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center gap-3 mb-8 bg-bg-secondary/50 p-3 rounded-lg border border-secondary/10">
                                        <CheckCircle2 size={16} className="text-secondary/40" />
                                        <p className="text-xs font-bold text-secondary/60 tracking-tight">
                                            {item.status}
                                        </p>
                                    </div>

                                    <div className="mt-auto flex flex-wrap items-center gap-8 border-t border-secondary/5 pt-6">
                                        <div className="flex items-center gap-2">
                                            <Label className="text-[10px] font-black uppercase tracking-widest text-secondary/30">qty</Label>
                                            <div className="flex items-center justify-between border border-secondary/10 rounded-lg bg-bg-secondary w-28 h-10 px-3 shrink-0">
                                                <button
                                                    onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                                                    className="text-secondary/40 hover:text-secondary transition-colors"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="font-bold text-sm text-secondary">{item.qty}</span>
                                                <button
                                                    onClick={() => updateQty(item.id, item.qty + 1)}
                                                    className="text-secondary/40 hover:text-secondary transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-6 text-sm font-bold text-secondary/40">
                                            <button className="hover:text-secondary flex items-center gap-1.5 border-r border-secondary/10 pr-6 h-5 transition-colors">
                                                <Heart size={14} /> Save for Later
                                            </button>
                                            <button className="hover:text-secondary flex items-center gap-1.5 border-r border-secondary/10 pr-6 h-5 transition-colors">
                                                <Edit2 size={14} /> Edit Item
                                            </button>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="hover:text-red-500 flex items-center gap-1.5 transition-colors"
                                            >
                                                <Trash2 size={14} /> Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary Sidebar - Payment Method Removed */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-secondary/5 p-8">
                            <h2 className="text-xl font-bold text-secondary mb-8 tracking-tight uppercase tracking-widest text-xs opacity-40">Payment Summary</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center text-sm font-bold text-secondary">
                                    <span>Subtotal:*</span>
                                    <div className="flex flex-col items-end">
                                        <span className="text-secondary/20 line-through text-xs">${originalSubtotal.toFixed(2)}</span>
                                        <span className="text-xl font-black">${subtotal.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center text-xs font-black text-secondary">
                                    <span>Savings</span>
                                    <span>-${totalSavings.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-bold border-t border-secondary/5 pt-4">
                                    <span>Shipping</span>
                                    <span className="text-secondary/40">Calculated later</span>
                                </div>
                            </div>

                            <Link href="/checkout">
                                <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 font-black h-14 rounded-xl text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3">
                                    <CreditCard size={20} />
                                    Proceed to Checkout
                                </Button>
                            </Link>

                            <p className="text-[10px] text-secondary/20 text-center mt-6 font-bold tracking-tight uppercase leading-relaxed">
                                100% Satisfaction, Returns Guaranteed!
                            </p>
                        </div>

                        {/* Additional Info Cards */}
                        <div className="bg-white/50 border border-secondary/5 rounded-xl p-6 flex items-start gap-4">
                            <ShieldCheck size={24} className="text-secondary/20 shrink-0" />
                            <div>
                                <h4 className="font-bold text-secondary text-sm mb-1 uppercase tracking-tight">Full Security</h4>
                                <p className="text-xs text-secondary/40 font-medium">All transactions are fully encrypted and secure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CommonContainer>
        </div>
    );
}
