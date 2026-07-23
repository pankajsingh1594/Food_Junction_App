import React from "react";
import { useRouteError } from "react-router";

// Error Page Component
const ErrorPage = () => {
  const { error, status, statusText } = useRouteError();
  return (
    <>
      <h1>Error Page</h1>
      {/* <p>Error: {error}</p> */}
      <p>Status: {status}</p>
      <p>StatusText: {statusText}</p>
    </>
  );
};

export default ErrorPage;
