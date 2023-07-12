import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Sidebar } from "../components/Sidebar";
import { Wishlist } from "../components/Wishlist";
import { Navbar } from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NYTBS",
  description: "The New York Times Best Sellers",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className="wrapper">
            <Sidebar />
            <main>
              <header className="main-header">
                <h2>The NYT Best Sellers</h2>
              </header>
              <Navbar />
              {children}
            </main>
            <Wishlist />
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
