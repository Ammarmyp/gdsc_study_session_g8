import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePageDescription from "./components/HomepageDescription";
import Sliders from "./components/Sliders";

function App() {
  const description = "";
  const heading = "";
  const btnText = "";
  return (
    <>
      <Header />
      <Sliders />
      <HomePageDescription
        description={"description for the upper section"}
        heading={"Categories"}
        btnText={"Category btn"}
      />
      <HomePageDescription
        description={"description for the lower section"}
        heading={"Our latest arrival"}
        btnText={"arrival btn"}
      />
      <HomePageDescription
        description={"Our products description"}
        heading={"Our products"}
        btnText={"products btn"}
      />
      <Footer/>
    </>
  );
}

export default App;
