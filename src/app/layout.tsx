import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Void Collector",
  description: "System Online - Scavager Vessel Interface",
  keywords: ["space", "scavager", "terminal", "sci-fi", "game"],
  authors: [{name: "Welho"}],
  openGraph: {
    title: "Void Collector",
    description: "Deep space scavenger vessel interface",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-screen overflow-hidden`}
    >
      <body className="bg-black text-emerald-400 font-mono h-screen overflow-hidden flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
