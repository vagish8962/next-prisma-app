import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hap App",
  description: "Generated by Hap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
