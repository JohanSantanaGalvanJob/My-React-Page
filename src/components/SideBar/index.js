import React from "react";
import { useEffect, useState } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoute,
  SidebarMenu,
  SidebarLink,
} from "./SideBarElement";

const Sidebar = ({ isOpen, toggle }) => {
  const [color, setColor] = useState("light");
  const [fontColor, setFontColor] = useState("white");

  const changeAll = () => {
    changeColor();
    changeFontColor();
  }
  const changeFontColor = () => setFontColor(fontColor === "black" ? "white" : "black");
  const changeColor = () => setColor(color === "light" ? "#5e5e5e" : "light");

  useEffect(() => {
    document.body.style.backgroundColor = color === "light" ? "white" : "#5e5e5e";
  }, [color]);

  useEffect(() => {
    const cardParagraphs = document.querySelectorAll(".card-body > p");
    console.log(cardParagraphs);
    for (let i = 0; i < cardParagraphs.length; i++) {
      cardParagraphs[i].style.color = fontColor === "black" ? "white" : "black";
    }
  }, [fontColor]);

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">Inicio</SidebarLink>
          <SidebarLink to="/all-routes">Todas las Rutas</SidebarLink>
          <SidebarLink to="/Rss">Canal RSS</SidebarLink>
          <SidebarLink to="/Aframe">Ruta A-Frame</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap onClick={changeAll}>
          <SidebarRoute to=''>Dark Mode</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
