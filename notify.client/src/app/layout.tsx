import { Metadata } from "next";

import { SITE } from "@/src/config";

import Providers from "@/src/components/atoms/Providers";
import Header from "@/src/components/widgets/Header";
import Announcement from "@/src/components/widgets/Announcement";
import Footer2 from "@/src/components/widgets/Footer2";

import { Inter as CustomFont } from "next/font/google";
import "@/src/assets/styles/base.css";

const customFont = CustomFont({
  subsets: ["latin"],
  variable: "--font-custom",
});

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300 dark:bg-slate-900">
        <Providers>
          <Announcement />
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
