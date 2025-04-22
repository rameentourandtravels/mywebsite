import type { Metadata } from "next";
import { Nunito } from "next/font/google";
// CSS
import "./globals.css";
import "slick-carousel/slick/slick.css";
// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Rameen Tour & Travels",
  description: "Discover the beauty of Kashmir with Rameen Tour & Travels. Book houseboat stays, shikara rides, Gulmarg adventures, and custom honeymoon or family packages today.",
  icons: {
    icon: "/logo.svg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-primary text-tertiary overflow-x-hidden ${nunito.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
