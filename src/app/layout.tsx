import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BoostSir - Free Productivity Tools for Workflow Enhancement",
  description:
    "Boost your productivity with BoostSir's free tools: FrameFill for AI image resizing, HideBookmarks for managing Chrome bookmarks, a Mortgage Calculator, and the Schwab Tax Lot Extractor.",
  keywords:
    "productivity tools, free tools, workflow, FrameFill, image resizer, HideBookmarks, Chrome extension, mortgage calculator, Schwab Tax Lot Extractor, tax reporting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://boostsir.com/",
    name: "BoostSir",
    description:
      "Free productivity tools to boost your workflow. FrameFill for image resizing, HideBookmarks for managing Chrome bookmarks, a Mortgage Calculator, and the Schwab Tax Lot Extractor.",
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
