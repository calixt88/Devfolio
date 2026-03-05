import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glow with Chlo - Esthetician Services",
  description: "Professional esthetician services with personalized skincare treatments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900 transition-colors">
        {children}
      </body>
    </html>
  );
}
