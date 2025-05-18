import { VT323 } from "next/font/google";
import "./globals.css";

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
      <body
        className="bg-[#138486]"
      >
        {children}
      </body>
    </html>
  );
}
