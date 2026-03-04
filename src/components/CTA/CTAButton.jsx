import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CTAButton({ item, index, className, isActive }) {
    return (
        <div
            className={cn(
                "bg-[#F3E8E0] rounded-[38px] lg:rounded-[60px] p-3 md:p-4 flex flex-col items-center group cursor-pointer transition-all duration-500 relative",
                isActive ? "shadow-2xl -translate-y-2 scale-[1.02]" : "hover:shadow-2xl hover:-translate-y-2 lg:hover:scale-[1.02]",
                className
            )}
        >
            <div className="w-full aspect-5/2 relative flex items-center justify-center">
                <div className="relative w-full h-full transition-transform duration-700 overflow-hidden rounded-[26px] lg:rounded-[44px]">
                    <Image
                        src={item.buttonImage}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority={index < 2}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {item?.element && (
                    <div className={cn(
                        "smooth",
                        item.classNameElement,
                        isActive ? item.classNameElementActive : ""
                    )}>
                        <Image
                            src={item.element}
                            alt={item.title}
                            width={500}
                            height={500}
                            className="object-contain w-full h-auto"
                            priority={true}
                            unoptimized={true}
                        />
                    </div>
                )}
            </div>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#182235] font-montserrat tracking-tight mt-2 text-center">
                {item.title}
            </h3>
        </div>
    );
}