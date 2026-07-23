import React from "react";
import { Link } from "react-router";

// Footer Component
const FooterComponent = () => {
  return (
    <div className="bg-dark-background text-white w-full text-center bottom-0 px-5 p-2 border-t-1 border-gray-400 max-md:fixed bottom-0">
      <p>
        Developed By{" "}
        <Link
          to="https://www.linkedin.com/in/pankaj-singh-b44871214/"
          className="text-secondary font-bold"
        >
          Pankaj Singh
        </Link>
      </p>
    </div>
  );
};

export default FooterComponent;
