import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Aashim | Software Engineer",
  description: "Building intelligent systems and polished digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {/* Starfield Galaxy Background */}
        <div className="starfield-bg">
          <div className="star-layer stars-sm"></div>
          <div className="star-layer stars-md"></div>
          <div className="star-layer stars-lg"></div>
          <div className="nebula-wash"></div>
        </div>
        
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
