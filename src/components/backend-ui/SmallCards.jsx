import React from "react";
import SmallCard from "./SmallCard";
import { CheckCheck, Loader2, RefreshCw, ShoppingCart } from "lucide-react";

const SmallCards = () => {
  const orderStats = [
    {
      title: "Total Orders",
      sales: 300,
      color: "bg-green-500",
      icon: ShoppingCart,
    },
    {
      title: "Orders Pending",
      sales: 100,
      color: "bg-orange-500",
      icon: Loader2,
    },
    {
      title: "Orders Processing",
      sales: 50,
      color: "bg-emerald-500",
      icon: RefreshCw,
    },
    {
      title: "Orders Delivered",
      sales: 400,
      color: "bg-indigo-500",
      icon: CheckCheck,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 py-6">
      {/* card */}
      {orderStats.map((item, i) => {
        return <SmallCard item={item} key={i} />;
      })}
    </div>
  );
};

export default SmallCards;
