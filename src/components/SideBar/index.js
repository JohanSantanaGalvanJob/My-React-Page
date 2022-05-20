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

  const changeColor = () => setColor(color === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.style.backgroundColor = color === "light" ? "white" : "black";
  }, [color]);

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
        <SideBtnWrap onClick={changeColor}>
          <SidebarRoute to=''>Dark Mode</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
