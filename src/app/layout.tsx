import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FitProvider from "./context/FitContext";
import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fitlog.app"),

  title: "FitLog — Workout Library & Gym Companion",
  description:
    "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today’s plan, and track your progress.",
  keywords: [
    "Gym",
    "Fitness",
    "Workout Tracker",
    "FitLog",
    "Exercise Library",
  ],
  authors: [{ name: "FitLog Team" }],

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "FitLog — Workout Library & Gym Companion",
    description: "Train with intent. Log every set.",
    url: "https://fitlog.app",
    siteName: "FitLog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FitLog Workout Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FitLog — Workout Library & Gym Companion",
    description: "Train with intent. Log every set.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#0a0b0e] text-white"
      >
        <FitProvider>
          <Navbar />
          <div className="flex-grow">
            {children}
            <ToastContainer/>
            </div>
          <Footer />
        </FitProvider>
      </body>
    </html>
  );
}