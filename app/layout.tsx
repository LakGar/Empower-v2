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
  metadataBase: new URL("https://www.theempowerweb.com"),
  title: "EmpowerWeb | AI Automation and Custom Software for Growing Businesses",
  description:
    "Founder-led AI automation and custom software consulting. We help businesses automate workflows, reduce manual work, and build modern software with AI.",
  keywords: [
    "AI automation",
    "custom software",
    "workflow automation",
    "internal tools",
    "MVP development",
    "business websites",
    "AI consulting",
    "Next.js",
    "React",
  ],
  authors: [{ name: "EmpowerWeb" }],
  creator: "EmpowerWeb",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.theempowerweb.com/",
    title: "EmpowerWeb | AI Automation and Custom Software for Growing Businesses",
    description:
      "Founder-led AI automation and custom software. We help businesses automate workflows, reduce manual work, and launch products that work.",
    siteName: "EmpowerWeb",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "EmpowerWeb Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmpowerWeb | AI Automation and Custom Software for Growing Businesses",
    description:
      "Founder-led AI automation and custom software. We help businesses automate workflows, reduce manual work, and launch products that work.",
    images: ["/logo.png"],
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
