import React from "react";
import CommonContainer from "../Shared/CommonContainer/CommonContainer";
import { ctaSectionData } from "@/cms/ctaSectionData";
import CTAButton from "../CTA/CTAButton";

export default function CTASection() {
    return (
        <section className="py-10 max-w-[1920px] mx-auto">
            <CommonContainer>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {ctaSectionData.map((item, index) => (
                        <div
                            key={index}
                            className="w-full flex even:justify-end" >
                            <CTAButton
                                item={item}
                                index={index}
                                className="w-full sm:w-[65%] lg:w-[80%] lg:mx-auto"
                            />
                        </div>
                    ))}
                </div>
            </CommonContainer>
        </section>
    );
}