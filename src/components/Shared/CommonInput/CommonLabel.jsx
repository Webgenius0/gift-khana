import { cn } from "@/lib/utils";

export default function CommonLabel({ label, required, className }) {
    return (
        <label className={cn("text-sm font-medium text-text-bold", className)}>
            {label} {required && <span className="text-destructive font-bold">*</span>}
        </label>
    );
}