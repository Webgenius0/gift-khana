import React from 'react';
import Link from 'next/link';

const AuthAgreement = () => {
    return (
        <p className="text-[14px] text-custom-secondary/80 leading-[1.6]">
            By clicking &quot;Continue,&quot; I agree to the{" "}
            <Link href="#" className="underline hover:text-custom-secondary transition-colors underline-offset-2">
                Gift Khana User Agreement
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline hover:text-custom-secondary transition-colors underline-offset-2">
                Privacy Notice
            </Link>.
        </p>
    );
};

export default AuthAgreement;
