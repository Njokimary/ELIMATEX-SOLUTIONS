import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Elimatex Solutions | Websites, Software, Hosting, SMS & IoT in Nairobi",
  description:
    "Elimatex builds websites, custom software, hosting, bulk SMS & email and IoT systems for Kenyan businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-cream font-sans text-ink antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}