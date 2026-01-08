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
  title: "Empower - Elevate Your Digital Vision",
  description:
    "A modern web development company specializing in creating powerful, scalable, and innovative digital solutions. We combine technical expertise with creative vision to deliver exceptional results.",
  keywords: [
    "web development",
    "web design",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "custom websites",
    "web applications",
    "digital solutions",
  ],
  authors: [{ name: "Empower" }],
  creator: "Empower",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://empowerv2.vercel.app",
    title: "Empower - Elevate Your Digital Vision",
    description:
      "A modern web development company specializing in creating powerful, scalable, and innovative digital solutions.",
    siteName: "Empower",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empower - Elevate Your Digital Vision",
    description:
      "A modern web development company specializing in creating powerful, scalable, and innovative digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
