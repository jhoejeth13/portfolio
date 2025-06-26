import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    {
      src: "/intern/2.jpg",
      alt: "Internship moment",
    },
    {
      src: "/intern/3.jpg",
      alt: "Team presentation",
      description: "Presenting our project to the CEO"
    },
    {
      src: "/intern/4.jpg",
      alt: "Project demo",
      description: "Presenting our project to the CEO"
    },
    {
      src: "/intern/1.jpg",
      alt: "Certificate awarding",
      description: "Receiving certificate of completion"
    },
    {
      src: "/intern/5.jpg",
      alt: "Team photo",
      description:"Group photo with the internship team and Supervisor"
    }
  ];

  // Autoplay effect
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <AboutSection id="about">
      <SectionContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </SectionTitle>

        <AboutContent>
          <IntroText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
I’m a dedicated IT graduate with a passion for turning ideas into real-world solutions. Over the past few years, I’ve built a strong foundation in web and mobile development, explored cloud technologies, and worked with API integrations. Through these experiences, I’ve developed essential skills in problem-solving, adaptability, and collaboration. Now, I’m eager to take the next step in my journey—continuing to grow, learn, and contribute meaningfully in the tech industry.            </p>
          </IntroText>

          <InfoGrid>
            {/* Education Section */}
            <InfoCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <InfoTitle>
                <IconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </IconWrapper>
                Education
              </InfoTitle>
              <InfoItem>
                <h3>Caraga State University – Cabadbaran Campus</h3>
                <p>Bachelor of Science in Information Technology</p>
                <Duration>2021 – 2025</Duration>
                <AchievementsList>
                  <li>Deans Lister (1st Year)</li>
                  <li>Presidents Lister (4th Year, 1st Semester)</li>
                  <li>ICT Student Congress – Certification (Member)</li>
                </AchievementsList>
              </InfoItem>
            </InfoCard>

            {/* Work Experience Section */}
            <InfoCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <InfoTitle>
                <IconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </IconWrapper>
                Work Experience
              </InfoTitle>
              <InfoItem>
                <h3>Web Developer Intern</h3>
                <Company>Staff Outsourcing Solutions</Company>
                <Location>7F MDCT Building, Leyte Loop, Cebu Business Park, Cebu City, 6000 Philippines</Location>
                <Duration>August 2024 - January 2025</Duration>
                <AchievementsList>
                  <li>Developed two complex responsive web and mobile applications</li>
                  <li>Collaborated with cross-functional teams</li>
                  <li>Implemented RESTful API integrations</li>
                </AchievementsList>
              </InfoItem>
              <InfoItem>
                <h3>Freelance Categorization / Image Annotation</h3>
                <Company>Remotasks (Online Job)</Company>
                <Duration>2021-2022</Duration>
              </InfoItem>
            </InfoCard>

            {/* Certifications Section */}
            <InfoCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <InfoTitle>
                <IconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </IconWrapper>
                Certifications
              </InfoTitle>
              <InfoItem>
                <h3>JavaScript Essentials 1</h3>
                <Company>Issued by Cisco</Company>
                <Duration>June 25, 2025</Duration>
                <CertificationLink 
                  href="https://www.credly.com/badges/1ee3fbc7-9bd5-47d4-8d2a-3bf78e227f5f/public_url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Credential
                </CertificationLink>
              </InfoItem>
              <InfoItem>
                <h3>DICT EDP Diagnostic Examination</h3>
                <Company>CSU – Cabadbaran Campus</Company>
                <Duration>May 2, 2025</Duration>
                <p>Qualified for ICT Proficiency Certification Examination</p>
              </InfoItem>
              <InfoItem>
                <h3>API Integration Training</h3>
                <Company>Staff Outsourcing Solutions</Company>
                <Duration>September 27, 2024</Duration>
              </InfoItem>
              <InfoItem>
                <h3>Back End Training</h3>
                <Company>Staff Outsourcing Solutions</Company>
                <Duration>September 13, 2024</Duration>
              </InfoItem>
              <InfoItem>
                <h3>Front End and JavaScript Training</h3>
                <Company>Staff Outsourcing Solutions</Company>
                <Duration>September 13, 2024</Duration>
              </InfoItem>
              <InfoItem>
                <h3>UI/UX Design Training</h3>
                <Company>Staff Outsourcing Solutions</Company>
                <Duration>September 13, 2024</Duration>
              </InfoItem>
            </InfoCard>
          </InfoGrid>

          {/* Image Carousel Section */}
          <CarouselSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CarouselTitle>Internship Moments</CarouselTitle>
            <CarouselContainer>
              <CarouselButton $direction="left" onClick={prevImage}>
                <FiChevronLeft />
              </CarouselButton>
              
              <CarouselImage>
                <img 
                  src={images[currentImageIndex].src} 
                  alt={images[currentImageIndex].alt}
                  style={{ objectFit: 'contain' }}
                />
                <CarouselCaption>
                  {images[currentImageIndex].description}
                  <CarouselIndicators>
                    {images.map((_, index) => (
                      <CarouselIndicator 
                        key={index}
                        $active={index === currentImageIndex}
                        onClick={() => {
                          setCurrentImageIndex(index);
                          setIsAutoPlaying(false);
                          setTimeout(() => setIsAutoPlaying(true), 5000);
                        }}
                      />
                    ))}
                  </CarouselIndicators>
                </CarouselCaption>
              </CarouselImage>
              
              <CarouselButton $direction="right" onClick={nextImage}>
                <FiChevronRight />
              </CarouselButton>
            </CarouselContainer>
          </CarouselSection>
        </AboutContent>
      </SectionContainer>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 8rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, ${({ theme }) => theme.colors.primary}10, transparent 30%),
                radial-gradient(circle at 80% 70%, ${({ theme }) => theme.colors.secondary}10, transparent 25%);
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 5rem;
  font-size: clamp(2rem, 5vw, 3rem);
  position: relative;
  font-weight: 700;
  display: block;
  width: 100%;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  background-clip: text;
  color: white;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    margin: 1.5rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
            background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const IntroText = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};

  p {
    margin-bottom: 0;
    font-size: clamp(1rem, 2vw, 1.1rem);
    background: ${({ theme }) => theme.colors.background};
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 5px 15px ${({ theme }) => theme.colors.shadow};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (max-width: 768px) {
    text-align: left;
    
    p {
      padding: 1.5rem;
    }
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px ${({ theme }) => theme.colors.shadow};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;
  will-change: transform;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px ${({ theme }) => theme.colors.shadowHover};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary}20;
  border-radius: 12px;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.primary};
  backdrop-filter: blur(5px);

  svg {
    width: 20px;
    height: 20px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.border};

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`;

const Company = styled.p`
  color: ${({ theme }) => theme.colors.primary} !important;
  font-weight: 500;
  margin-bottom: 0.3rem !important;
