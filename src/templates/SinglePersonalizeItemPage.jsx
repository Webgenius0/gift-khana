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

                    {/* Left Side: Image Gallery (7/12 width) */}
                    <div className="lg:col-span-7 order-1">
                        {/* Mobile: Flex column (Main image top, thumbs bottom)
            Desktop: Grid 6 cols, 5 rows. Height is fixed for the grid layout.
        */}
                        <div className="flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-5 gap-4 lg:h-[600px] xl:h-[700px]">

                            {/* Main Image: 
                Mobile: Standard block with aspect ratio
                Desktop: Fills Col 2-6 and Row 1-5
            */}
                            <div className="order-1 lg:order-2 lg:col-span-5 lg:row-span-5 relative aspect-square lg:aspect-auto w-full h-full bg-[#F3E8E0] shadow-sm overflow-hidden">
                                <Image
                                    src={mainImage}
                                    alt="Main Product"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Thumbnails:
                Mobile: Horizontal scrollable row
                Desktop: Vertical grid column (Col 1, Rows 1-5)
            */}
                            <div className="order-2 lg:order-1 flex flex-row lg:grid lg:grid-cols-1 lg:grid-rows-5 lg:col-span-1 lg:row-span-5 gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                                {singlePersonalizedItemData.images.slice(0, 5).map((img, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setMainImage(img)}
                                        className={cn(
                                            "relative aspect-square shrink-0 w-20 md:w-24 lg:w-full h-full overflow-hidden cursor-pointer border-2 transition-all",
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
                        </div>
                    </div>

                    {/* Right Side: Product Info (5/12 width) */}
                    <div className="lg:col-span-5 order-3">
                        <div className="lg:sticky lg:top-10">
                            <h1 className="text-3xl md:text-5xl font-medium text-[#182235] font-montserrat mb-4">
                                {singlePersonalizedItemData.name}
                            </h1>

                            <div className="mb-6">
                                <span className="text-2xl font-bold text-[#182235]">{singlePersonalizedItemData.price}</span>
                                <p className="text-secondary/60 text-sm mt-1">{singlePersonalizedItemData.unit}</p>
                            </div>

                            <p className="text-xs md:text-sm text-secondary/70 mb-8 border-l-2 border-[#DAB79C] pl-4 italic">
                                {singlePersonalizedItemData.deliveryInfo}
                            </p>

                            {/* Actions */}
                            <div className="flex flex-col gap-4 mb-10">
                                <div className="flex flex-row items-center gap-4">
                                    <div className="flex items-center justify-between border border-black/10 rounded-md bg-white w-32 h-12 px-4 shrink-0">
                                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-[#DAB79C]"><Minus size={16} /></button>
                                        <span className="font-bold text-lg">{quantity}</span>
                                        <button onClick={() => setQuantity(quantity + 1)} className="hover:text-[#DAB79C]"><Plus size={16} /></button>
                                    </div>

                                    <button className="flex-1 bg-[#182235] text-white h-12 rounded-lg font-bold hover:bg-opacity-90 transition-all">
                                        Add to Cart
                                    </button>
                                </div>

                                <button className="w-full bg-[#182235] text-white h-14 rounded-lg font-bold hover:bg-opacity-90 transition-all uppercase tracking-widest text-sm">
                                    Add your design
                                </button>
                            </div>

                            {/* Specs & Description */}
                            <div className="space-y-6 text-[#182235]">
                                <div className="border-t border-black/5 pt-6">
                                    <h3 className="font-bold text-xs uppercase tracking-widest mb-3 opacity-60">Description</h3>
                                    <p className="text-sm leading-relaxed opacity-80">
                                        {singlePersonalizedItemData.description}
                                    </p>
                                </div>

                                <div className="border-t border-black/5 pt-6">
                                    <h3 className="font-bold text-xs uppercase tracking-widest mb-3 opacity-60">Specifications</h3>
                                    <ul className="grid grid-cols-1 gap-2 text-sm opacity-80">
                                        <li className="font-semibold text-black/90 mb-1">{singlePersonalizedItemData.dimensions}</li>
                                        {singlePersonalizedItemData.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-1.5 w-1 h-1 bg-[#DAB79C] rounded-full shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
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
