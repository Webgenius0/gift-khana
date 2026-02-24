import { Textarea } from "@/components/ui/textarea";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import CommonLabel from "./CommonLabel";

const CommonTextArea = forwardRef(({
    label,
    placeholder,
    floatingLabel,
    error,
    required,
    className,
    classNameLabel,
    classNameContainer,
    rows = 4,
    ...props
}, ref) => {
    return (
        <div className={cn("flex flex-col gap-2 w-full", classNameContainer)}>
            {/* Label Type 1: Standard */}
            {!floatingLabel && label && (
                <CommonLabel className={classNameLabel} label={label} required={required} />
            )}

            <div className="relative group">
                <Textarea
                    ref={ref}
                    {...props}
                    rows={rows}
                    placeholder={floatingLabel ? " " : placeholder}
                    className={cn(
                        "min-h-[100px] resize-none border-border focus-visible:border-primary-400 focus-visible:ring-0 bg-white placeholder:text-text-secondary/50 shadow-none peer transition-all",
                        error && "border-destructive focus-visible:border-destructive",
                        className
                    )}
                />

                {/* Label Type 2: Floating */}
                {floatingLabel && (
                    <label className={cn(
                        `absolute left-3 top-4 -translate-y-1/2 px-1 bg-white
                        text-sm font-bold text-text-secondary uppercase tracking-wider 
                        pointer-events-none transition-all duration-200 ease-in-out
                        peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-primary-600
                        peer-not-placeholder-shown:top-0 
                        peer-not-placeholder-shown:text-[10px]
                        `,
                        classNameLabel
                    )}>
                        {label} {required && <span className="text-destructive font-bold">*</span>}
                    </label>
                )}

                {/* Focus indicator / Red dot (optional feature from original) */}
                <div className="absolute right-2 top-2 w-1.5 h-1.5 rounded-full bg-primary-600 opacity-0 peer-focus:opacity-100 transition-opacity"></div>

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

CommonTextArea.displayName = "CommonTextArea";

export default CommonTextArea;
