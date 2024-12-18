'use client'
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const navbarVariant = pathname === "/destination" ? "blue" : "white";

  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <header className="headerStyles">
          <Navbar variant={navbarVariant} />
        </header>
        {children}
        <div className="footerStyles">
          <Footer />
        </div>
      </body>
    </html>
  );
}
