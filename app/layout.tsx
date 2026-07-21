import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monsterrat = Montserrat({
  variable: "--font-monsterrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThereOne Movement & Recovery | Physical Therapy in New York",
  description:
    "ThereOne Movement & Recovery provides personalized physical therapy, orthopedic rehabilitation, post-surgical recovery, pain management, balance training, and movement-focused care to help you return to the life you love.",

  keywords: [
    // Brand
    "ThereOne Movement & Recovery",
    "ThereOne",
    "ThereOne Physical Therapy",

    // Core Services
    "physical therapy",
    "physical therapist",
    "physiotherapy",
    "rehabilitation",
    "movement and recovery",
    "movement therapy",
    "exercise therapy",
    "manual therapy",
    "therapeutic exercise",

    // Specialties
    "orthopedic rehabilitation",
    "orthopedic rehab",
    "post surgical rehabilitation",
    "post surgical recovery",
    "pain management",
    "balance and mobility",
    "balance training",
    "vertigo rehabilitation",
    "BPPV treatment",
    "vestibular rehabilitation",
    "sports rehabilitation",
    "sports injury rehabilitation",
    "injury recovery",
    "functional training",
    "mobility training",
    "strength and conditioning",

    // Patient Goals
    "back pain treatment",
    "neck pain treatment",
    "shoulder pain therapy",
    "knee pain therapy",
    "hip pain therapy",
    "joint pain treatment",
    "muscle recovery",
    "injury prevention",
    "improve mobility",
    "restore movement",
    "recover from surgery",
    "chronic pain therapy",

    // Location
    "physical therapy New York",
    "physical therapist New York",
    "rehabilitation clinic New York",
    "physical therapy clinic NYC",
    "New York rehabilitation",
    "movement and recovery New York",
  ],

  openGraph: {
    title: "ThereOne Movement & Recovery | Move Better. Recover Stronger.",
    description:
      "Expert physical therapy and rehabilitation services designed to restore movement, reduce pain, and help you achieve lasting recovery.",
    url: "https://thereone-mr.com",
    siteName: "ThereOne Movement & Recovery",
    images: [
      {
        url: "/theraOneLogo.svg", // Replace with your Open Graph image
        width: 1200,
        height: 630,
        alt: "ThereOne Movement & Recovery",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ThereOne Movement & Recovery",
    description:
      "Personalized physical therapy and rehabilitation to help you move confidently and recover stronger.",
    images: ["/theraOneLogo.svg"], // Replace with your Open Graph image
  },

  alternates: {
    canonical: "https://thereone-mr.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${monsterrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
