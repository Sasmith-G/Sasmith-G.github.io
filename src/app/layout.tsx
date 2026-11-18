import type { Metadata } from "next";
import { Borel, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const logoFont = Borel({
  variable: "--font-logo",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sasmith Goduguluri | Portfolio",
  description: "Portfolio of Sasmith Goduguluri",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${logoFont.variable} scroll-smooth antialiased`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
