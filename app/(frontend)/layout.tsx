import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from 'react'
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WBCS Commercial",
  description: "A commercial template using Payload in a Next.js app.",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
