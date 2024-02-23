import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ItemsPage from "./pages/ItemsPage";
import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "ItemsPage",
      element: <ItemsPage />,
    },
  ]);

  
  return (
    <>
      <RouterProvider router={router} />
        
    </>
  );
}

export default App;
