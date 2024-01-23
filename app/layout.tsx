import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samuel E-Shop",
  description: "E-shop test project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster toastOptions={{
          style: {
            border: '1px solid #ea580c',
            padding: '16px',
            color: '#ea580c',
          },
          iconTheme: {
            primary: '#ea580c',
            secondary: '#FFF',
          },
        }}/>
        <div className="flex flex-col min-h-screen">
          <NavBar></NavBar>

          <main className="flex-grow">{children}</main>

          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
