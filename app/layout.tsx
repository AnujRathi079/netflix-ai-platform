import type { Metadata } from "next";

import "./globals.css";

import Providers from "./providers";

export const metadata: Metadata = {
  title: "Netflix AI",

  description:
    "AI Powered OTT Platform using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >

      <body className="bg-black text-white overflow-x-hidden">

        <Providers>
          {children}
        </Providers>

      </body>

    </html>
  );
}