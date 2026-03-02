import { DropdownMenuContent } from '@/components/ui/dropdown-menu';
import ImageContainerEditor from './ImageContainerEditor';

const ImageOptions = () => {
    return (
        <DropdownMenuContent side="left" align="start" className="p-4 w-80 bg-white">
            <ImageContainerEditor />
        </DropdownMenuContent>
    );
};

export default ImageOptions;
