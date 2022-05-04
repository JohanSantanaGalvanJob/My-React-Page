import  React from 'react'
import Header from "../components/Header/Header"
import Sidebar from "../components/SideBar/index"
import { useState } from "react"
import '../ImageStyle.css'




const Home = () =>{
    const[isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    let carrouselList = [
        {src:'./img/sabios_guias_1.jpg', title:'img1',description:'bar'},
        {src:'./img/sabios_guias_2.jpg', title:'img2',description:'bar'},
        {src:'./img/sabios_guias_3.jpg', title:'img3',description:'bar'},
        {src:'./img/sabios_guias_3.jpg', title:'img3',description:'bar'},
        {src:'./img/sabios_guias_1.jpg', title:'img1',description:'bar'},
        {src:'./img/sabios_guias_2.jpg', title:'img2',description:'bar'},
    ];
    
    return (
        
            <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Header toggle={toggle}/>
            <div>
              {
              carrouselList.map((index) => <img src={index.src} title={index.title} alt="images" height="250"
              width="700" className='carrouselImages'/>)
              }  
            </div>
           </>

        
    );
};

export default Home;

