import { ChevronRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product, index }) {
    return (
        <div className="group cursor-pointer">
            {/* Product Image Container */}
            <div className="relative aspect-square rounded-[30px] overflow-hidden mb-4 
                shadow-[0_8px_30px_rgb(0,0,0,0.04)] /* Default subtle shadow */
                border border-black/5 /* Subtle border to define the shape */
                transition-all duration-500 ease-out 
                group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] /* Hover shadow */
                group-hover:-translate-y-2">

                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Heart Icon */}
                <button className="absolute top-4 right-4 text-[#182235]/60 hover:text-red-500 transition-colors z-20">
                    <Heart className="w-8 h-8 transition-all hover:scale-110" />
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