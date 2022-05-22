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
      <div className="video-home">
        <iframe
          width="500"
          height="280"
          src="https://www.youtube.com/embed/Ztg7kqNP8DE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
      </div>
      <div className="video-home">
        <iframe
          width="500"
          height="280"
          src="https://www.youtube.com/embed/5S9rfFyu634"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
      </div>
      <Footer />
    </>
  );
};

export default Home;

