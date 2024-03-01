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
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "ItemsPage",
      element: <ItemsPage />,
    },
    {
      path: "Details/:itemId",
      element: <Details />,
    },
    {
      path: "CartPage",
      element: <CartPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
