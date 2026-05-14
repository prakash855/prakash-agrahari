import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "@/components/providers";

const siteUrl = "https://prakash-agrahari.vercel.app";
const ogImageUrl = `${siteUrl}/me.jpeg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prakash Agrahari | Senior Frontend / MERN Stack Engineer",
    template: "%s | Prakash Agrahari"
  },
  description:
    "Premium developer portfolio for Prakash Agrahari, a Senior Frontend / MERN Stack Engineer building scalable React, Next.js, and full-stack web products.",
  applicationName: "Prakash Agrahari Portfolio",
  keywords: [
    "Prakash Agrahari",
    "Senior Frontend Engineer",
    "MERN Stack Developer",
    "Next.js portfolio",
    "React developer India",
    "Dubai frontend engineer",
    "TypeScript engineer"
  ],
  authors: [{ name: "Prakash Agrahari" }],
  creator: "Prakash Agrahari",
  publisher: "Prakash Agrahari",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Prakash Agrahari | Senior Frontend / MERN Stack Engineer",
    description:
      "5+ years of experience designing scalable frontend systems, polished product interfaces, and modern MERN applications.",
    siteName: "Prakash Agrahari Portfolio",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Prakash Agrahari Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakash Agrahari | Senior Frontend / MERN Stack Engineer",
    description:
      "Modern portfolio showcasing React, Next.js, TypeScript, frontend architecture, and full-stack product engineering.",
    images: [ogImageUrl]
  },
  category: "technology"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
