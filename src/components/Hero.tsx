import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const fullText = ['Web Developer', 'Problem Solver', 'Continuous Learner'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % fullText.length;
      const currentText = fullText[i];
      
      setText(isDeleting 
        ? currentText.substring(0, text.length - 1) 
        : currentText.substring(0, text.length + 1));
      
      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, fullText, typingSpeed]);

  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroGrid>
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Subtitle>Hello, my name is</Subtitle>
              <Title>
                <FirstName>Jhoejeth</FirstName>
                <LastName>Mondejar</LastName>
              </Title>
              <Role>
                I'm an <HighlightedText>{text}</HighlightedText>
                <Cursor>|</Cursor>
              </Role>
              <Description>
                <p>
                  I specialize in building <Highlight>modern</Highlight>, <Highlight>efficient</Highlight> web applications that solve real-world problems. With a focus on clean code and user experience, I bring ideas to life through technology.
                </p>
              </Description>

              <ButtonGroup>
                <CTAButton 
                  href="#projects" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work <FiArrowRight style={{ marginLeft: '8px' }} />
                </CTAButton>
                <SecondaryButton 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </SecondaryButton>
              </ButtonGroup>

              <SocialLinks>
                <SocialLink 
                  href="https://github.com/jhoejeth13" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                >
                  <FiGithub size={20} />
                </SocialLink>
                <SocialLink 
                  href="https://linkedin.com/in/jhoejeth-mondejar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                >
                  <FiLinkedin size={20} />
                </SocialLink>
                <ResumeLink 
                  // href="/CV/Mondejar, Jhoejeth L. - final.pdf"  
                  // download="Jhoejeth_Mondejar_Resume.pdf"
                  whileHover={{ y: -3 }}
                >
                  <FiDownload size={20} />
                  <span>Download CV</span>
                </ResumeLink>
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
            </motion.div>
          </PhotoContainer>
        </HeroGrid>
      </HeroContainer>
    </HeroSection>
  );
};

// Styled Components
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  position: relative;
`;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;

  @media (max-width: 768px) {
    padding: 4rem 5%;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 3rem;
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
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 8vw, 4rem);
  }
`;

const FirstName = styled.span`
  position: relative;
  display: inline-block;
`;

const LastName = styled.span`
  color: ${({ theme }) => theme.colors.primary};
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
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 1.5rem 0;
  font-weight: 500;
  min-height: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 1.2rem 0;
  }
`;

const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const Cursor = styled.span`
  display: inline-block;
  margin-left: 4px;
  animation: blink 1s infinite;
  color: ${({ theme }) => theme.colors.primary};

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const Description = styled.div`
  font-size: 1.1rem;
  max-width: 500px;
  margin: 2rem 0;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    margin: 1.5rem 0;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  position: relative;
  white-space: nowrap;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
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
  margin: 2.5rem 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 2rem 0;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: black;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(100, 108, 255, 0.2);
  border: none;
  
  &:hover {
    box-shadow: 0 10px 20px rgba(100, 108, 255, 0.3);
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 0.9rem 1.6rem;
    font-size: 0.95rem;
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    background: rgba(100, 108, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(100, 108, 255, 0.1);
  }

  @media (max-width: 480px) {
    padding: 0.9rem 1.6rem;
    font-size: 0.95rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 2rem;
  }
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.3s ease;
  display: inline-flex;
  cursor: pointer;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  &:hover {
    color: black;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(100, 108, 255, 0.2);
  }
`;

const ResumeLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0.75rem 1.25rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 50px;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  span {
    display: none;
    @media (min-width: 480px) {
      display: inline;
    }
  }
  
  &:hover {
    color: black;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(100, 108, 255, 0.2);
  }
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
  max-width: 450px;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  position: relative;
  z-index: 2;
  aspect-ratio: 1/1;
  filter: grayscale(20%);
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.02);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 1024px) {
    max-width: 380px;
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export default Hero;