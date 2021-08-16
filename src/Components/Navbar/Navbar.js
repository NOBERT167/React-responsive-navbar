import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  BtnWrapper,
} from "./NavbarStyles";
import { Btn } from "../Globalstyles/GlobalStyles";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">LOGO</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/blog">Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Contact">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/support">Support</NavLinks>
            </NavItem>
          </NavMenu>
          <BtnWrapper>
            <Btn to="/signin">Sign in</Btn>
          </BtnWrapper>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
