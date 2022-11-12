import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="https://play-lh.googleusercontent.com/LxBsjxy8_xFI7IkNsQeKl0RSuegjthKA8Mmmme9rTGiS_9zkJahznLB2jTr7pYKC_f8"
         alt="logo" 
         className="logo" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
  }
`;

export default Header;