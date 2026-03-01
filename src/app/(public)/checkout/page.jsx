
"use client";
import React, { useState } from "react";
import CommonContainer from "@/components/Shared/CommonContainer/CommonContainer";
import {
    Check,
    ChevronDown,
    ArrowLeft,
    CreditCard,
    ShieldCheck,
    Plus,
    Minus,
    HelpCircle,
    BadgeHelp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { topSellersData } from "@/cms/topSellersData";

const steps = [
    { name: "Cart", completed: true },
    { name: "Gift Wrapping", completed: true },
    { name: "Shipping", completed: true },
    { name: "Payment", current: true },
    { name: "Order Complete", pending: true },
];

export default function CheckoutPage() {
    const [paymentMethod, setPaymentMethod] = useState("instapay");
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Waves Of The Sea Mug",
            designer: "TheGillery Store",
            price: 189,
            qty: 1,
            image: topSellersData[0].image,
        }
    ]);

    const shippingCost = 85;
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const total = subtotal + shippingCost;

    return (
        <div className="bg-white min-h-screen py-10 font-montserrat text-secondary">
            <CommonContainer>
                {/* 1. Stepper & Title */}
                <div className="flex flex-col items-center mb-12">
                    <h1 className="text-3xl font-medium mb-12">Checkout</h1>

                    {/* Stepper Logic exactly from Image */}
                    <div className="relative w-full max-w-lg mb-8">
                        <div className="absolute top-[7px] left-0 right-0 h-[1.5px] bg-secondary/10" />
                        <div className="flex justify-between relative">
                            {steps.map((step, idx) => (
                                <div key={step.name} className="flex flex-col items-center gap-3 relative">
                                    <div className={cn(
                                        "w-[14px] h-[14px] rounded-full z-10 transition-all",
                                        step.completed ? "bg-black" :
                                            step.current ? "bg-white border-2 border-black ring-[1px] ring-white" :
                                                "bg-white border border-secondary/20"
                                    )} />
                                    <span className={cn(
                                        "text-[9px] font-medium tracking-tight absolute -bottom-6 whitespace-nowrap opacity-40 uppercase",
                                        step.current && "opacity-100 font-bold"
                                    )}>
                                        {step.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
                    {/* Left Column: Forms */}
                    <div className="lg:col-span-7 space-y-10">
                        {/* Returning Customer */}
                        <p className="text-[13px] font-medium opacity-60">
                            Returning customer? <Link href="/signin" className="text-red-500 hover:underline">Click here to login</Link>
                        </p>

                        {/* Review Section */}
                        <div className="space-y-4">
                            <h2 className="text-[14px] font-bold uppercase tracking-wider opacity-80">REVIEW DETAILS BEFORE SUBMITTING</h2>
                            <div className="bg-white rounded-lg border border-secondary/10 divide-y divide-secondary/5 overflow-hidden">
                                {[
                                    { label: "Phone", value: "1225722929" },
                                    { label: "Email", value: "aghassan@gmail.com" },
                                    { label: "Billing", value: "74 El Zahraa Street, Alexandria, Alexandr a 21548, Egypt" },
                                ].map((item) => (
                                    <div key={item.label} className="p-4 px-6 flex items-start justify-between">
                                        <div className="flex gap-10">
                                            <span className="text-[11px] font-bold opacity-30 w-16">{item.label}</span>
                                            <span className="text-[13px] font-medium opacity-80 leading-snug">{item.value}</span>
                                        </div>
                                        <button className="text-[11px] font-bold text-red-500 hover:text-red-600">Change</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Other Section */}
                        <div className="space-y-4">
                            <h2 className="text-[14px] font-bold uppercase tracking-wider opacity-80">OTHER</h2>
                            <div className="space-y-1">
                                <Label className="text-[11px] font-bold opacity-30 px-1 uppercase tracking-tight">How did you hear about us?</Label>
                                <Select defaultValue="none">
                                    <SelectTrigger className="bg-white border-secondary/10 h-12 rounded-lg px-4 font-medium opacity-60">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white rounded-lg font-montserrat p-1 group border-none shadow-2xl">
                                        <SelectItem value="none" className="rounded-lg font-medium text-sm">None</SelectItem>
                                        <SelectItem value="social" className="rounded-lg font-medium text-sm">Social Media</SelectItem>
                                        <SelectItem value="friend" className="rounded-lg font-medium text-sm">Friend / Relative</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Coupon Section */}
                        <div className="space-y-4">
                            <h2 className="text-[14px] font-bold uppercase tracking-wider opacity-80">ADD COUPON CODE</h2>
                            <div className="flex gap-3">
                                <Input
                                    placeholder="Coupon code"
                                    className="bg-white h-12 border-secondary/10 rounded-lg px-4 font-medium placeholder:opacity-40"
                                />
                                <Button className="bg-[#B7C2C9] text-white h-12 px-10 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-[#A0A0A0]">Apply</Button>
                            </div>
                        </div>

                        {/* Payment Section */}
                        <div className="space-y-6">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-[14px] font-bold uppercase tracking-wider opacity-80">PAYMENT INFORMATION</h2>
                                <p className="text-[11px] font-medium opacity-30">All transactions are secure and encrypted. Credit card information is never stored on our servers.</p>
                            </div>

                            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-[1px] border border-secondary/10 rounded-xl overflow-hidden">
                                {[
                                    { id: "cod", label: "Cash on delivery" },
                                    { id: "instapay", label: "Instapay / transfer" },
                                    { id: "apple", label: "Apple Pay" },
                                    { id: "paymob", label: "Pay with Paymob" }
                                ].map((method) => (
                                    <div key={method.id} className={cn(
                                        "bg-white transition-all border-b border-secondary/5 last:border-b-0",
                                        paymentMethod === method.id && "bg-[#F9F9F9]"
                                    )}>
                                        <label htmlFor={method.id} className="p-5 flex items-center justify-between cursor-pointer w-full">
                                            <div className="flex items-center gap-3">
                                                <RadioGroupItem value={method.id} id={method.id} className="border-secondary/20" />
                                                <span className="text-[13px] font-medium opacity-80">{method.label}</span>
                                            </div>
                                            {method.id === "apple" && <div className="text-secondary opacity-40 text-[10px] font-bold border rounded px-1 flex items-center gap-1 italic">Pay</div>}
                                            {method.id === "paymob" && <div className="text-[#1A1A9E] font-black italic text-sm tracking-tighter">paymob</div>}
                                        </label>

                                        {/* Transfer Description */}
                                        {method.id === "instapay" && paymentMethod === "instapay" && (
                                            <div className="px-14 pb-8 space-y-4">
                                                <p className="text-[11px] leading-relaxed opacity-60 font-medium italic">
                                                    "To make a transfer please use your ORDER NUMBER as a payment reference or note. Your order will be processed once the funds have reached our account."
                                                </p>
                                                <div className="space-y-1 text-[11px] opacity-80 font-bold border-l border-primary pl-4">
                                                    <p>Bank: QNB</p>
                                                    <p>Name: theGillery</p>
                                                    <p>Account number: 2031145324500</p>
                                                </div>
                                                <p className="text-[10px] font-bold opacity-60 pt-2">
                                                    Then send a screenshot via Whatsapp to <span className="text-red-500 underline decoration-red-500/20 underline-offset-4">+201225722929</span> (click to go to Whatsapp)
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>

                        {/* Rules */}
                        <div className="space-y-4 pt-4">
                            <ul className="text-[11px] leading-relaxed flex flex-col gap-3 font-medium opacity-40 italic">
                                <li>Each item's shipping time is stated on the individual product description.</li>
                                <li>Flowers ship within 1-2 business days within Cairo & Giza only.</li>
                                <li>Gifts are delivered in Cairo and Giza within 5-7 working days. Deliveries outside of these areas will take a few extra days depending on the area.</li>
                                <li>Customized gifts may take longer to deliver.</li>
                                <li>Gifts may be replaced based on stock availability.</li>
                            </ul>

                            <div className="flex items-start gap-3 pt-6">
                                <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-secondary/20 accent-secondary" />
                                <Label htmlFor="terms" className="text-[12px] font-medium leading-normal opacity-70">
                                    I have read and agree to the website <Link href="#" className="text-red-500 underline underline-offset-4 decoration-red-500/20">terms and conditions *</Link>
                                </Label>
                            </div>

                            <div className="flex flex-col items-center gap-6 pt-6">
                                <Button className="w-full h-[64px] bg-[#182235] text-white hover:bg-black text-[20px] font-black uppercase tracking-[0.1em] rounded-full shadow-2xl transition-all">
                                    PLACE ORDER NOW
                                </Button>
                                <Link href="/cart" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity">
                                    Return to shopping
                                </Link>
                                <p className="text-[11px] font-bold opacity-30 border-t border-secondary/5 pt-4 w-full text-center">
                                    We Respect Your Privacy & Information
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Order Summary Sidebar (Peach Match) */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-10 bg-[#FFECE1] rounded-2xl p-8 space-y-10 border border-secondary/5">
                            {/* Items */}
                            <div className="space-y-8">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative w-20 h-20 bg-white rounded-xl overflow-hidden shadow-sm shrink-0">
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            <span className="absolute -top-1 -right-1 bg-secondary text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">{item.qty}</span>
                                        </div>
                                        <div className="flex-1 flex flex-col pt-1">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-[13px] font-bold leading-tight opacity-80">{item.name}</h3>
                                                <p className="text-[13px] font-bold opacity-80 whitespace-nowrap">{item.price}EGP</p>
                                            </div>
                                            <Link href="#" className="text-[11px] font-bold text-secondary underline underline-offset-4 decoration-secondary/20 opacity-40 mt-1 uppercase">
                                                {item.designer}
                                            </Link>

                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="flex items-center bg-white/50 rounded-lg px-2 h-7 border border-secondary/10">
                                                    <button className="p-1 text-secondary/40 hover:text-secondary"><Minus size={10} /></button>
                                                    <span className="text-[11px] font-bold w-6 text-center">{item.qty}</span>
                                                    <button className="p-1 text-secondary/40 hover:text-secondary"><Plus size={10} /></button>
                                                </div>
                                                <button className="text-[10px] font-bold opacity-20 hover:text-red-500 transition-colors uppercase">
                                                    ✕
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Totals Section */}
                            <div className="space-y-4 pt-8 border-t border-secondary/5">
                                <div className="flex justify-between items-center text-[13px] font-medium opacity-60">
                                    <span>Subtotal</span>
                                    <span>{subtotal}EGP <span className="text-[10px] opacity-40">incl. tax</span></span>
                                </div>
                                <div className="flex justify-between items-center text-[13px] font-medium opacity-60">
                                    <span>TheGillery Store Shipping</span>
                                    <span>{shippingCost}EGP</span>
                                </div>

                                <div className="flex justify-between items-center pt-8 mt-4">
                                    <span className="text-lg font-bold opacity-60">Total</span>
                                    <span className="text-[44px] font-black leading-none">{total}EGP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CommonContainer>
        </div>
    );
}
