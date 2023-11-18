import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Store",
  description:
    "Discover a seamless online shopping experience at our platform! Shop effortlessly for your favorite items with just a few clicks. Enjoy a user-friendly interface, secure transactions, and a vast selection of products. Elevate your shopping journey – try us today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />

        <div>{children}</div>
      </body>
    </html>
  );
}
