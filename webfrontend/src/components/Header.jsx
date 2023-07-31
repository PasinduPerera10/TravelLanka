import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img3 from './assests/image1.jpg';

const HeaderContainer = styled.div`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: 50px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={img3} alt="Logo" />
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/category1">Beaches</NavLink>
        <NavLink to="/category2">Cultural and Historical</NavLink>
        <NavLink to="/category1">Wildlife and Nature</NavLink>
        <NavLink to="/category2">Adventure and Trekking</NavLink>
        <NavLink to="/category1">Ayurveda and Wellness</NavLink>
        <NavLink to="/category2">Hill Country</NavLink>
        <NavLink to="/category1">Cuisine</NavLink>
        <NavLink to="/category2">Festivals and Events</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;