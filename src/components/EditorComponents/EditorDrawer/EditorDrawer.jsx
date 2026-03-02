import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Plus } from "lucide-react";
import EditorDrawerContainer from "./EditorDrawerContainer";


const EditorDrawer = () => {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button className="w-12 h-12 bg-white rounded-full shadow-[0_10px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-[#182235] hover:bg-[#F3E8E0] transition-all hover:-translate-y-1 outline-none">
                    <Plus size={20} />
                </button>
            </DrawerTrigger>
            <DrawerContent className='bg-white max-h-[90vh]'>
                <DrawerTitle className="hidden"></DrawerTitle>
                <div className="p-4 overflow-y-auto" data-lenis-prevent>
                    <EditorDrawerContainer />
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default EditorDrawer;