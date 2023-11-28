import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

import { Suspense } from "react";
import TallyScript from "@/components/Tally/Tally";

// const inter = Inter({ subsets: ["latin"] });
const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});
export const metadata = {
  title: "aXelerate Advisory",
  description: "Asset, Mortgage and Commercial Specialists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree.variable} ${urbanist.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />

        <Suspense fallback={null}>
          <TallyScript />
        </Suspense>
      </body>
    </html>
  );
}
