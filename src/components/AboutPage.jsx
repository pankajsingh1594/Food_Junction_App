import React from "react";

// About Page Component
const AboutPage = () => {
  return (
    <div className="px-10 pt-40 pb-30 max-md:px-5 max-md:pt-30 max-md:pb-20 bg-dark-background text-white">
      <div>
        <h1 className="text-3xl font-bold text-secondary">
          About Food Junction
        </h1>
        <p className="mt-3">
          Welcome to Food Junction, a modern food ordering application built to
          provide a smooth and user-friendly online food ordering experience.
          This project was created to practice and demonstrate modern frontend
          development concepts using React and related technologies.
          <br />
          <br />
          The application allows users to browse restaurants, explore menus, add
          their favorite dishes to the cart, and manage their orders through a
          clean and responsive interface. The focus of this project is to
          deliver a fast, intuitive, and engaging user experience.
        </p>
      </div>
      <div className="mt-15 max-md:mt-5">
        <h2 className="text-2xl font-bold text-secondary">Features</h2>
        <ul className="columns-3 list-disc pl-5 mt-3 max-md:columns-1">
          <li>Browse a collection of restaurants</li>
          <li>Browse a collection of restaurants</li>
          <li>Search restaurants by name</li>
          <li>Filter restaurants based on ratings</li>
          <li>Add and remove items from the cart</li>
          <li>Dynamic cart with total amount calculation</li>
          <li>Responsive design for desktop and mobile devices</li>
          <li>Fast page navigation using React Router</li>
          <li>State management using Redux</li>
        </ul>
      </div>

      <div className="mt-15 max-md:mt-5">
        <h2 className="text-2xl font-bold text-secondary">Note</h2>
        <p className="mt-3">
          This application is developed as a personal learning project. The
          restaurant and menu data are sourced from public APIs or mock datasets
          for educational purposes only. No real food orders or payments are
          processed through this application.
          <br />
          <br />
          Thank you for visiting Food Junction! I hope you enjoy exploring the
          application as much as I enjoyed building it.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
