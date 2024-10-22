"use client"
import Header from "@/components/Dashboard/Header";
import Sidebar from "@/components/Dashboard/Sidebar";
import { useSession } from "next-auth/react";
import React from "react";

export default function DashboardLayout({ children }) {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const { data: status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'unauthenticated') {
    return <Login />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header setShowSidebar={setShowSidebar} />

      <div className="flex flex-grow">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main className={`transition-all duration-300 ml-0 w-full bg-purple-100 overflow-x-hidden`}>
          {children}
        </main>
      </div>
    </div>
  );
}
