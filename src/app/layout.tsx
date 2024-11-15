import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leo's portfolio",
  description: "Leo's portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Leo's portfolio</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <body>
        {children}
      </body>
    </html>
  );
}
