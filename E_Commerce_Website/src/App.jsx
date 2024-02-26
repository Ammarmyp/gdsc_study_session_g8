import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import ItemsPage from "./pages/ItemsPage";
import HomePage from "./pages/HomePage";

function App() {
   
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/ItemsPage" element={<ItemsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
