"use client";
import { VT323 } from "next/font/google";
import "./globals.css";
import DesktopIcons from "./components/DesktopIcons";
import { WindowManagerProvider, useWindowManager } from "./components/WindowManagerContext";
import ConsoleWindow from "./components/ConsoleWindow";

export const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={vt323.className}>
      <body className="bg-[#138486] min-h-screen min-w-screen flex">
        <WindowManagerProvider>
          <DesktopIcons />
          <main className="absolute left-0 top-0 z-10">{children}</main>
          {/* <ConsoleWindow /> */}
        </WindowManagerProvider>
      </body>
    </html>
  );
}
