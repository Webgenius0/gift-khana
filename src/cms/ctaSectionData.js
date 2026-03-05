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
        link: '/personalized-products',
        buttonImage: button1,
        element: element1,
        classNameElement: "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 scale-70 group-hover:scale-130 smooth max-w-max max-h-max ml-[4%]",
        classNameElementActive: "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 scale-70 scale-130 smooth max-w-max max-h-max ml-[4%]",
    },
    {
        title: "Home decor",
        link: '/products/home-decoration',
        buttonImage: button2,
        element: element2,
        classNameElement: "absolute top-0 right-20 md:right-[15%] lg:right-30 w-[25%] group-hover:w-[30%] group-hover:right-18 group-hover:md:right-13 group-hover:lg:right-25 group-hover:-top-3 group-hover:md:-top-5 group-hover:lg:-top-7 smooth",
        classNameElementActive: "absolute top-0 right-20 md:right-[15%] lg:right-30 w-[25%] w-[30%] right-18 md:right-13 lg:right-25 -top-3 md:-top-5 lg:-top-7 smooth",
    },
    {
        title: "Gadgets & Accessories",
        link: '/products/gadgets',
        buttonImage: button3,
        element: element3,
        classNameElement: "absolute top-0 left-[6%] w-[10%] group-hover:-top-10 smooth",
        classNameElementActive: "absolute top-0 left-[6%] w-[10%] -top-10 smooth",
    },
    {
        title: "Ready-made",
        link: '/products/ready-made-gifts',
        buttonImage: button4,
        element: element4,
        classNameElement: "absolute top-0 right-5 md:right-5 lg:right-10 w-[35%] group-hover:w-[43%] group-hover:-top-10 group-hover:right-1 group-hover:md:right-2 group-hover:lg:right-5 group-hover:-top-3 group-hover:md:-top-5 group-hover:lg:-top-15 smooth",
        classNameElementActive: "absolute top-0 right-5 md:right-5 lg:right-10 w-[35%] w-[43%] -top-10 right-1 md:right-2 lg:right-5 -top-3 md:-top-5 lg:-top-15 smooth",
    }
];
