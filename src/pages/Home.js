import React from 'react'
import Header from "../components/Header/Header"
import Sidebar from "../components/SideBar/index"
import { useState } from "react"
 import '../Carousel.css'
import CarouselElement from '../components/Carrousel/CarrouselElements';
import "./Home.css";




const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  const carrouselList = [
    { src: './img/sabios_guias_1.jpg', title: 'img1', description: 'bar' },
    { src: './img/sabios_guias_2.jpg', title: 'img2', description: 'bar' },
    { src: './img/sabios_guias_3.jpg', title: 'img3', description: 'bar' },
    { src: './img/sabios_guias_3.jpg', title: 'img3', description: 'bar' },
    { src: './img/sabios_guias_1.jpg', title: 'img1', description: 'bar' },
    { src: './img/sabios_guias_2.jpg', title: 'img2', description: 'bar' },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },

  ];

  return (

    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <div className='carousel'>
      <CarouselElement/>
      </div>
    </>


  );
};

export default Home;

