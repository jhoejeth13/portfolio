// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Jhoejeth Mondejar. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;