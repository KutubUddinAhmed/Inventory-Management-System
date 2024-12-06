import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import AdminSidebar from "@/components/admin-sidebar/AdminSidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Inventory Management App",
  description: "Developed by Kutub Ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <section className="flex flex-col md:flex-row  w-screen">
          <section className="w-[30%]">
            <AdminSidebar />
          </section>
          <section className="w-[80%] p-2 ">{children}</section>
        </section>
      </body>
    </html>
  );
}
