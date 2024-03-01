import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ItemsPage from "./pages/ItemsPage";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "ItemsPage",
      element: <ItemsPage />,
    },
    {
      path: "Details/:itemId",
      element: <Details/>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
