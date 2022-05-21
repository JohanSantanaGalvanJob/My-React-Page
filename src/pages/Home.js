import React from 'react'
import Header from "../components/Header/Header"
import Sidebar from "../components/SideBar/index"
import { useState } from "react"
import CarouselElement from '../components/Carrousel/CarrouselElements';
import "./Home.css";
import Footer from "../components/Footer/Footer";
import CardsInfo from '../components/Cards/CardsInfo';
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";



const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (

    <>
    <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <div className='home-carousel'>
        <CarouselElement />
      </div>
      <CardsInfo />
      <Footer />
    </>
  );
};

export default Home;

