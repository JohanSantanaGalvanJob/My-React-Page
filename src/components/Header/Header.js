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

  const changeColor = () => setColor(color === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.style.backgroundColor = color === "light" ? "white" : "black";
  }, [color]);

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
              <NavLink to="/Aframe">Aframe</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn onClick={changeColor}>
            <NavBtnLink to="">Dark Mode</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
