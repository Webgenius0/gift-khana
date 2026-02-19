"use client";
import React, { useState } from "react";
import CommonContainer from "@/components/Shared/CommonContainer/CommonContainer";
import ProductCard from "@/components/Products/ProductCard/ProductCard";
import { personalizedProductsData } from "@/cms/personalizedProductsData";
import { singlePersonalizedItemData } from "@/cms/singlePersonalizedItemData";
import DynamicBreadcrumb from "@/components/Shared/DynamicBreadcrumb/DynamicBreadcrumb";
import Image from "next/image";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SinglePersonalizeItemPage() {
    const [mainImage, setMainImage] = useState(singlePersonalizedItemData.images[0]);
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
                    {/* Image Gallery */}
                    <div className="lg:col-span-1 flex flex-row lg:flex-col gap-3 order-2 lg:order-1">
                        {singlePersonalizedItemData.images.map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => setMainImage(img)}
                                className={cn(
                                    "relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all",
                                    mainImage === img ? "border-[#DAB79C]" : "border-transparent opacity-70 hover:opacity-100"
                                )}
                            >
                                <Image
                                    src={img}
                                    alt={`Pillow ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Main Image Display */}
                    <div className="lg:col-span-6 order-1 lg:order-2">
                        <div className="relative aspect-square rounded-[32px] overflow-hidden bg-[#F3E8E0] shadow-sm">
                            <Image
                                src={mainImage}
                                alt="Main Pillow"
                                fill
                                className="object-cover p-8 lg:p-12"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:col-span-5 order-3">
                        <h1 className="text-4xl md:text-5xl font-medium text-[#182235] font-montserrat mb-4">
                            {singlePersonalizedItemData.name}
                        </h1>
                        <div className="mb-6">
                            <span className="text-2xl font-bold text-[#182235]">{singlePersonalizedItemData.price}</span>
                            <p className="text-secondary/60 text-sm mt-1">{singlePersonalizedItemData.unit}</p>
                        </div>

                        <p className="text-xs text-secondary/70 mb-8 border-l-2 border-[#DAB79C] pl-4 italic">
                            {singlePersonalizedItemData.deliveryInfo}
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col gap-4 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-between border border-black/10 rounded-md bg-white w-24 h-12 px-3">
                                    <span className="font-bold">{quantity}</span>
                                    <ChevronDown size={16} className="text-secondary/40" />
                                </div>
                                <button className="flex-1 bg-[#182235] text-white h-12 rounded-lg font-bold hover:bg-opacity-90 transition-all">
                                    Add to Cart
                                </button>
                            </div>
                            <button className="w-full bg-[#182235] text-white h-12 rounded-lg font-bold hover:bg-opacity-90 transition-all uppercase tracking-wider">
                                Add your design
                            </button>
                        </div>

                        {/* Description & Specs */}
                        <div className="space-y-6 text-[#182235]">
                            <div>
                                <h3 className="font-bold text-sm mb-2">Size: {singlePersonalizedItemData.name} 16&quot; x 16&quot;</h3>
                                <p className="text-sm leading-relaxed opacity-80">
                                    {singlePersonalizedItemData.description}
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-sm mb-2">Dimensions: {singlePersonalizedItemData.dimensions}</h3>
                                <ul className="list-disc list-inside text-sm space-y-1 opacity-80">
                                    {singlePersonalizedItemData.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="border-t pt-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {personalizedProductsData.slice(0, 8).map((product, index) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                index={index}
                                variant="personalized"
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
