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
        <div className="flex flex-col gap-2 w-full">
            {/* Label Type 1: Standard */}
            {!floatingLabel && label && (
                <CommonLabel className={classNameLabel} label={label} required={required} />
            )}

            <div className="relative group">
                <Input
                    ref={ref}
                    {...props}
                    type={isPasswordVisible ? "text" : type}
                    placeholder={floatingLabel ? " " : placeholder}
                    className={cn(
                        "h-10 border-border focus-visible:border-primary-400 focus-visible:ring-0 bg-white placeholder:text-text-secondary/50 shadow-none peer transition-all",
                        error && "border-destructive focus-visible:border-destructive",
                        className
                    )}
                />

                {/* Label Type 2: Floating */}
                {floatingLabel && (
                    <label className={
                        `absolute left-3 top-1/2 -translate-y-1/2 px-1 bg-white
                        text-sm font-bold text-text-secondary uppercase tracking-wider 
                        pointer-events-none transition-all duration-200 ease-in-out
                        peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-primary-600
                        peer-not-placeholder-shown:top-0 
                        peer-not-placeholder-shown:text-[10px]
                        `,
                        classNameLabel
                    }>
                        {label} {required && <span className="text-destructive font-bold">*</span>}
                    </label>
                )}

                {/* Focus indicator / Red dot (optional feature from original) */}
                <div className="absolute right-2 top-2 w-1.5 h-1.5 rounded-full bg-primary-600 opacity-0 peer-focus:opacity-100 transition-opacity"></div>

                {/* Password Visibility Toggle */}
                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-bg-primary rounded-md transition-colors"
                    >
                        {isPasswordVisible ? (
                            <Eye className="w-4 h-4 text-text-secondary" />
                        ) : (
                            <EyeOff className="w-4 h-4 text-text-secondary" />
                        )}
                    </button>
                )}

                {/* Error Message */}
                {error && (
                    <span className="absolute left-3 bottom-0 translate-y-1/2 px-1 bg-white text-[10px] font-bold text-destructive uppercase tracking-wider pointer-events-none z-10">
                        {error}
                    </span>
                )}
            </div>
        </div>
    );
});

CommonInput.displayName = "CommonInput";

export default CommonInput;