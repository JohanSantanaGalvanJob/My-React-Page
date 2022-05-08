import React from 'react'
import Header from "../components/Header/Header"
import Sidebar from "../components/SideBar/index"
import { useState } from "react"
 import '../Carousel.css'
import CarouselElement from '../components/Carrousel/CarrouselElements';
import "./Home.css";
import { Text } from 'react-desktop/windows';




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

      <div style={{
      display: 'block', width: 1000, paddingLeft: 30,marginTop:50
    }}>
      <h4>React Desktop Windows Text Component</h4>
      <Text
        background="lightblue"
        width="40%"
        padding="10px"> 
        Hello, This is a sample text to demonstrate 
        the Text Component of React Desktop Library 
        in ReactJS. How are you?
      </Text>
    </div>

    </>


  );
};

export default Home;

