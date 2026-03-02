'use client'



import { useState } from "react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import StickersOptions from "./StickersOptions/StickersOptions"
import editorOptionsData from "@/data/editorOptionsData"
import EditorTextInsert from "./Editor/EditorTextInsert"
import ImageOptions from "./Editor/ImageOptions"
import LayersOptions from "./Editor/LayersOptions"
import BackgroundOptions from "./Editor/BackgroundOptions"

const EditorOptions = () => {
    const [activeTab, setActiveTab] = useState(null)
    const [open, setOpen] = useState(false)
    const isDisabled = false;

    const handleClick = (key) => {
        if (activeTab === key) {
            setActiveTab(null)
            setOpen(false)
        }
        else {
            setActiveTab(key)
            setOpen(true)
        }
    }

    return (
        <DropdownMenu disabled open={isDisabled ? false : open} modal={false}>
            <DropdownMenuTrigger asChild>
                <div className={`${isDisabled ? 'cursor-not-allowed opacity-50 pointer-events-none' : ''} shadow-sm flex flex-col gap-1 bg-white text-center p-2 rounded-2xl max-h-max`}>
                    {editorOptionsData?.map((item) => {
                        const Icon = item.icon
                        return (
                            <button
                                key={item.key}
                                onClick={() => handleClick(item.key)}
                                className={`cursor-pointer flex rounded-xl flex-col items-center justify-center px-2 py-4 gap-2 font-semibold
                            ${activeTab === item.key ? 'bg-primary/50' : ''}`}
                            >
                                <Icon className="scale-130" />
                                <p className="text-xs">{item.label}</p>
                            </button>
                        )
                    })}
                </div>
            </DropdownMenuTrigger>


            {open && !!activeTab && (
                <>
                    {/* ✅ Image Content */}
                    {activeTab === 'image' && <ImageOptions />}

                    {/* ✅ Text Content */}
                    {activeTab === 'text' && <EditorTextInsert />}

                    {/* ✅ Text Content */}
                    {activeTab === 'bg' && <BackgroundOptions />}

                    {/* ✅ Sticker Content */}
                    {activeTab === 'icons' && <StickersOptions setActiveTab={setActiveTab} setOpen={setOpen} />}

                    {/* ✅ Layers Content */}
                    {activeTab === 'layers' && <LayersOptions setActiveTab={setActiveTab} setOpen={setOpen} />}
                </>
            )}
        </DropdownMenu>
    )
}

export default EditorOptions;