import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState, forwardRef } from "react";
import { cn } from "@/lib/utils";
import CommonLabel from "./CommonLabel";

const CommonInput = forwardRef(({
    label,
    placeholder,
    type,
    floatingLabel,
    error,
    required,
    className,
    classNameLabel,
    ...props
}, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div className="flex flex-col gap-1.5 w-full transition-colors">
            {/* Label Type 1: Standard */}
            {!floatingLabel && label && (
                <CommonLabel
                    className={cn("text-[15px] font-medium text-custom-secondary/70 transition-colors", classNameLabel)}
                    label={label}
                    required={required}
                />
            )}

            <div className="relative group">
                <Input
                    ref={ref}
                    {...props}
                    type={isPasswordVisible ? "text" : type}
                    placeholder={floatingLabel ? " " : placeholder}
                    className={cn(
                        "peer w-full h-[64px] px-5 bg-white! border-[3px] border-custom-secondary rounded-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 transition-all text-xl font-medium text-custom-secondary shadow-none",
                        error && "border-destructive",
                        className
                    )}
                />

                {/* Focus indicator / Secondary dot */}
                <div className="absolute right-4 top-4 w-2.5 h-2.5 rounded-full bg-custom-secondary opacity-0 peer-focus:opacity-100 transition-opacity pointer-events-none"></div>

                {/* Label Type 2: Floating */}
                {floatingLabel && (
                    <label className={cn(
                        `absolute left-3 top-1/2 -translate-y-1/2 px-1 bg-white
                        text-sm font-bold text-custom-secondary uppercase tracking-wider
                        pointer-events-none transition-all duration-200 ease-in-out
                        peer-focus:top-0 peer-focus:text-[10px]
                        peer-not-placeholder-shown:top-0
                        peer-not-placeholder-shown:text-[10px]
                        `,
                        classNameLabel
                    )}>
                        {label} {required && <span className="text-destructive font-bold">*</span>}
                    </label>
                )}

                {/* Password Visibility Toggle */}
                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-md transition-colors"
                    >
                        {isPasswordVisible ? (
                            <Eye className="w-5 h-5 text-custom-secondary/60" />
                        ) : (
                            <EyeOff className="w-5 h-5 text-custom-secondary/60" />
                        )}
                    </button>
                )}

                {/* Error Message */}
                {error && (
                    <span className="absolute left-3 -bottom-6 px-1 text-[12px] font-medium text-destructive transition-all">
                        {error}
                    </span>
                )}
            </div>
        </div>
    );
});

CommonInput.displayName = "CommonInput";

export default CommonInput;
