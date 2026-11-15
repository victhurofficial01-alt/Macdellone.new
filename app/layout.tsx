
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Macdellone.new | AI Video Studio",
  description:
    "Transform your imagination into stunning AI-generated videos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
