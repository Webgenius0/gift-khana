import Image from "next/image";

export default function CTAButton({ item, index, }) {
    return (
        <div
            className="bg-[#F3E8E0] rounded-[60px] p-6 lg:p-8 flex flex-col items-center group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative"
        >
            {/* Image Container Area */}
            <div className="w-full aspect-5/2 relative flex smooth items-center justify-center">
                <div className="relative w-full h-full transition-transform duration-700 overflow-hidden rounded-[45px]">
                    <Image
                        src={item.buttonImage}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority={index < 2}
                    />
                </div>

                {
                    item?.element && (
                        <div
                            className={item?.classNameElement}
                        >
                            <Image
                                src={item.element}
                                alt={item.title}
                                className="object-cover"
                                priority={index < 2}
                            />

                            {/* <div className="w-full absolute bottom-0 h-[82%]  bg-red-400" /> */}
                        </div>
                    )
                }
            </div>


            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-[#182235] font-montserrat tracking-tight mt-6">
                {item.title}
            </h3>
        </div>
    );
}