import React from 'react';
import { cn } from '@/lib/utils';

const AuthFormContainer = ({ children, className, ...props }) => {
    return (
        <form className={cn("space-y-6", className)} {...props}>
            {children}
        </form>
    );
};

export default AuthFormContainer;
