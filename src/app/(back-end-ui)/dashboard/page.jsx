import Heading from "@/components/backend-ui/Heading";
import LargeCards from "@/components/backend-ui/LargeCards";
import SmallCards from "@/components/backend-ui/SmallCards";
import React from "react";

const page = () => {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* Large Cards */}
      <LargeCards />
      {/* small card */}
      <SmallCards />
      {/* chart */}
      {/* recent order */}
    </div>
  );
};

export default page;
