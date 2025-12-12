import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jazz Landing - Loading",
  description: "Jazz Products Landing Page",
  icons: {
    icon: '/jazz-logo.webp',
    apple: '/jazz-logo.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
