import React from "react";
import LargeCard from "./LargeCard";
import { Layers } from "lucide-react";

const LargeCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 py-6">
      {/* card */}
      <LargeCard className="bg-green-500" Icon={Layers} />
      <LargeCard className="bg-blue-500" Icon={Layers} />
      <LargeCard className="bg-orange-500" Icon={Layers} />
      <LargeCard className="bg-purple-500" Icon={Layers} />
    </div>
  );
};

export default LargeCards;
