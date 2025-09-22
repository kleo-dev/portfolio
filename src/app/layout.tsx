import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";

export const metadata: Metadata = {
  title: "Klesti's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black">
        <Background>
          <div className="relative h-screen overflow-y-scroll">
            {children}
          </div>
        </Background>
      </body>
    </html>
  );
}
