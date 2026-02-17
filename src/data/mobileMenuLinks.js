import { User, Package, Palette, Heart } from 'lucide-react';

const mobileMenuLinks = [
    { icon: User, label: "My Account", href: "/account" },
    { icon: Package, label: "My Orders", href: "/orders" },
    { icon: Palette, label: "Saved Designs", href: "/saved-designs" },
    { icon: Heart, label: "Likes", href: "/likes" },
];

export default mobileMenuLinks;