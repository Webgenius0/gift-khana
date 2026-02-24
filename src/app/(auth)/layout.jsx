import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/NavBar/Header";

export default function AuthLayout({ children }) {
    return (
        <div className="min-h-dvh w-full bg-[#FBF3EA] flex flex-col">
            <Header className="bg-linear-to-b from-[#E6BFA9] to-[#FBF3EA] py-10" />
            <main className="flex-1">
                <div className="flex flex-col items-center justify-start px-4 pt-16 pb-24 font-montserrat">
                    <div className="w-full max-w-[580px]">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
