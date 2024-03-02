import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/ui/navbar";
import localFont from "@next/font/local";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const cloister = localFont({
  src: "../public/assets/fonts/cloister.ttf",
  variable: "--font-cloister",
});

const oldEnglish = localFont({
  src: "../public/assets/fonts/old-english.ttf",
  variable: "--font-old-english",
});

const posterScript = localFont({
  src: "../public/assets/fonts/poster-script.ttf",
  variable: "--font-poster-script",
});

const usAngel = localFont({
  src: "../public/assets/fonts/us-angel.ttf",
  variable: "--font-us-angel",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html
        lang="en"
        className={`
        ${cloister.variable}
        ${oldEnglish.variable}
        ${posterScript.variable}
        ${usAngel.variable}
      `}
      >
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <Toaster />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
