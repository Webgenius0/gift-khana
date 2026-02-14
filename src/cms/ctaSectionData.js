import button1 from "@/assets/button_images/button1_image.png";
import button2 from "@/assets/button_images/button2_image.png";
import button3 from "@/assets/button_images/button3_image.png";
import button4 from "@/assets/button_images/button4_image.png";


import element1 from "@/assets/button_images/button1_pop_element.png";
import element2 from "@/assets/button_images/button2_pop_element.png";
import element3 from "@/assets/button_images/button3_pop_element.png";
import element4 from "@/assets/button_images/button4_pop_element.png";


export const ctaSectionData = [
    {
        title: "Create you own",
        buttonImage: button1,
        element: element1,
        classNameElement: "absolute scale-35 group-hover:scale-55 smooth max-w-max max-h-max",
    },
    {
        title: "Home decor",
        buttonImage: button2,
        element: element2,
        classNameElement: "absolute top-0 right-20 md:right-15 lg:right-30 w-[25%] group-hover:w-[30%] group-hover:right-18 group-hover:md:right-13 group-hover:lg:right-25 group-hover:-top-3 group-hover:md:-top-5 group-hover:lg:-top-7 smooth",
        // classNameElement: "absolute -top-30 right-6 scale-37 group-hover:scale-45 group-hover:-top-35 smooth",
    },
    {
        title: "Gadgets & Accessories",
        buttonImage: button3,
        element: element3,
        classNameElement: "absolute top-0 left-[6%] w-[10%] group-hover:-top-10 smooth",
        // classNameElement: "absolute -top-33 -left-2 scale-35 group-hover:-top-45 smooth",
    },
    {
        title: "Ready-made",
        buttonImage: button4,
        element: element4,
        classNameElement: "absolute top-0 right-5 md:right-5 lg:right-10 w-[35%] group-hover:w-[43%] group-hover:-top-10 group-hover:right-1 group-hover:md:right-2 group-hover:lg:right-5 group-hover:-top-3 group-hover:md:-top-5 group-hover:lg:-top-15 smooth",
        // classNameElement: "absolute -top-35 -right-21 scale-45 group-hover:scale-55 group-hover:-top-40 smooth",
    }
];
