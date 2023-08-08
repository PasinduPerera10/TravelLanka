import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img3 from './assests/logo.png';

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
      <Link to="/">
            <Logo src={img3} alt="Logo" />
          </Link>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/view1">Beaches</NavLink>
        <NavLink to="/view2">Cultural and Historical</NavLink>
        <NavLink to="/view3">Wildlife and Nature</NavLink>
        <NavLink to="/view4">Adventure and Trekking</NavLink>
        <NavLink to="/view5">Ayurveda and Wellness</NavLink>
        {/* <NavLink to="/view6">Hill Country</NavLink>
        <NavLink to="/view7">Cuisine</NavLink> */}
        <NavLink to="/view8">Festivals and Events</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;