import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Aethos | Engineering the Inevitable",
  description: "High-spec software architecture meets immersive spatial design. We don't build websites; we deploy digital benchmarks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-[var(--color-aethos-obsidian)] text-white overflow-x-hidden min-h-screen cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
