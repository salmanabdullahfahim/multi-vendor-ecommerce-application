import Heading from "@/components/backend-ui/Heading";
import LargeCards from "@/components/backend-ui/LargeCards";
import React from "react";

const page = () => {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* Large Cards */}
      <LargeCards />
      {/* small card */}
      {/* chart */}
      {/* recent order */}
    </div>
  );
};

export default page;
