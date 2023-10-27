// Este es un comentario que indica a Next.js que este componente debe ser tratado como un componente de cliente
// y, por lo tanto, ser renderizado en el lado del cliente.
// ./src\app\recomendaciones\components\HamburgerMenu.tsx
"use client";
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
`;

const Nav = styled.nav`
  background-color: #F7F7F7;
  padding: 10px;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  padding: 8px;
  display: block;
`;

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div>
      <Container>
      <Button onClick={toggleMenu} aria-label="Toggle Menu">☰</Button>
      {isOpen && (
        <Nav>
          <NavList>
            <li><NavLink href="#science-tree">Árbol de la Ciencia</NavLink></li>
            <li><NavLink href="#courses">Cursos</NavLink></li>
            <li><NavLink href="#books">Libros</NavLink></li>
            {/* ... other menu items ... */}
          </NavList>
        </Nav>
      )}
      </Container>
    </div>
  );
};



export default HamburgerMenu;
