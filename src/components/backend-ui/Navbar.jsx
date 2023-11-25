import { AlignJustify, Bell, Sun, User } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50 h-12 px-8 py-4">
      {/* Menu Icon */}
      <button>
        <AlignJustify />
      </button>
      {/* Dark mode, Notification and User Icon */}
      <div className="flex space-x-3 items-center">
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
