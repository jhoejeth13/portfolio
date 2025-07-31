import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FiMoon, FiSun, FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';
import { useState, useEffect } from 'react';

interface HeaderProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Header = ({ toggleTheme, theme }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <HeaderContainer $scrolled={scrolled} $isMenuOpen={isMobileMenuOpen}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Nav>
          <Logo href="#home" $active={activeSection === 'home'}>
            <LogoText>Jeth</LogoText>
            <LogoDot>.</LogoDot>
          </Logo>
          
          <DesktopNavLinks>
            {navLinks.map((link) => (
              <NavLink 
                key={link.id}
                href={`#${link.id}`}
                $active={activeSection === link.id}
              >
                {link.label}
                {activeSection === link.id && (
                  <ActiveIndicator layoutId="activeIndicator" />
                )}
              </NavLink>
            ))}
            
            <SocialIcons>
              <SocialIcon 
                href="https://github.com/jhoejeth13" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </SocialIcon>
              <SocialIcon 
                href="https://linkedin.com/in/jhoejeth-mondejar" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </SocialIcon>
            </SocialIcons>
            
            {/* <ThemeToggleButton 
              onClick={toggleTheme} 
              aria-label="Toggle theme"
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
            </ThemeToggleButton> */}
          </DesktopNavLinks>

          <MobileMenuButton 
            onClick={toggleMobileMenu} 
            aria-label="Menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </MobileMenuButton>
        </Nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut' }}
            >
              <MobileNavList>
                {navLinks.map((link) => (
                  <motion.li key={link.id}>
                    <MobileNavLink 
                      href={`#${link.id}`} 
                      onClick={toggleMobileMenu}
                      $active={activeSection === link.id}
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </MobileNavLink>
                  </motion.li>
                ))}
              </MobileNavList>
              
              <MobileMenuFooter>
                <MobileSocialIcons>
                  <SocialIcon 
                    href="https://github.com/jhoejeth13" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FiGithub size={20} />
                  </SocialIcon>
                  <SocialIcon 
                    href="https://linkedin.com/in/jhoejeth-mondejar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={20} />
                  </SocialIcon>
                </MobileSocialIcons>
                
                {/* <MobileThemeToggle  */}
                  {/* onClick={toggleTheme}
                  whileTap={{ scale: 0.95 }} */}
                {/* > */}
                  {/* {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                  <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span> */}
                {/* </MobileThemeToggle> */}
              </MobileMenuFooter>
            </MobileMenu>
          )}
        </AnimatePresence>
      </motion.div>
    </HeaderContainer>
  );
};

// Styled Components
const HeaderContainer = styled.header<{ $scrolled: boolean; $isMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 5%;
  z-index: 1000;
  background-color: ${({ theme, $scrolled }) => 
    $scrolled ? theme.colors.background : 'transparent'};
  backdrop-filter: ${({ $scrolled, $isMenuOpen }) => 
    $scrolled || $isMenuOpen ? 'blur(12px)' : 'none'};
  box-shadow: ${({ $scrolled, theme }) => 
    $scrolled ? `0 2px 20px ${theme.colors.shadow}` : 'none'};
  transition: all 0.3s ease;
  border-bottom: ${({ $scrolled, theme }) => 
    $scrolled ? `1px solid ${theme.colors.border}` : 'none'};

  @media (max-width: 768px) {
    padding: 1.2rem 5%;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.a<{ $active: boolean }>`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme, $active }) => 
    $active ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LogoText = styled.span`
  position: relative;
`;

const LogoDot = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const DesktopNavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a<{ $active: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme, $active }) => 
    $active ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ActiveIndicator = styled(motion.span)`
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 20px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const ThemeToggleButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  padding: 0.6rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const MobileMenuButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  display: none;
  z-index: 1001;
  padding: 0.6rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem 2rem;
  z-index: 1000;
  box-shadow: -5px 0 15px ${({ theme }) => theme.colors.shadow};

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileNavLink = styled(motion.a)<{ $active: boolean }>`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme, $active }) => 
    $active ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  padding: 0.5rem 0;
  display: block;
  transition: color 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    opacity: ${({ $active }) => $active ? 1 : 0};
    transition: opacity 0.3s ease;
  }
`;

const MobileMenuFooter = styled.div`
  margin-top: auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileSocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const MobileThemeToggle = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 500;
  padding: 0.8rem;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Header;