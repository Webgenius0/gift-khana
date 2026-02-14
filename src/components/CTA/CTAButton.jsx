import Image from "next/image";

export default function CTAButton({ item, index }) {
    return (
        <div
            className="bg-[#F3E8E0] rounded-[36px] md:rounded-[60px] p-3 md:p-6 lg:p-8 flex flex-col items-center group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative"
        >
            {/* Image Container Area */}
            {/* Adjusted aspect ratio: 16/9 for mobile, 5/2 for large screens */}
            <div className="w-full aspect-5/2 relative flex items-center justify-center">
                <div className="relative w-full h-full transition-transform duration-700 overflow-hidden rounded-[26px] md:rounded-[45px]">
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
                    <div className={`${item?.classNameElement} absolute`}>
                        <Image
                            src={item.element}
                            alt={item.title}
                            width={500} // Added explicit width/height for standard Img behavior
                            height={500}
                            className="object-contain w-full h-auto"
                            priority={index < 2}
                        />
                    </div>
                )}
            </div>

            {/* Title */}
            {/* Dynamic text sizing from mobile to desktop */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#182235] font-montserrat tracking-tight mt-2 md:mt-6 text-center">
                {item.title}
            </h3>
        </div>
    );
}