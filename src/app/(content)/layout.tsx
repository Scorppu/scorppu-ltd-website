import ".././globals.css";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-stone-950 text-black dark:text-stone-100 flex flex-col">
      <div className="fixed w-full top-0 left-0 z-20 bg-white dark:bg-stone-950 shadow-md dark:shadow-none dark:border-b dark:border-stone-800">
        <NavBar />
      </div>

      <main className="flex-grow pt-[80px] min-h-[calc(100vh-60px)]">
        {children}
      </main>

      <Footer />
    </div>
  );
}
