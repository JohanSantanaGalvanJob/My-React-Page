import React from "react";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./HeaderElements.js";

import Logo from "../../assets/images/LogoSabiosGuias-Inverso.png";
import { useNavigate } from "react-router-dom";

const Header = ({ toggle }) => {
  const navigate = useNavigate();
  const [color, setColor] = useState("light");
  const [fontColor, setFontColor] = useState("white");
  const [bodyFontColor, setBodyFontColor] = useState("white");

  const changeAll = () => {
    changeColor();
    changeFontColor();
    changeBodyFontColor();
  }

  const changeColor = () => setColor(color === "light" ? "#5e5e5e" : "light");
  const changeFontColor = () => setFontColor(fontColor === "black" ? "white" : "black");
  const changeBodyFontColor = () => setBodyFontColor(bodyFontColor === "black" ? "white" : "black");

  useEffect(() => {
    document.body.style.backgroundColor = color === "light" ? "white" : "#5e5e5e";
  }, [color]);

  useEffect(() => {
    document.body.style.color = bodyFontColor === "black" ? "white" : "black";
  }, [bodyFontColor]);

  useEffect(() => {
    const cardParagraphs = document.querySelectorAll(".card-body > p");
    console.log(cardParagraphs);
    for (let i = 0; i < cardParagraphs.length; i++) {
      cardParagraphs[i].style.color = fontColor === "black" ? "white" : "black";
    }
  }, [fontColor]);

  const handleHeader = () => {
    navigate("/all-routes");
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            {" "}
            <img src={Logo} alt="home" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/all-routes">Todas las rutas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Rss">Canal RSS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Aframe/5/1">Aframe</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn onClick={changeAll}>
            <NavBtnLink to="">Dark Mode</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
