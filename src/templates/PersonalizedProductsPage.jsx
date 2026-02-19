"use client";
import React from "react";
import CommonContainer from "@/components/Shared/CommonContainer/CommonContainer";
import ProductCard from "@/components/Products/ProductCard/ProductCard";
import { personalizedProductsData } from "@/cms/personalizedProductsData";
import DynamicBreadcrumb from "@/components/Shared/DynamicBreadcrumb/DynamicBreadcrumb";
import { Search } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export default function PersonalizedProductsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleFilterChange = (key, value) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value && value !== "all") {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        router.push(`?${params.toString()}`);
    };

    return (
        <div className="bg-[#FBF3EA] min-h-screen pb-20">
            <CommonContainer className="pt-8 md:pt-12">
                {/* Page Header */}
                <div className="flex flex-col items-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-medium text-[#182235] font-montserrat mb-8 text-center">
                        Personalized Custom Gifts
                    </h1>

                    {/* In-page Search Bar */}
                    <div className="w-full max-w-2xl relative group">
                        <input
                            type="text"
                            placeholder="Search for products or designs"
                            className="w-full bg-white  pl-6 pr-14 py-4 text-gray-500 placeholder-gray-400 outline-none shadow-sm border border-transparent transition-all focus:border-[#DAB79C]"
                        />
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={24} />
                        </div>
                    </div>
                </div>

                {/* Breadcrumbs and Results Count */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <DynamicBreadcrumb />
                    <span className="text-sm font-medium text-secondary/60 uppercase tracking-wider">
                        {personalizedProductsData.length} results
                    </span>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-4 mb-10 pb-4 border-b border-secondary/10">
                    <Select onValueChange={(v) => handleFilterChange("category", v)}>
                        <SelectTrigger className="w-[180px] bg-transparent! border-none shadow-none text-secondary font-bold uppercase tracking-wider text-xs p-0 h-auto focus:ring-0">
                            <SelectValue placeholder="Refine by Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="apparel">Apparel</SelectItem>
                            <SelectItem value="home">Home Decor</SelectItem>
                            <SelectItem value="accessories">Accessories</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select onValueChange={(v) => handleFilterChange("price", v)}>
                        <SelectTrigger className="w-[100px] bg-transparent! border-none shadow-none text-secondary font-bold uppercase tracking-wider text-xs p-0 h-auto focus:ring-0">
                            <SelectValue placeholder="Price" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Any Price</SelectItem>
                            <SelectItem value="0-100">0 - 100 LE</SelectItem>
                            <SelectItem value="100-200">100 - 200 LE</SelectItem>
                            <SelectItem value="200+">200+ LE</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select onValueChange={(v) => handleFilterChange("filter", v)}>
                        <SelectTrigger className="w-[120px] bg-transparent! border-none shadow-none text-secondary font-bold uppercase tracking-wider text-xs p-0 h-auto focus:ring-0">
                            <SelectValue placeholder="Add Filter" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Clear Filters</SelectItem>
                            <SelectItem value="newest">Newest</SelectItem>
                            <SelectItem value="popular">Popular</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {personalizedProductsData.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                            variant="white"
                        />
                    ))}
                </div>
            </CommonContainer>
        </div>
    );
}
