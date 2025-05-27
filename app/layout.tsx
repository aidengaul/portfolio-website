"use client";
import { vt323 } from "./components/Font";
import "./globals.css";
import DesktopIcons from "./components/DesktopIcons";
import { WindowManagerProvider } from "./components/WindowManagerContext";

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
        </WindowManagerProvider>
      </body>
    </html>
  );
}
