import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { useSelector } from "react-redux";

// Header Component
const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Header Section
    <div className="section__header bg-dark-background font-bold flex justify-between items-center px-5 py-2 fixed top-0 w-full border-b-1 border-gray-400">
      {/* Header Left */}
      <div className="header__left">
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/pankajsingh1594/Mock_Data/019b8b97615cb9ff6bf5529d4d9c3858e17fe983/Projects%20Logo's/Food_Junction_Logo.png"
            alt="Site Logo"
            className="w-full h-[80px]"
          />
        </Link>
      </div>

      {/* Header Center */}
      <div className="header__center">
        {/* Header Navigation */}
        <nav className="hidden md:flex list-none flex justify-center items-center gap-7 text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AboutPage"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-white"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ContactPage"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-white"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Instamart"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-white"
              }
            >
              Instamart
            </NavLink>
          </li>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="absolute top-full right-0 w-full bg-dark-background max-md:w-[50%] 
          max-md:h-[100vh] max-md:ml-auto md:hidden "
          >
            <ul className="flex flex-col text-white p-5 gap-5">
              <li>
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/AboutPage" onClick={() => setIsMenuOpen(false)}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/ContactPage" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink to="/Instamart" onClick={() => setIsMenuOpen(false)}>
                  Instamart
                </NavLink>
              </li>
              <li className="mt-3">
                {isLoggedIn ? (
                  <Link
                    to="/"
                    onClick={() => {
                      setIsLoggedIn(false);
                      setIsMenuOpen(false);
                    }}
                    className="bg-secondary text-black  px-5 py-2 rounded-full cursor-pointer"
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    to="/LoginForm"
                    onClick={() => {
                      setIsLoggedIn(true);
                      setIsMenuOpen(false);
                    }}
                    className="bg-primary text-white  px-5 py-2 rounded-full cursor-pointer"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Header Right */}
      <div className="header__right text-white flex justify-end md:justify-between max-md:ml-auto mr-0  items-center">
        <Link to="/Cart" className="mr-[35px] relative max-md:mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <span className=" inline-block bg-primary w-[20px] h-[20px] text-center pt-[1px] rounded-full text-[12px] absolute top-[-10px] left-[15px]">
            {cartItems?.length}
          </span>
        </Link>

        {isLoggedIn ? (
          <Link
            to="/"
            onClick={() => setIsLoggedIn(false)}
            className="bg-secondary text-black  px-5 py-2 rounded-full cursor-pointer max-md:hidden"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/LoginForm"
            onClick={() => setIsLoggedIn(true)}
            className="bg-primary text-white  px-5 py-2 rounded-full cursor-pointer max-md:hidden"
          >
            Login
          </Link>
        )}
      </div>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          // Close Icon (X)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default HeaderComponent;
