import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div>sidebar</div>
      <div>
        <nav>Navabr</nav>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default layout;
