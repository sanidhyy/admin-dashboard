import React from "react";

// Footer
const Footer = () => (
  <div className="mt-24">
    {/* Copyright trademark */}
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      &copy; {new Date().getFullYear()} All rights reserved by Shoppy.
    </p>
  </div>
);

export default Footer;
