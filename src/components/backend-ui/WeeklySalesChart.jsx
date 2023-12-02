import React from "react";

const WeeklySalesChart = () => {
  const tabs = [
    {
      title: "Sales",
      type: "sales",
    },
    {
      title: "Orders",
      type: "orders",
    },
  ];
  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Weekly Sales</h2>

      {/* Tabs */}
      <div>
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">
            Tab
          </label>

          <select id="Tab" className="w-full rounded-md border-gray-400">
            <option>Sales</option>
            <option>Orders</option>
          </select>
        </div>

        <div className="hidden sm:block">
          <div className="border-b border-gray-400">
            <nav className="-mb-px flex gap-6" aria-label="Tabs">
              <button className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-400 hover:border-green-400 hover:text-green-400">
                Sales
              </button>

              <button className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-400 hover:border-orange-400 hover:text-orange-400">
                Orders
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySalesChart;
