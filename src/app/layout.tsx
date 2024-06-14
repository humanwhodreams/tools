import "./globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LST | Productivity tools for planning and focusing on everyday tasks",
  description: "Productivity tools for planning and focusing on everyday tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", inter.className)}>{children}</body>
    </html>
  );
}
