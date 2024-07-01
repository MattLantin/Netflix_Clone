import React from 'react';
import styled from 'styled-components';
import { logo, avatar } from '../assets/index';
import { useEffect, useState } from 'react';

function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  // Trigger function 👀
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar); // 💪 Clean up
  }, []);

  return (
    <>
      <Nav show={show}>
        <Content>
          <Logo src={logo} alt="Logo" />
          <Avatar src={avatar} alt="Avatar" />
        </Content>
      </Nav>
      <MainContent>
        {/* Content to enable scrolling */}
        {Array.from({ length: 100 }, (_, i) => (
          <h1 key={i}>HI</h1>
        ))}
      </MainContent>
    </>
  );
}

export default Navbar;

const Nav = styled.div`
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  z-index: 100;
  background-color: ${({ show }) => (show ? '#111' : 'transparent')};
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  position: fixed;
  left: 0px;
  padding-left: 20px;
  top: 10px;
  width: 80px;
  cursor: pointer;
  object-fit: contain;
`;

const Avatar = styled.img`
  position: fixed;
  right: 20px;
  width: 30px;
  cursor: pointer;
`;

const MainContent = styled.div`
  margin-top: 80px; /* Adjust based on Nav height to prevent overlap */
`;
