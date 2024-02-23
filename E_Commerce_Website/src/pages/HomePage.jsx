import React from "react";
import Header from "../components/Header";
import Sliders from "../components/Sliders";
import HomePageDescription from "../components/HomepageDescription";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Sliders />
      <div>
        
      </div>
      <HomePageDescription
        description={"description for the upper section"}
        heading={"Categories"}
        btnText={"Category btn"}
      />
      {/* <HomePageDescription
        description={"description for the lower section"}
        heading={"Our latest arrival"}
        btnText={"arrival btn"}
      /> */}
      {/* <HomePageDescription
        description={"Our products description"}
        heading={"Our products"}
        btnText={"products btn"}
      /> */}
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
