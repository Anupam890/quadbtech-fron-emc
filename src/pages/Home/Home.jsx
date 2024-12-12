import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NewsletterSignup from "../../components/NewsletterSignup";



const Home = () => {
  return (
    <div>
      <Banner />
      <Navbar />
     
      <div>
        <Outlet />
      </div> 
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Home;
