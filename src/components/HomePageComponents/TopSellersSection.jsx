"use client";
import React from "react";
import Image from "next/image";
import CommonContainer from "../Shared/CommonContainer/CommonContainer";
import { Heart, ChevronRight } from "lucide-react";
import { topSellersData } from "@/cms/topSellersData";
import Link from "next/link";

export default function TopSellersSection() {
    return (
        <section className="py-16 max-w-[1920px] mx-auto overflow-hidden">
            <CommonContainer>
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#182235] text-center mb-12 font-montserrat">
                    Top sellers
                </h2>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {topSellersData.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            {/* Product Image Container */}
                            <div className="relative aspect-square rounded-[30px] overflow-hidden mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Heart Icon */}
                                <button className="absolute top-4 right-4 text-[#182235]/60 hover:text-red-500 transition-colors">
                                    <Heart className="w-8 h-8" />
                                </button>
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col gap-1 px-1">
                                <h3 className="text-secondary opacity-90 text-sm md:text-base font-medium font-montserrat tracking-tight">
                                    {product.name}
                                </h3>
                                <p className="text-[#182235] font-bold text-base md:text-lg tracking-tight">
                                    {product.price}
                                </p>

                                {/* Explore Design Link */}
                                <Link
                                    href={product.link}
                                    className="flex items-center gap-2 text-[#182235] font-bold text-xs md:text-sm mt-1 group"
                                >
                                    <span>Explore design</span>
                                    <div className="bg-[#182235] rounded-full p-0.5 group-hover:translate-x-1 transition-transform">
                                        <ChevronRight className="w-3 h-3 text-white" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </CommonContainer>
        </section>
    );
}