`;

const Location = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary} !important;
  font-size: 0.85rem !important;
  margin-bottom: 0.5rem !important;
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  &::before {
    content: '📍';
    font-size: 0.9rem;
  }
`;

const Duration = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary} !important;
  font-size: 0.85rem !important;
  margin-bottom: 0.8rem !important;
  opacity: 0.9;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  &::before {
    content: '📅';
    font-size: 0.9rem;
  }
`;

const AchievementsList = styled.ul`
  margin-top: 1rem;
  padding-left: 0;
  list-style-type: none;

  li {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;
    line-height: 1.5;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
    }
  }
`;

const CertificationLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primaryLight};
  margin-top: 0.5rem;
  font-size: 0.9rem;
  gap: 0.5rem;

  &:hover {
    color: white;
    background: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    box-shadow: 0 5px 15px ${({ theme }) => theme.colors.primary}30;
  }

  &::after {
    content: '→';
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: translateX(3px);
  }
`;

const CarouselSection = styled(motion.div)`
  margin-top: 3rem;
  width: 100%;
`;

const CarouselTitle = styled.h3`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    margin: 0.8rem auto 0;
    border-radius: 2px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface CarouselButtonProps {
  $direction: 'left' | 'right';
}

const CarouselButton = styled.button<CarouselButtonProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-50%) scale(1.1);
  }

  ${({ $direction }) => $direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
`;

const CarouselImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const CarouselCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  padding: 1.5rem;
  text-align: center;
  font-size: 1rem;
`;

const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

interface CarouselIndicatorProps {
  $active: boolean;
}

const CarouselIndicator = styled.div<CarouselIndicatorProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primary : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export default About;