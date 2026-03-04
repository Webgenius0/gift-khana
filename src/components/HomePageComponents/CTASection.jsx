'use client'

import React, { useState } from "react";
import CommonContainer from "../Shared/CommonContainer/CommonContainer";
import { ctaSectionData } from "@/cms/ctaSectionData";
import CTAButton from "../CTA/CTAButton";

export default function CTASection() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section
            className="py-10 max-w-480 mx-auto"
            onClick={() => setActiveIndex(null)}
        >
            <CommonContainer>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {ctaSectionData.map((item, index) => (
                        <div
                            key={index}
                            className="w-full flex even:justify-end"
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveIndex(index);
                            }}
                        >
                            <CTAButton
                                item={item}
                                index={index}
                                isActive={activeIndex === index}
                                className="w-full sm:w-[65%] lg:w-[80%] lg:mx-auto"
                            />
                        </div>
                    ))}
                </div>
            </CommonContainer>
        </section>
    );
}