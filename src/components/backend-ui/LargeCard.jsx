import React from "react";
import { Layers } from "lucide-react";

const LargeCard = ({ item }) => {
  return (
    <div
      className={`rounded-lg text-white flex flex-col shadow-lg gap-1 p-6 ${item.color}`}
    >
      <Layers />
      <h4>{item.title}</h4>
      <h2 className="text-2xl lg:text-3xl">${item.sales}</h2>
    </div>
  );
};

export default LargeCard;
