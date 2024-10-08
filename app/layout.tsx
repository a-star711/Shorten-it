import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/navbar/Navbar";
import ToastProvider from "@/components/toast/toast";
import { Poppins } from "next/font/google";
import Blayout from "@/components/blayout/Blayout";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "URL Shortener",
  description: "URL Shortener built on Next, using tinyUrl api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en" className={poppins.className} suppressHydrationWarning>
        <body>
          <ToastProvider>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <NavBar />
              {children}
            </div>
            <Blayout />
          </ToastProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
