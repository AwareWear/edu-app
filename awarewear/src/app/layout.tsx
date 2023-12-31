import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const sen = Sen({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AwareWear",
  description: "Educate yourself on the impact of fast fashion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full h-full">
      <body
        className={twMerge(sen.className, "m-auto h-full max-w-md relative")}
      >
        <header className="w-full h-16  z-50 absolute">
          <div className="flex justify-center items-center h-full px-4">
            <div className="flex items-center justify-center">
              <Link className="" href="/main">
                <Image
                  src="/AW3.png"
                  alt="logo"
                  width={80}
                  height={80}
                  className="w-16 h-16"
                />
              </Link>
              <h1 className="text-2xl mx-2">AwareWear</h1>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
