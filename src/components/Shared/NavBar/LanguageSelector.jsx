import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function LanguageSelector() {
    return (
        <div className="flex items-start justify-center">
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 outline-none group">
                    <span className="text-[#4A4E69] text-lg font-medium tracking-tight">
                        English
                    </span>
                    <ChevronDown
                        size={16}
                        className="text-[#1D2433] fill-current mt-1 transition-transform group-data-[state=open]:rotate-180"
                    />
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" className="bg-white/90 backdrop-blur-sm border-none shadow-lg">
                    <DropdownMenuItem className="cursor-pointer">
                        English
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                        Arabic
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}