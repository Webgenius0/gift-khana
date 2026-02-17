import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";


export default function HeaderSearch({ className }) {
    return (
        <div className={cn("flex flex-1 relative group", className)}>
            <input
                type="text"
                placeholder="Search for products..."
                className="w-full bg-white rounded-full pl-8 pr-16 py-3 text-gray-500 placeholder-gray-400 outline-none shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-transparent transition-all focus:border-[#DAB79C]"
            />
            <Button variant="secondary" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 p-0" size="icon">
                <Search size={20} strokeWidth={2.5} />
            </Button>
        </div>
    );
}