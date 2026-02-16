import type { Metadata } from "next";
import { Outfit, Oswald } from "next/font/google";
import Analytics from "./components/Analytics";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Punch Fitness Gym | Premium Gym in Koratty",
  description: "Discipline over motivation. Premium gym in Koratty offering structured strength training, functional fitness, and professional coaching. Results over hype.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${oswald.variable} antialiased bg-white text-black font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
