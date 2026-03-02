"use client";
"use client";
import React, { useState } from "react";
import {
    Type,
    Image as ImageIcon,
    Square,
    Shapes,
    Smile,
    Layers as LayersIcon,
    X,
    Plus,
    Minus,
    Settings,
    HelpCircle,
    Share,
    MessageCircle,
    ChevronDown,
    Upload,
    Smartphone,
    Search as SearchIcon,
    Dog,
    Cat,
    Flower2,
    Utensils,
    Bug,
    Frame,
    ShoppingBag
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { singlePersonalizedItemData } from "@/cms/singlePersonalizedItemData";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent
} from "@/components/ui/tabs";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import BodyEditor from "@/Editor/BodyEditor";
import EditorDrawer from "@/components/EditorComponents/EditorDrawer/EditorDrawer";
import EditorOptions from "@/components/EditorComponents/EditorOptions";

export default function EditPage() {
    const [currentView, setCurrentView] = useState("Front");
    const [zoom, setZoom] = useState(100);

    const tools = [
        { id: "text", icon: Type, label: "Add Text" },
        { id: "image", icon: ImageIcon, label: "Add Image" },
        { id: "background", icon: Square, label: "Background" },
        { id: "elements", icon: Shapes, label: "Elements" },
        { id: "icons", icon: Smile, label: "Icons" },
        { id: "layers", icon: LayersIcon, label: "Layers" },
    ];

    const iconCategories = [
        { name: "Animals", icon: Bug, color: "bg-[#FF0080]" },
        { name: "Borders", icon: Frame, color: "bg-[#00E5FF]" },
        { name: "Cats", icon: Cat, color: "bg-[#800080]" },
        { name: "Dogs", icon: Dog, color: "bg-[#004D1A]" },
        { name: "Flowers", icon: Flower2, color: "bg-[#B2FFFF]" },
        { name: "Food", icon: Utensils, color: "bg-[#009933]" },
        { name: "Shopping", icon: ShoppingBag, color: "bg-[#182235]" },
        { name: "Vets", icon: Dog, color: "bg-[#FFCC33]" },
    ];

    return (
        <div className="h-[calc(100vh-64px)] relative flex bg-[#F0EAE4] overflow-hidden font-montserrat">

            <div className='hidden xl:block absolute left-10 top-1/2 -translate-y-1/2 z-10'>
                <EditorOptions />
            </div>


            <div className='absolute bottom-4 right-4 xl:hidden flex items-center gap-2'>
                <EditorDrawer />
            </div>


            {/* 3. Main Editor Area */}
            <div className="flex-1 bg-[#FBF3EA] relative flex items-center justify-center overflow-auto">
                {/* Canvas Container */}
                {/* <div className="relative w-[600px] h-[600px] bg-white shadow-sm border border-[#F3E8E0] flex items-center justify-center transition-all duration-300">

                    <div className="absolute inset-4 border-2 border-dashed border-[#DAB79C]/30 pointer-events-none rounded-sm">
                        <div className="absolute inset-0 border-2 border-dashed border-[#182235]/5 rounded-sm" />
                    </div>


                    <div className="w-full h-full relative opacity-[0.08] p-12 pointer-events-none">
                        <Image
                            src={singlePersonalizedItemData.images[0]}
                            alt="Template"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div> */}

                <BodyEditor />

                {/* Right Side: View Navigator */}
                <div className="absolute top-8 right-8 flex flex-col gap-4 z-10">
                    <div
                        onClick={() => setCurrentView("Front")}
                        className={cn(
                            "cursor-pointer rounded-2xl overflow-hidden border-4 transition-all p-1 bg-[#F3E8E0] shadow-md",
                            currentView === "Front" ? "border-[#182235] scale-105" : "border-transparent opacity-60 hover:opacity-100"
                        )}
                    >
                        <div className="relative w-28 h-28 bg-white rounded-xl overflow-hidden shadow-inner">
                            <Image src={singlePersonalizedItemData.images[0]} alt="Front" fill className="object-cover" />
                        </div>
                        <div className="bg-white py-1.5 px-3 text-center text-[11px] font-bold text-[#182235] mt-1 rounded-lg uppercase tracking-wider">Front</div>
                    </div>

                    <div
                        onClick={() => setCurrentView("Back")}
                        className={cn(
                            "cursor-pointer rounded-2xl overflow-hidden border-4 transition-all p-1 bg-[#F3E8E0] shadow-md",
                            currentView === "Back" ? "border-[#182235] scale-105" : "border-transparent opacity-60 hover:opacity-100"
                        )}
                    >
                        <div className="relative w-28 h-28 bg-white rounded-xl overflow-hidden shadow-inner font-bold flex items-center justify-center text-gray-400 italic">
                            <Image src={singlePersonalizedItemData.images[2]} alt="Back" fill className="object-cover" />
                        </div>
                        <div className="bg-white py-1.5 px-3 text-center text-[11px] font-bold text-[#182235] mt-1 rounded-lg uppercase tracking-wider">Back</div>
                    </div>
                </div>

                {/* Bottom Toolbar: Zoom & Controls */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
                    <div className="flex items-center bg-white rounded-full shadow-[0_10px_30px_rgb(0,0,0,0.12)] h-12 px-2 overflow-hidden">
                        <button className="p-2.5 hover:bg-[#F3E8E0] rounded-full text-[#182235] transition-colors" onClick={() => setZoom(Math.max(10, zoom - 10))}>
                            <Minus size={18} />
                        </button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-1.5 px-4 h-8 border-x border-[#F3E8E0] hover:bg-[#F3E8E0]/20 transition-all outline-none">
                                    <span className="text-sm font-bold text-[#182235] w-12 text-center">{zoom}%</span>
                                    <ChevronDown size={14} className="text-[#182235]/40" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="rounded-xl p-2 bg-white shadow-xl border-[#F3E8E0]">
                                {[50, 75, 100, 150, 200, "Fit"].map((val) => (
                                    <DropdownMenuItem key={val} className="rounded-lg font-bold text-[#182235] hover:bg-[#F3E8E0]/40 px-3 py-2 cursor-pointer">
                                        {typeof val === 'number' ? `${val}%` : val}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <button className="p-2.5 hover:bg-[#F3E8E0] rounded-full text-[#182235] transition-colors" onClick={() => setZoom(Math.min(200, zoom + 10))}>
                            <Plus size={18} />
                        </button>
                    </div>

                    {[Settings, HelpCircle, Share].map((Icon, i) => (
                        <button
                            key={i}
                            className="w-12 h-12 bg-white rounded-full shadow-[0_10px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-[#182235] hover:bg-[#F3E8E0] transition-all hover:-translate-y-1"
                        >
                            <Icon size={20} />
                        </button>
                    ))}
                </div>

                {/* Chat Bubble Float */}
                {/* <div className="absolute bottom-10 right-10">
                    <button className="w-16 h-16 bg-white shadow-[0_10px_30px_rgb(0,0,0,0.12)] rounded-full border border-gray-100 flex items-center justify-center text-[#182235] hover:scale-110 active:scale-95 transition-all">
                        <MessageCircle size={32} />
                    </button>
                </div> */}
            </div>
        </div>
    );
}