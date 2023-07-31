import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-top: 130px
`;

const FooterText = styled.p`
  margin: 0;
`;

// const FooterLink = styled.a`
//   color: #fff;
//   text-decoration: none;
//   font-weight: bold;
// `;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>VisitLanka &copy; {new Date().getFullYear()}</FooterText>
      {/* <FooterText>
        Made with <span role="img" aria-label="Love">❤️</span> in Sri Lanka
      </FooterText> */}
      {/* <FooterText>
        Contact us: <FooterLink href="mailto:info@visitlanka.com">info@visitlanka.com</FooterLink>
      </FooterText> */}
    </FooterContainer>
  );
};

export default Footer;