import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "JoinTech Precast | Precision Connections for Precast Concrete",
    template: "%s | JoinTech Precast",
  },
  description:
    "Global supplier of high-performance precast concrete connection hardware: pile splice plates, tunnel segment couplers, bridge prestress anchors, and more.",
  keywords: [
    "precast concrete connections",
    "pile splice plate",
    "tunnel segment coupler",
    "prestress anchor",
    "precast hardware",
    "B2B concrete connections",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jointechprecast.com",
    siteName: "JoinTech Precast",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
