
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-4 mt-auto text-center border-t border-gray-300 dark:border-gray-700">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} TaskMaster. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;