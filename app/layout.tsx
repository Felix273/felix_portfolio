import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felix Ngitari — Digital maker",
  description: "Independent full-stack developer and creative partner for products that need to feel as good as they work.",
  metadataBase: new URL("https://felixngitari.dev"),
  keywords: ["Felix Ngitari", "full-stack developer", "web development", "mobile development", "Nairobi"],
  openGraph: {
    title: "Felix Ngitari — Digital maker",
    description: "Independent full-stack developer and creative partner for products that need to feel as good as they work.",
    url: "https://felixngitari.dev",
    siteName: "Felix Ngitari",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Felix Ngitari — Digital maker",
    description: "Independent full-stack developer and creative partner for products that need to feel as good as they work.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
