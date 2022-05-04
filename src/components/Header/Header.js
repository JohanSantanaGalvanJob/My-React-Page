import React from "react";
import {FaBars} from 'react-icons/fa';
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

import Logo from "../../images/logo.svg";

const Header = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" > <img src={Logo}
               alt='home'/></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="/">
                Inicio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/all-routes">
                Todas las rutas
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
          <NavBtnLink to="/all-routes">Sign In</NavBtnLink>
        </NavBtn>
        </NavbarContainer>
       
      </Nav>
    </>
  );
};

export default Header;
