import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/HeroSection/Hero";
import Features from "./components/FeaturesSection/Features";
import Roles from "./components/RolesSection/Roles";
import Insights from "./components/InsightsSection/Insights";
import Products from "./components/ProductsSection/Products";
const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <Features />
      <Roles />
      <Insights />
      <Products />
    </div>
  );
};

export default App;
