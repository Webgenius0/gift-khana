"use client";
import React, { useState } from "react";
import {
    Type,
    Image as ImageIcon,
    Square,
    Shapes,
    Smile,
    Layers,
    X,
    Plus,
    Minus,
    Settings,
    HelpCircle,
    Share,
    MessageCircle,
    ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { singlePersonalizedItemData } from "@/cms/singlePersonalizedItemData";

export default function EditPage() {
    const [activeTool, setActiveTool] = useState("Add Text");
    const [currentView, setCurrentView] = useState("Front");
    const [zoom, setZoom] = useState(100);

    const tools = [
        { id: "Add Text", icon: Type, label: "Add Text" },
        { id: "Add Image", icon: ImageIcon, label: "Add Image" },
        { id: "Background", icon: Square, label: "Background" },
        { id: "Elements", icon: Shapes, label: "Elements" },
        { id: "Icons", icon: Smile, label: "Icons" },
        { id: "Layers", icon: Layers, label: "Layers" },
    ];

    return (
        <div className="h-[calc(100vh-64px)] flex relative overflow-hidden font-montserrat">

            {/* 1. Left Vertical Toolbar */}
            <div className="w-[72px] bg-white border-r border-[#F3E8E0] flex flex-col py-4 gap-2 z-30">
                {tools.map((tool) => (
                    <button
                        key={tool.id}
                        onClick={() => setActiveTool(tool.id)}
                        className={cn(
                            "flex flex-col items-center justify-center py-3 px-1 gap-1 transition-all group",
                            activeTool === tool.id ? "bg-[#E0F2F1] text-[#182235]" : "text-[#182235]/60 hover:text-[#182235]"
                        )}
                    >
                        <div className={cn(
                            "p-2 rounded-lg transition-all",
                            activeTool === tool.id ? "bg-cyan-100" : "group-hover:bg-[#F3E8E0]"
                        )}>
                            <tool.icon size={20} />
                        </div>
                        <span className="text-[10px] font-bold text-center leading-tight">
                            {tool.label.split(' ').map((word, i) => (
                                <React.Fragment key={i}>{word}<br /></React.Fragment>
                            ))}
                        </span>
                    </button>
                ))}
            </div>

            {/* 2. Left Panel: Contextual Options */}
            <div className="w-[280px] bg-white shadow-xl flex flex-col z-20 absolute left-[72px] top-4 bottom-4 rounded-[20px] ml-4 transition-all duration-300">
                <div className="p-6 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-[#182235]">{activeTool} to your design</h2>
                    <button className="p-1 hover:bg-[#F3E8E0] rounded-full transition-all text-[#182235]/40" onClick={() => setActiveTool(null)}>
                        <X size={20} />
                    </button>
                </div>

                <div className="px-6 flex-1 overflow-y-auto">
                    {activeTool === "Add Text" && (
                        <div className="flex flex-col gap-6">
                            <p className="text-xs font-semibold text-[#182235]/60">
                                Click the button below to add text to your design
                            </p>
                            <button className="w-full bg-[#182235] text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-md">
                                <Type size={20} />
                                Add a text box
                            </button>
                        </div>
                    )}
                    {/* Placeholder for other tools */}
                    {activeTool !== "Add Text" && activeTool && (
                        <div className="flex flex-col items-center justify-center h-full text-[#182235]/40 text-sm italic py-20">
                            {activeTool} options coming soon
                        </div>
                    )}
                </div>
            </div>

            {/* 3. Main Editor Area */}
            <div className="flex-1 bg-[#FBF3EA] relative flex items-center justify-center overflow-auto">
                {/* Canvas Container */}
                <div className="relative w-[600px] h-[600px] bg-white shadow-sm border border-[#F3E8E0] flex items-center justify-center transition-all duration-500 hover:shadow-lg">
                    {/* Safe Area Dotted Border */}
                    <div className="absolute inset-4 border-2 border-dashed border-[#DAB79C]/30 pointer-events-none rounded-sm">
                        <div className="absolute inset-0 border-2 border-dashed border-[#182235]/5 rounded-sm" />
                    </div>

                    {/* Product Base Image (Pillow) */}
                    <div className="w-full h-full relative p-12">
                        <div className="w-full h-full relative opacity-10">
                            <Image
                                src={singlePersonalizedItemData.images[0]}
                                alt="Product Template"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side: View Navigator (Front/Back) */}
                <div className="absolute top-8 right-8 flex flex-col gap-4 z-10">
                    <div
                        onClick={() => setCurrentView("Front")}
                        className={cn(
                            "group cursor-pointer rounded-xl overflow-hidden border-2 transition-all p-1 bg-[#F3E8E0]",
                            currentView === "Front" ? "border-[#182235] shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                        )}
                    >
                        <div className="relative w-24 h-24 bg-white rounded-lg overflow-hidden">
                            <Image src={singlePersonalizedItemData.images[0]} alt="Front" fill className="object-cover" />
                        </div>
                        <div className="bg-white py-1 px-2 text-center text-[10px] font-bold text-[#182235] mt-1 rounded-sm">Front</div>
                    </div>

                    <div
                        onClick={() => setCurrentView("Back")}
                        className={cn(
                            "group cursor-pointer rounded-xl overflow-hidden border-2 transition-all p-1 bg-[#F3E8E0]",
                            currentView === "Back" ? "border-[#182235] shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                        )}
                    >
                        <div className="relative w-24 h-24 bg-white rounded-lg overflow-hidden">
                            <Image src={singlePersonalizedItemData.images[2]} alt="Back" fill className="object-cover" />
                        </div>
                        <div className="bg-white py-1 px-2 text-center text-[10px] font-bold text-[#182235] mt-1 rounded-sm">Back</div>
                    </div>
                </div>

                {/* Bottom Toolbar: Zoom & Controls */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                    <div className="flex items-center bg-white rounded-full shadow-lg h-10 px-1">
                        <button className="p-2 hover:bg-[#F3E8E0] rounded-full text-[#182235]" onClick={() => setZoom(Math.max(10, zoom - 10))}>
                            <Minus size={16} />
                        </button>
                        <div className="flex items-center gap-1 px-3 border-x h-6 border-[#F3E8E0]">
                            <span className="text-xs font-bold text-[#182235] w-10 text-center">{zoom}%</span>
                            <ChevronDown size={14} className="text-[#182235]/40" />
                        </div>
                        <button className="p-2 hover:bg-[#F3E8E0] rounded-full text-[#182235]" onClick={() => setZoom(Math.min(200, zoom + 10))}>
                            <Plus size={16} />
                        </button>
                    </div>

                    {["Settings", "Help", "Share"].map((label, i) => (
                        <button
                            key={label}
                            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#182235] hover:bg-[#F3E8E0] transition-all"
                        >
                            {i === 0 && <Settings size={18} />}
                            {i === 1 && <HelpCircle size={18} />}
                            {i === 2 && <Share size={18} />}
                        </button>
                    ))}
                </div>

                {/* Chat Bubble Float */}
                <div className="absolute bottom-6 right-6">
                    <button className="w-14 h-14 bg-white shadow-xl rounded-full border border-[#182235] flex items-center justify-center text-[#182235] hover:scale-105 transition-all">
                        <MessageCircle size={28} />
                    </button>
                </div>
            </div>
        </div>
    );
}