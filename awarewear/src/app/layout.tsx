import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const sen = Sen({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <header className="w-full h-16 bg-white absolute">
          <Link href="/main">
            <div className="flex justify-center items-center h-full px-4">
              <div className="flex items-center">
                <Image
                  src="/AW3.png"
                  alt="logo"
                  width={80}
                  height={80}
                  className="w-16 h-16 mr-4"
                />
                <h1 className="text-2xl">AwareWear</h1>
              </div>
              <div className="w-16 h-16 invisible">
                {/* Invisible spacer div */}
              </div>
            </div>
          </Link>
        </header>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
