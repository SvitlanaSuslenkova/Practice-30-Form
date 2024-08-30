import type { Metadata } from "next";

import { Open_Sans, Ubuntu } from "next/font/google";

import "./reset.css";
import "./globals.css";
const openSans = Open_Sans({ subsets: ["latin"], weight: "500" });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Form",
  description: "Multi-step form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${ubuntu.className}`}>
        {children}
      </body>
    </html>
  );
}
