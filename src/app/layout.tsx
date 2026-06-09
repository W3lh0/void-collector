// src/app/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Void Collector",
    description: "Text-based Game"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}