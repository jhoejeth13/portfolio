import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroGrid>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Subtitle>Hi, I'm</Subtitle>
            <Title>Jhoejeth Layos Mondejar</Title>
            <Role>Web Developer in Progress</Role>
<Description>
<p>
Passionate about building <Highlight>practical</Highlight>, <Highlight>efficient</Highlight> systems that solve real problems and make a meaningful impact through technology — while continuously learning and growing as a <Highlight>developer</Highlight>.</p>
</Description>

            <ButtonGroup>
              <CTAButton 
                href="#projects" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </CTAButton>
              { <DownloadButton 
                href="/CV/Mondejar, Jhoejeth L. - final.pdf"  
                download="Jhoejeth Mondejar - CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload style={{ marginRight: '8px' }} />
                Download CV
              </DownloadButton> }
            </ButtonGroup>

            <SocialLinks>
              <SocialLink 
                href="https://github.com/jhoejeth13" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FiGithub size={24} />
              </SocialLink>
              <SocialLink 
                href="https://linkedin.com/in/jhoejeth-mondejar" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FiLinkedin size={24} />
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </HeroContent>

        <PhotoContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProfilePhoto 
              src="/4.jpg" 
              alt="Jhoejeth Mondejar" 
              whileHover={{ scale: 1.02 }}
            />
            <PhotoDecoration />
          </motion.div>
        </PhotoContainer>
      </HeroGrid>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 5%;
  background: linear-gradient(
    to bottom right, 
    ${({ theme }) => theme.colors.background}, 
    ${({ theme }) => theme.colors.backgroundAlt}
  );
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem 5%;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  z-index: 2;
  padding: 2rem 0;

  @media (max-width: 768px) {
    order: 2;
    padding: 1rem 0;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 5rem);
  margin: 0.5rem 0;
  background: linear-gradient(90deg,rgb(92, 90, 90), #94a3b8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.05em;

  @media (max-width: 768px) {
    font-size: clamp(2.2rem, 8vw, 3.5rem);
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Role = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  font-weight: 500;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 500px;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    margin-bottom: 1.5rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 0.9rem 1.8rem;
  background: ${({ theme }) => theme.colors.primary};
  color: blue;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 0.9rem 1.8rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    background: rgba(100, 108, 255, 0.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.3s ease;
  display: inline-flex;
  cursor: pointer;
  padding: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
    background: ${({ theme }) => theme.colors.primaryLight};
  }
            background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const PhotoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 2rem;
  }
`;

const ProfilePhoto = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  position: relative;
  z-index: 2;
  border: 5px solid white;
  aspect-ratio: 1/1;

  @media (max-width: 1024px) {
    max-width: 350px;
  }

  @media (max-width: 768px) {
    max-width: 280px;
  }
`;

const PhotoDecoration = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  top: 20px;
  left: 20px;
  z-index: 1;
  opacity: 0.5;

  @media (max-width: 1024px) {
    max-width: 350px;
    max-height: 350px;
  }

  @media (max-width: 768px) {
    max-width: 280px;
    max-height: 280px;
    top: 15px;
    left: 15px;
  }
`;

export default Hero;