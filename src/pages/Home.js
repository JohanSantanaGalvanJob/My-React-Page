import React from 'react'
import Header from "../components/Header/Header"
import Sidebar from "../components/SideBar/index"
import { useState } from "react"

import CarouselElement from '../components/Carrousel/CarrouselElements';
// import { Text } from 'react-desktop/windows';

import "./Home.css";

import Footer from "../components/Footer/Footer";



const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  const arrayText = [
    { src: 'educacion_icon.png', alt: 'Educación', description: 'El proyecto Sabios Guías Intérpretes pretende acercarse aun más a la población juvenil a través del Programa enSeñas con el objetivo de incorporar de manera integral nuestros valores históricos, culturales y patrimoniales a la práctica educativa, entendida en su generalidad: formal, no formal e informal.' },
    { src: 'guias_icon-copia.png', alt: 'Guías', description: 'Te proponemos una nueva forma de recorrer nuestros pueblos y municipios. De la mano de nuestros mayores podrás vivir de primera mano los usos originales de los lugares de interés y sus vivencias de antaño. Disfruta de la Naturaleza y también de la Historia.' },
    { src: 'vidassabias_icon-copia.png', alt: 'Vidas Sabias', description: 'Vidas Sabias nace con el objetivo de fomentar la recopilación audiovisual del patrimonio cultural inmaterial que las personas de Canarias nos aportan. Un reconocimiento al valor del saber popular y que no está escrito. Necesario para conocer y entender la riqueza cultural que nos rodea.' },
  ];

  return (

    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />

      <div className='home-carousel'>
        <CarouselElement />
      </div>

      <div className='home-array-text-container'>
        {arrayText.map((item) =>
          <div className='home-array-text-item'>
            <div className='home-array-text-image'>
              <img src={`/img/${item.src}`} alt={item.alt} />
            </div>

            <div className='home-array-text-description'>
              <p>{item.description}</p>
            </div>
          </div>
        )}
      </div>

      <Footer />

    </>


  );
};

export default Home;

