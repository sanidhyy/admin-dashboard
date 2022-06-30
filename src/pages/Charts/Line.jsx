import React from "react";

import { Header, LineChart } from "../../components";

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      {/* Header */}
      <Header category="Chart" title="Line" />
      <div className="w-full">
        {/* Line Chart */}
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
