import React from 'react';

const AuthHeader = ({ title, subtitle }) => {
    return (
        <>
            <h1 className="text-[28px] font-bold text-custom-secondary mb-1 leading-tight">
                {title}
            </h1>
            <p className="text-[17px] text-custom-secondary/80 mb-10">
                {subtitle}
            </p>
        </>
    );
};

export default AuthHeader;
