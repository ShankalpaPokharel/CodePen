import { useState } from "react";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


import {
  LandingPageContent,
  Login,
  Signup,
  LandingPage,
  CodeEditorPage,
  PageNotFound,
} from "./components";

const router = createBrowserRouter([
  {
    path: "",
    element: <LandingPage />,
    children: [
      { path: "", element: <LandingPageContent /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    path: "/pen",
    element: <CodeEditorPage />,
  },
]);



function App() {
  return (
    <div className="font-lato ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
