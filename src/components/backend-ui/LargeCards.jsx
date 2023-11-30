import React from "react";
import LargeCard from "./LargeCard";

const LargeCards = () => {
  const orderStats = [
    {
      title: "Today's Order",
      sales: 360,
      color: "bg-green-500",
    },
    {
      title: "Yesterday Order",
      sales: 780,
      color: "bg-orange-500",
    },
    {
      title: "This Month",
      sales: 36000,
      color: "bg-emerald-500",
    },
    {
      title: "Last Month",
      sales: 41000,
      color: "bg-indigo-500",
    },
    {
      title: "All Times Sales",
      sales: 91000,
      color: "bg-teal-500",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-4 py-6">
      {/* card */}
      {orderStats.map((item, i) => {
        return <LargeCard item={item} key={i} />;
      })}
    </div>
  );
};

export default LargeCards;
