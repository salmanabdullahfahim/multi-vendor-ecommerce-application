import Navbar from "@/components/backend-ui/Navbar";
import Sidebar from "@/components/backend-ui/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />

        <main className="p-8 bg-slate-950 text-white min-h-screen mt-16">
          {children}
        </main>
      </div>
    </div>
  );
};

export default layout;
