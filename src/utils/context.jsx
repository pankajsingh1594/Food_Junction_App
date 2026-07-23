import React, { createContext } from "react";

// User Context
export const userData = createContext({
  user: {
    name: "Pankaj",
    age: 32,
    email: "reachpankajsingh@gmail.com",
  },
});
