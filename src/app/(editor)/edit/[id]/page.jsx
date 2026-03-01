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

            <Tabs defaultValue="text" orientation="vertical" className="absolute top-1/2 -translate-y-1/2 left-4 h-fit flex flex-row items-center gap-4 z-40">
                {/* 1. Floating Tool Sidebar */}
                <TabsList className="w-[84px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-none flex flex-col py-4 gap-1 h-auto rounded-[32px] p-2">
                    {tools.map((tool) => (
                        <TabsTrigger
                            key={tool.id}
                            value={tool.id}
                            className={cn(
                                "flex flex-col items-center justify-center py-4 px-0 gap-1 transition-all rounded-[24px] border-none data-[state=active]:bg-[#E0FAFF] data-[state=active]:text-[#182235] text-[#182235]/60 hover:text-[#182235] hover:bg-[#F3E8E0]/40 w-full shadow-none",
                                "focus-visible:ring-0 focus-visible:outline-none"
                            )}
                        >
                            <div className="mb-0.5">
                                <tool.icon size={22} className={cn(tool.id === "text" && "stroke-[2.5px]")} />
                            </div>
                            <span className="text-[10px] font-bold text-center leading-tight whitespace-pre-line">
                                {tool.label.replace(' ', '\n')}
                            </span>
                        </TabsTrigger>
                    ))}
                    {/* Less / Close Button at bottom */}
                    <button className="mt-2 flex flex-col items-center justify-center py-4 text-[#182235]/60 hover:text-red-500 transition-all w-full">
                        <div className="mb-0.5"><X size={22} /></div>
                        <span className="text-[10px] font-bold">Less</span>
                    </button>
                </TabsList>

                {/* 2. Floating Content Panel */}
                {tools.map((tool) => (
                    <TabsContent key={tool.id} value={tool.id} className="w-[340px] bg-white shadow-[0_8px_40px_rgb(0,0,0,0.16)] rounded-[32px] flex flex-col h-[580px] mt-0">
                        <div className="p-8 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-[#182235]">
                                {tool.id === 'text' && "Add text to your design"}
                                {tool.id === 'image' && "Add images to your design"}
                                {tool.id === 'icons' && "Icons"}
                                {tool.id === 'layers' && "Layers"}
                                {tool.id === 'background' && "Background"}
                                {tool.id === 'elements' && "Elements"}
                            </h2>
                            <button className="p-1 hover:bg-[#F3E8E0] rounded-full transition-all text-[#182235]/40">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="px-8 flex-1 overflow-y-auto">
                            {/* ADD TEXT PANEL */}
                            {tool.id === "text" && (
                                <div className="flex flex-col gap-8">
                                    <p className="text-sm font-semibold text-[#182235]/60">
                                        Click the button below to add text to your design
                                    </p>
                                    <button className="w-full bg-[#1A1A9E] text-white py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-lg border-2 border-[#1A1A9E]">
                                        <Type size={20} strokeWidth={3} />
                                        Add a text box
                                    </button>
                                </div>
                            )}

                            {/* ADD IMAGE PANEL */}
                            {tool.id === "image" && (
                                <div className="flex flex-col gap-8">
                                    <div className="space-y-2">
                                        <p className="text-sm font-semibold text-[#182235]/60 leading-relaxed">
                                            Add your images to personalize this design.
                                            Already have an account? <span className="text-[#1A1A9E] cursor-pointer hover:underline font-bold">Sign In</span>
                                        </p>
                                    </div>
                                    <div className="h-px bg-[#F3E8E0] w-full my-2" />
                                    <div className="flex flex-col gap-4">
                                        <button className="w-full bg-white text-[#1A1A9E] border-2 border-[#1A1A9E] py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#F3E8E0]/20 transition-all">
                                            <Upload size={20} />
                                            Upload from computer
                                        </button>
                                        <button className="w-full bg-white text-[#1A1A9E] border-2 border-[#1A1A9E] py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#F3E8E0]/20 transition-all">
                                            <Smartphone size={20} />
                                            Upload from your phone
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* ICONS PANEL */}
                            {tool.id === "icons" && (
                                <div className="flex flex-col gap-6">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search for icons"
                                            className="w-full bg-white border-2 border-[#F3E8E0] rounded-full py-3.5 px-6 pr-14 outline-none focus:border-[#1A1A9E] transition-all text-sm font-medium"
                                        />
                                        <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1A1A9E] p-2.5 rounded-full text-white cursor-pointer hover:bg-opacity-90 transition-all">
                                            <SearchIcon size={20} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 pb-8">
                                        {iconCategories.map((cat) => (
                                            <div
                                                key={cat.name}
                                                className={cn(
                                                    "h-28 rounded-[20px] flex flex-col items-center justify-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95",
                                                    cat.color
                                                )}
                                            >
                                                <cat.icon size={36} className="text-white opacity-90 stroke-[1.5px]" />
                                                <span className="text-white font-bold text-xs uppercase tracking-widest">{cat.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* LAYERS PANEL */}
                            {tool.id === "layers" && (
                                <div className="flex flex-col gap-4">
                                    <div className="bg-[#F8F9FA] p-4 rounded-2xl flex items-center gap-4 group cursor-move hover:bg-[#F1F3F5] transition-all relative">
                                        <div className="w-1.5 h-full bg-[#CED4DA] rounded-full absolute left-3 top-0 bottom-0 py-8" />
                                        <div className="ml-2 bg-[#F3E8E0] p-1.5 rounded-lg"><ImageIcon size={18} className="text-[#182235]/60" /></div>
                                        <div className="w-16 h-10 relative bg-white rounded border border-[#000000]/10 overflow-hidden ml-auto">
                                            <Image src={singlePersonalizedItemData.images[0]} alt="layer" fill className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="bg-[#F8F9FA] p-4 rounded-2xl flex items-center gap-4 group cursor-move hover:bg-[#F1F3F5] transition-all">
                                        <div className="bg-[#F3E8E0] p-1.5 rounded-lg"><Square size={18} className="text-[#182235]/60" /></div>
                                        <div className="w-16 h-10 border-2 border-dashed border-[#000000]/10 rounded ml-auto flex items-center justify-center text-[10px] text-[#000000]/20 font-bold italic">
                                            Transparent
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>

            {/* 3. Main Editor Area */}
            <div className="flex-1 bg-[#FBF3EA] relative flex items-center justify-center overflow-auto">
                {/* Canvas Container */}
                <div className="relative w-[600px] h-[600px] bg-white shadow-sm border border-[#F3E8E0] flex items-center justify-center transition-all duration-300">
                    {/* Safe Area Dotted Border */}
                    <div className="absolute inset-4 border-2 border-dashed border-[#DAB79C]/30 pointer-events-none rounded-sm">
                        <div className="absolute inset-0 border-2 border-dashed border-[#182235]/5 rounded-sm" />
                    </div>

                    {/* Product Template Background */}
                    <div className="w-full h-full relative opacity-[0.08] p-12 pointer-events-none">
                        <Image
                            src={singlePersonalizedItemData.images[0]}
                            alt="Template"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

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
                <div className="absolute bottom-10 right-10">
                    <button className="w-16 h-16 bg-white shadow-[0_10px_30px_rgb(0,0,0,0.12)] rounded-full border border-gray-100 flex items-center justify-center text-[#182235] hover:scale-110 active:scale-95 transition-all">
                        <MessageCircle size={32} />
                    </button>
                </div>
            </div>
        </div>
    );
}