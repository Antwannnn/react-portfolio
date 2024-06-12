import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Navbar } from "./components/Components"
import "./styles/globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || "Antoine Leboucher",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Antoine Leboucher's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en" className="h-full">
      <body className={`${outfit.className} h-full`}>
      <Navbar />
      <main className="h-full">
      {children}
      </main>
      </body>
    </html>
  );
}
