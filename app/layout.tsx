import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexora Studio | Premium B2B Web Agency",
  description:
    "We build professional websites for modern businesses. Helping brands grow online with fast, modern, and responsive websites.",
  keywords: [
    "web design",
    "web development",
    "B2B agency",
    "website design",
    "Nigeria",
  ],
  authors: [{ name: "Nexora Studio" }],
  openGraph: {
    title: "Nexora Studio | Premium B2B Web Agency",
    description:
      "We build professional websites for modern businesses. Helping brands grow online with fast, modern, and responsive websites.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
