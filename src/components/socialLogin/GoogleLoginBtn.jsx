import React from 'react';
import GoogleIcon from '../svg/GoogleIcon';

const GoogleLoginBtn = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full h-[64px] bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-4 hover:bg-gray-50 transition-all font-semibold text-custom-secondary text-[17px] shadow-sm hover:shadow-md active:scale-[0.99]"
        >
            <GoogleIcon className="w-7 h-7" />
            <span className="flex gap-2">
                <span className="font-bold">Continue</span>
                <span className="font-medium opacity-80">with Google</span>
            </span>
        </button>
    );
};

export default GoogleLoginBtn;
