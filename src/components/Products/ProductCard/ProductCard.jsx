import { ChevronRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ProductCard({ product, index, variant = "default" }) {
    const isWhite = variant === "white";

    return (
        <div className={cn(
            "group cursor-pointer transition-all duration-500",
            isWhite && "bg-white rounded-[24px] md:rounded-[32px] p-2 md:p-3 hover:shadow-xl hover:-translate-y-2"
        )}>
            {/* Product Image Container */}
            <div className={cn(
                "relative aspect-square rounded-xl lg:rounded-2xl overflow-hidden mb-4 transition-all duration-500 ease-out",
                !isWhite && "shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:-translate-y-2",
                isWhite && "bg-[#F3E8E0] group-hover:scale-[0.98]"
            )}>

                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={cn(
                        "object-cover transition-transform duration-700",
                        !isWhite && "group-hover:scale-105",
                        isWhite && "group-hover:scale-110"
                    )}
                />

                {/* Heart Icon */}
                <button className="absolute top-3 right-3 md:top-4 md:right-4 text-[#182235]/60 hover:text-red-500 transition-colors z-20">
                    <Heart className="w-6 h-6 md:w-8 md:h-8 transition-all hover:scale-110" />
                </button>
            </div>

            {/* Product Info */}
            <div className={cn(
                "flex flex-col gap-1 px-1",
                isWhite && "pb-2 md:pb-4 px-2 md:px-3"
            )}>
                <h3 className="text-secondary opacity-90 text-sm md:text-base font-medium font-montserrat tracking-tight">
                    {product.name}
                </h3>
                <p className="text-[#182235] font-bold text-base md:text-lg tracking-tight">
                    {product.price}
                </p>

                {/* Explore Design Link */}
                <Link
                    href={product.link || "#"}
                    className="flex items-center gap-2 text-[#182235] font-bold text-xs md:text-sm mt-1"
                >
                    <span>Explore design</span>
                    <div className="bg-[#182235] rounded-full p-0.5 transition-transform duration-300 group-hover:translate-x-1.5">
                        <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                </Link>
            </div>
        </div>
    );
}
