import { useState } from "react";

import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./redux/store";

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
  Protected,
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
      { path: "/protected", element: <Protected/> },
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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
