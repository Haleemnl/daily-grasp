import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Haleeminsights",
  description: "Haleeminsights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable}  `}>

        <div className="flex min-h-screen flex-col overflow-hidden">

          <Header />

          <main className='flex-1'>
            {children}
          </main>

          <Footer />

        </div>

      </body>

    </html>
  );
}
