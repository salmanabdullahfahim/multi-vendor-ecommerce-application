import React from "react";

const LargeCard = ({ Icon, className }) => {
  return (
    <div
      className={`rounded-lg text-white flex flex-col shadow-lg gap-1 p-6 ${className}`}
    >
      <Icon />
      <h4>Today&apos;s Order</h4>
      <h2 className="text-2xl lg:text-3xl">$102.54</h2>
    </div>
  );
};

export default LargeCard;
