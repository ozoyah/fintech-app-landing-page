import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/HeroSection/Hero";
import Features from "./components/FeaturesSection/Features";
import Roles from "./components/RolesSection/Roles";
import Insights from "./components/InsightsSection/Insights";
import Products from "./components/ProductsSection/Products";
import Testimonial from "./components/TestimonialSection/Testimonial";
import Services from "./components/ServicesSection/Services";
import Footer from "./components/FooterSection/Footer";
const App = () => {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Features />
      <Roles />
      <Insights />
      <Products />
      <Testimonial />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
