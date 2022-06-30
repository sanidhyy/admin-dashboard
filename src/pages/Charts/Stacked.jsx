import React from "react";

import { Header, Stacked as StackedChart } from "../../components";

// Stacked
const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    {/* Header */}
    <Header category="Chart" title="Stacked" />
    <div className="w-full">
      {/* Stacked Chart */}
      <StackedChart />
    </div>
  </div>
);

export default Stacked;
