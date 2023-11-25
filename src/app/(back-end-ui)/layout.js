import Navbar from "@/components/backend-ui/Navbar";
import Sidebar from "@/components/backend-ui/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex gap-1">
      <Sidebar />
      <div className="w-full">
        <Navbar />

        <main>{children}</main>
      </div>
    </div>
  );
};

export default layout;
