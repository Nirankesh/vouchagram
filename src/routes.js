import React from "react";
import App from "./App";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";
import MenuList from "./components/MenuList";

export default [
  {
    path: "/",
    exact: true,
    ...App,
    routes: [
      {
        ...Home,
      },
    ],
  },
  {
    path: "/contact",
    ...App,
    routes: [
      {
        ...Contact,
      },
    ],
  },
  {
    path: "/contact-list",
    exact: true,
    ...App,
    routes: [
      {
        ...ContactList,
      },
    ],
  },
  {
    path: "/menu-list",
    exact: true,
    ...App,
    routes: [
      {
        ...MenuList,
      },
    ],
  },
];
