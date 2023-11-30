import React from "react";

const SmallCard = ({ item }) => {
  const { title, sales, color, icon: Icon } = item;
  return (
    <div className="bg-slate-700 shadow-lg rounded-lg p-4">
      <div className="flex space-x-4 items-center justify-center">
        <div
          className={`w-12 h-12 rounded-full ${color} flex items-center justify-center`}
        >
          <Icon />
        </div>
        <div>
          <p>{title}</p>
          <h4 className="text-xl">{sales}</h4>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
