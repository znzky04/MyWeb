import type { Metadata } from "next";
import { M_PLUS_Rounded_1c, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const bodyFont = Noto_Sans_SC({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const headingFont = M_PLUS_Rounded_1c({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "MyWeb",
  description: "A bright personal site with a project showcase and a four-channel note space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
