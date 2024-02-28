import React from "react";
import Header from "../components/Header";
import Sliders from "../components/Sliders";
import HomePageDescription from "../components/HomepageDescription";
import Footer from "../components/Footer";
import categories from "../data/categories";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const categoryCard = categories.slice(0, 3);

  return (
    <div className=" bg-gradient-to-br">
      <Header />
      <Sliders />
      <div></div>
      <HomePageDescription
        description={"description for the upper section"}
        heading={"Categories"}
        btnText={"Category btn"}
        category={categoryCard.map((categoryCard) => (
          <ProductCard title={categoryCard.name} image={categoryCard.image} />
        ))}
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
      <Footer />
    </div>
  );
};

export default HomePage;
