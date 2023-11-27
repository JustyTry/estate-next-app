import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[100vh] flex-col bg-slate-100">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
