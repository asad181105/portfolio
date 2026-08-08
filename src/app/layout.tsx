import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SiteBackground } from "@/components/layout/site-background";
import { AppProviders } from "@/components/providers/app-providers";
import { PersonJsonLd } from "@/components/json-ld";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const blackMango = localFont({
  src: "../fonts/BlackMango-Regular.ttf",
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = createMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${blackMango.variable}`}>
      <body className="min-h-screen text-foreground antialiased">
        <SiteBackground />
        <PersonJsonLd />
        <AppProviders>
          <Navbar />
          <main className="relative flex min-h-screen flex-col gap-[70px] px-[100px] pt-[var(--nav-offset)]">
            {children}
          </main>
          <div className="px-[100px] pb-5 pt-[70px]">
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
