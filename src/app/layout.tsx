import "./global.css";
import { Patrick_Hand } from "next/font/google";
import Navigation from "@/components/Navigation";
import { Metadata } from "next";

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "New York Times Best Sellers",
  description: "Explore the New York Times Best Sellers list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={patrickHand.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
