"use client";

import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MusicPlayer from "@/components/MusicPlayer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-64 pt-16 pb-24 min-w-0">{children}</main>
        </div>
        <MusicPlayer />
      </body>
    </html>
  );
}
