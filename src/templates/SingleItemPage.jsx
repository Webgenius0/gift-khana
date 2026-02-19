"use client";
import React, { useState } from "react";
import CommonContainer from "@/components/Shared/CommonContainer/CommonContainer";
import ProductCard from "@/components/Products/ProductCard/ProductCard";
import { homeDecorationData } from "@/cms/homeDecorationData";
import { singleHomeDecorationData } from "@/cms/singleHomeDecorationData";
import DynamicBreadcrumb from "@/components/Shared/DynamicBreadcrumb/DynamicBreadcrumb";
import Image from "next/image";
import { Star, ChevronDown, Share2, Check, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SingleItemPage() {
    const [mainImage, setMainImage] = useState(singleHomeDecorationData.images[0]);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="bg-[#FBF3EA] min-h-screen pb-20">
            <CommonContainer className="pt-8 md:pt-12">
                {/* Breadcrumbs */}
                <div className="mb-8">
                    <DynamicBreadcrumb />
                </div>


                {/* Product Detail Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">

                    {/* Left Side: Image Gallery (7/12 width) */}
                    <div className="lg:col-span-7 order-1">
                        <div className="flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-1 gap-4 lg:h-[600px] xl:h-[700px]">

                            {/* Thumbnails */}
                            <div className="order-2 lg:order-1 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
                                {singleHomeDecorationData.images.slice(0, 5).map((img, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setMainImage(img)}
                                        className={cn(
                                            "relative aspect-square shrink-0 w-16 md:w-20 lg:w-full overflow-hidden cursor-pointer border-2 transition-all",
                                            mainImage === img ? "border-[#DAB79C]" : "border-transparent opacity-70 hover:opacity-100"
                                        )}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Thumbnail ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Main Image */}
                            <div className="order-1 lg:order-2 lg:col-span-5 relative aspect-square lg:aspect-auto w-full h-full bg-white shadow-sm overflow-hidden">
                                <Image
                                    src={mainImage}
                                    alt="Main Product"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Product Info (5/12 width) */}
                    <div className="lg:col-span-5 order-3 relative">
                        <div className="lg:sticky lg:top-10">
                            {/* Share button */}
                            <button className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700 transition-colors">
                                <Share2 size={24} strokeWidth={1.5} />
                            </button>

                            <h1 className="text-xl md:text-2xl font-medium text-gray-800 mb-4 pr-12 leading-snug">
                                {singleHomeDecorationData.fullName}
                            </h1>

                            {/* Stats Row */}
                            <div className="flex items-center justify-between mb-6 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500">{singleHomeDecorationData.soldCount}</span>
                                    <span className="text-gray-300">|</span>
                                    <div className="flex items-center gap-1.5 cursor-pointer group">
                                        <span className="text-gray-600 font-medium">Sold by</span>
                                        <div className="w-5 h-5 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                                            <div className="w-3 h-3 bg-gray-400 rounded-full" />
                                        </div>
                                        <ChevronDown size={14} className="text-gray-400 -rotate-90" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="font-bold text-gray-800">4.7</span>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                fill={i < 4 ? "#182235" : "none"}
                                                className={cn(i < 4 ? "text-[#182235]" : "text-gray-300")}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="space-y-4 mb-6">
                                <div className="flex flex-wrap items-center gap-2">
                                    <div className="flex items-baseline">
                                        <span className="text-2xl font-bold text-gray-900">KWD</span>
                                        <span className="text-3xl font-bold text-gray-900 ml-0.5">2.28</span>
                                    </div>
                                    <span className="text-gray-400 line-through text-sm">8.00</span>
                                    <span className="border border-[#FF6B35]/30 text-[#FF6B35] text-xs font-bold px-1.5 py-0.5 rounded ml-1">
                                        -71%
                                    </span>
                                    <div className="flex items-center gap-1.5 bg-[#FF6B35] text-white px-3 py-1 rounded-sm text-xs font-bold">
                                        Price lower than usual
                                        <div className="w-3.5 h-3.5 rounded-full border border-white/40 flex items-center justify-center text-[10px]">?</div>
                                    </div>
                                </div>

                                <div className="inline-flex items-center gap-1 px-2 py-0.5 border border-[#FF6B35]/30 rounded text-[#FF6B35] text-[10px] font-bold uppercase tracking-wide">
                                    ALMOST SOLD OUT
                                    <div className="w-3 h-3 rounded-full border border-[#FF6B35]/30 flex items-center justify-center text-[8px] ml-0.5">?</div>
                                </div>
                            </div>

                            {/* Installments */}
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
                                4 interest-free installments of KWD0.57 with
                                <span className="bg-[#00FFBC] text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">
                                    tabby
                                </span>
                            </div>

                            {/* Shipping & Credit */}
                            <div className="bg-[#FAE4CE] rounded p-4 mb-8 flex items-center gap-4">
                                <div className="flex items-center gap-2 text-[#2D6A4F] text-sm font-bold">
                                    <Check size={18} strokeWidth={3} />
                                    <span>Free shipping</span>
                                </div>
                                <span className="w-px h-4 bg-gray-200" />
                                <div className="flex items-center gap-2 text-sm font-bold">
                                    <Check size={18} strokeWidth={3} className="text-[#2D6A4F]" />
                                    <span>KWD1.25 Credit for delay</span>
                                </div>
                            </div>

                            {/* Options */}
                            <div className="space-y-6 mb-10">
                                <div className="flex items-center gap-2 text-base">
                                    <span className="font-bold text-gray-800">Color: TB59, Size: M</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-lg font-bold text-gray-800">Qty</span>
                                        <div className="flex items-center justify-between border border-black/10 rounded-md bg-white w-32 h-12 px-4 shrink-0">
                                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-[#DAB79C]"><Minus size={16} /></button>
                                            <span className="font-bold text-lg">{quantity}</span>
                                            <button onClick={() => setQuantity(quantity + 1)} className="hover:text-[#DAB79C]"><Plus size={16} /></button>
                                        </div>
                                    </div>

                                    <button className="w-full bg-[#182235] text-white h-16 rounded-full font-bold hover:bg-[#1f2b45] transition-all text-xl mt-4">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Grid */}
                <div className="border-t border-black/10 pt-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {homeDecorationData.slice(0, 8).map((product, index) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                index={index}
                                variant="cart"
                            />
                        ))}
                    </div>

                    <div className="flex justify-center mt-12">
                        <button className="bg-[#182235] text-white px-10 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
                            View more
                        </button>
                    </div>
                </div>
            </CommonContainer>
        </div>
    );
}
