import { Bebas_Neue, Courgette, Montserrat, Rubik } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import LenisProvider from "@/providers/LenisProvider";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-family",
  subsets: ["latin"],
});

const courgette = Courgette({
  weight: "400",
  variable: "--font-courgette-family",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat-family",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik-family",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gift Khana",
  description: "Home for personalized gifts",
  icons: {
    icon: [
      {
        url: '/fav-icon-navy.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/fav-icon-white.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/fav-icon-navy.svg',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${courgette.variable} ${montserrat.variable} ${rubik.variable} antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
        <Toaster />
      </body>
    </html>
  );
}
