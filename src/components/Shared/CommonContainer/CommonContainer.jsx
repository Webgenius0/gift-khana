import { cn } from "@/lib/utils";

export default function CommonContainer({ children, className }) {
    return (
        <div className={cn(
            "px-4 py-4 container mx-auto relative",
            className
        )}>
            {children}
        </div>
    );
}