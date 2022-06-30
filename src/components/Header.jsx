import React from "react";

// Header
const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      {/* Category */}
      <p className="text-gray-400">{category}</p>
      {/* Title */}
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-400">
        {title}
      </p>
    </div>
  );
};

export default Header;
