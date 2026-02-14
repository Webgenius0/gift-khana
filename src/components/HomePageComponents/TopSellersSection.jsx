"use client";
import React from "react";
import Image from "next/image";
import CommonContainer from "../Shared/CommonContainer/CommonContainer";
import { Heart, ChevronRight } from "lucide-react";
import { topSellersData } from "@/cms/topSellersData";
import Link from "next/link";
import ProductCard from "../Products/ProductCard/ProductCard";

export default function TopSellersSection() {
    return (
        <section className="py-10 max-w-[1920px] mx-auto overflow-hidden">
            <CommonContainer>
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#182235] text-center mb-12 font-montserrat">
                    Top sellers
                </h2>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {topSellersData.map((product, index) => <ProductCard key={index} product={product} index={index} />)}
                </div>
            </CommonContainer>
        </section>
    );
}