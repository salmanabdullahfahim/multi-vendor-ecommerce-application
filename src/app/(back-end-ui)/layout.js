import Sidebar from "@/components/backend-ui/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <nav>Navabr</nav>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default layout;
