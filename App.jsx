import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/HeaderComponent.jsx";
import BodyComponent from "./src/components/BodyComponent.jsx";
import FooterComponent from "./src/components/FooterComponent.jsx";
import AboutPage from "./src/components/AboutPage.jsx";
import ContactPage from "./src/components/ContactPage.jsx";
import ErrorPage from "./src/components/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./src/components/RestaurantMenu.jsx";
import LoginForm from "./src/components/LoginForm.jsx";
import { Provider } from "react-redux";
import store from "./src/utils/store.jsx";
import Cart from "./src/components/Cart.jsx";
import { ScrollButton } from "./src/utils/constant.jsx";

const Instamart = lazy(() => import("./src/components/Instamart.jsx"));

const App = () => {
  return (
    <>
      <Provider store={store}>
        <HeaderComponent />
        <Outlet />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#e7aa33"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12 fixed right-5 bottom-5 cursor-pointer max-md:bottom-12 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            onClick={ScrollButton()}
            title="Back To Top"
          />
        </svg>

        <FooterComponent />
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/AboutPage",
        element: <AboutPage />,
      },
      {
        path: "/ContactPage",
        element: <ContactPage />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<h2>Instamart is loading...</h2>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/LoginForm",
        element: <LoginForm />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<RouterProvider router={appRouter} />);
