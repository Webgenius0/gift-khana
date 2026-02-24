import React from 'react';
import AppleIcon from '../svg/AppleIcon';

const AppleLoginBtn = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full h-[64px] bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-4 hover:bg-gray-50 transition-all font-semibold text-custom-secondary text-[17px] shadow-sm hover:shadow-md active:scale-[0.99]"
        >
            <AppleIcon className="w-7 h-7" />
            <span className="flex gap-2">
                <span className="font-bold">Continue</span>
                <span className="font-medium opacity-80">with Apple</span>
            </span>
        </button>
    );
};

export default AppleLoginBtn;
