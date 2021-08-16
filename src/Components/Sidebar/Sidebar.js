import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  BtnWrapper,
} from "./SidebarStyles";
import { Btn } from "../Globalstyles/GlobalStyles.js";

function Sidebar({ toggle, isOpen }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="/Blog" onClick={toggle}>
            Blog
          </SidebarLink>
          <SidebarLink to="/Contact" onClick={toggle}>
            Contact
          </SidebarLink>
          <SidebarLink to="/Support" onClick={toggle}>
            Support
          </SidebarLink>
          <BtnWrapper>
            <Btn to="/sigin" onClick={toggle}>
              Sign in
            </Btn>
          </BtnWrapper>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
