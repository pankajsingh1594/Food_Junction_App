import React, { useState } from "react";

// Instmart Sections
const Section = ({ title, description, visible, setVisible }) => {
  return (
    <div className="w-[70%] mx-auto max-md:w-full">
      <div className="flex justify-between border-b-1 border-gray-300 pb-3 mt-5">
        <h1 className="text-3xl font-bold text-secondary max-md:text-xl">
          {title}
        </h1>
        {visible ? (
          <svg
            onClick={() => setVisible("")}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="#ffffff"
            fill="#8e431f"
            className="size-10 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setVisible(title)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="#ffffff"
            fill="#8e431f"
            className="size-10 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        )}
      </div>
      <div>{visible ? <p className="py-5">{description}</p> : null}</div>
    </div>
  );
};

// Instamart Component
const Instamart = () => {
  const [isVisibleSection, setIsVisibleSection] = useState(
    "Welcome to the Lazy Loading page!",
  );
  return (
    <div className="p-5 pt-40 pb-30 max-md:px-5 max-md:pt-28 max-md:pb-10 bg-dark-background text-white h-[100vh]">
      <Section
        title="Welcome to the Lazy Loading page!"
        description="This page has been loaded using React Lazy Loading, a performance
          optimization technique that loads components only when they are needed
          instead of loading the entire application at once."
        visible={isVisibleSection === "Welcome to the Lazy Loading page!"}
        setVisible={setIsVisibleSection}
      />

      <Section
        title="What is Lazy Loading?"
        description="Lazy loading is a technique used to improve the performance of web
          applications by reducing the initial bundle size. Instead of
          downloading every page when the application starts, React loads this
          page only when you navigate to it."
        visible={isVisibleSection === "What is Lazy Loading?"}
        setVisible={setIsVisibleSection}
      />

      <Section
        title="Why Use Lazy Loading?"
        description={
          "Large applications often contain many pages that users may never visit during a session. Loading all of them upfront increases the initial loading time. Lazy loading solves this problem by loading components on demand, helping applications scale while maintaining excellent performance."
        }
        visible={isVisibleSection === "Why Use Lazy Loading?"}
        setVisible={setIsVisibleSection}
      />
    </div>
  );
};

export default Instamart;
