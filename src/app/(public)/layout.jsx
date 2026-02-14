import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/NavBar/Header";

export default function PublicLayout({ children }) {
    return (
        <div className="min-h-dvh w-full bg-[#FBF3EA] flex flex-col">
            <Header className="bg-linear-to-b from-[#E6BFA9] to-[#FBF3EA] py-10" />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}