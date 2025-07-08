import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';

interface HeaderProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Header = ({ toggleTheme, theme }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer $scrolled={scrolled}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Nav>
          <Logo href="#home">Jeth Dev</Logo>
          
          <DesktopNavLinks>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            {/* <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </ThemeToggleButton> */}
          </DesktopNavLinks>

          <MobileMenuButton onClick={toggleMobileMenu} aria-label="Menu">
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </MobileMenuButton>
        </Nav>

        <MobileMenu $isOpen={isMobileMenuOpen}>
          <MobileNavLink href="#about" onClick={toggleMobileMenu}>About</MobileNavLink>
          <MobileNavLink href="#skills" onClick={toggleMobileMenu}>Skills</MobileNavLink>
          <MobileNavLink href="#projects" onClick={toggleMobileMenu}>Projects</MobileNavLink>
          <MobileNavLink href="#contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
          <MobileThemeToggle onClick={toggleTheme}>
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </MobileThemeToggle>
        </MobileMenu>
      </motion.div>
    </HeaderContainer>
  );
};

// Styled Components
const HeaderContainer = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 5%;
  z-index: 1000;
  background-color: ${({ theme, $scrolled }) => 
    $scrolled ? theme.colors.background : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ $scrolled }) => 
    $scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem 5%;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
    background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text};
`;

const DesktopNavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  display: none;
  z-index: 1001;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem 2rem;
  transform: translateX(${({ $isOpen }) => $isOpen ? '0' : '100%'});
  transition: transform 0.3s ease;
  z-index: 1000;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileThemeToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1.5rem 0 0;
  margin-top: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Header;