import { Inter } from "next/font/google";
import "./globals.css";
import connectToDB from "@utils/mongoose/connectToDB";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "addToCart",
  description: "an e-Commerce App",
};

export default async function RootLayout({ children }) {
  await connectToDB();

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
