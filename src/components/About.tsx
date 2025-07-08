import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import { FaGraduationCap, FaCertificate, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const images = [
    {
      src: "/intern/2.jpg",
      alt: "Internship moment",
      description: "SOS 10th Year Anniversary and 2024 Year-End Glitz & Glam Party"
    },
    {
      src: "/intern/11.jpg",
      alt: "Internship moment",
      description: "SOS 10th Year Anniversary and 2024 Year-End Glitz & Glam Party"
    },
    {
      src: "/intern/7.jpg",
      alt: "Team presentation",
      description: "Presenting our project to the CEO"
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
      src: "/intern/6.jpg",
      alt: "Team photo",
      description: "Project demo presentation with the team"    
    },
    {
      src: "/intern/7.jpeg",
      alt: "Team photo",
      description: "Project demo presentation with the team"    
    },
    {
      src: "/intern/12.jpg",
      alt: "Certificate awarding",
      description: "Receiving certificate of completion"
    },
    {
      src: "/intern/1.jpg",
      alt: "Certificate awarding",
      description: "Receiving certificate of completion"
    },
    {
      src: "/intern/8.jpg",
      alt: "Certificate awarding",
      description: "Receiving certificate of completion"
    },
    {
      src: "/intern/5.jpg",
      alt: "Team photo",
      description: "Group photo with the internship team and Supervisor"
    }
  ];

  const nextImage = useCallback(() => {
    setDirection(1);
    setCurrentImageIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setDirection(-1);
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  // Autoplay effect with pause on hover
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextImage();
      }, 5000); // Change image every 5 seconds
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, nextImage]);

  const goToImage = (index: number) => {
    setDirection(index > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  }, [nextImage, prevImage]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  return (
    <AboutSection id="about">
      <SectionContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          About Me
          <TitleUnderline />
        </SectionTitle>

        <AboutContent>
          <IntroContainer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
<IntroText>
  <p>
    I'm a quiet but driven IT graduate who enjoys turning ideas into simple, meaningful tech solutions. I’ve worked on both web and mobile development projects, explored cloud tools, and integrated APIs — not just to finish tasks, but to understand how things truly work. Every project I’ve worked on has been part of a learning journey.
  </p>
  <p>
    As a woman in tech, I take pride in showing up with focus, consistency, and a results-driven mindset. I may not be the loudest in the room, but I think carefully before I build, and I stay committed to learning and improving through patience, problem-solving, and respectful collaboration. I believe good code isn't just about syntax; it's about intention.
  </p>
  <p>
    I’m still learning — and that’s something I’ve learned to embrace. My goal is to grow into a reliable developer who creates practical, human-centered tools that actually make a difference. I’m always open to new challenges, and I hope to keep improving — quietly, steadily, one project at a time.
  </p>
</IntroText>


            <SkillsContainer>
              <SkillsTitle>Technical Skills</SkillsTitle>
              <SkillsGrid>
                <SkillCategory>
                  <h4>Frontend</h4>
                  <SkillList>
                    <li>HTML5 / CSS3</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                  </SkillList>
                </SkillCategory>
                <SkillCategory>
                  <h4>Backend</h4>
                  <SkillList>
                    <li>PHP</li>
                    <li>MySQL</li>
                    <li>Firebase (Blaze Plan – Auth, Firestore, Storage)</li>
                  </SkillList>
                </SkillCategory>
                <SkillCategory>
                  <h4>Tools & Others</h4>
                  <SkillList>
                    <li>Git / GitHub / GitLab</li>
                    <li>Flutter (for mobile development)</li>
                    <li>Docker</li>
                    <li>Google Cloud Platform (GCS / Firebase Hosting)</li>
                  </SkillList>
                </SkillCategory>
              </SkillsGrid>
            </SkillsContainer>
          </IntroContainer>

          <InfoGrid>
            {/* Education Section */}
            <InfoCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <InfoTitle>
                <IconWrapper $color="#4e79a7">
                  <FaGraduationCap />
                </IconWrapper>
                Education
              </InfoTitle>
              <InfoItem>
                <h3>Caraga State University – Cabadbaran Campus</h3>
                <p>Bachelor of Science in Information Technology</p>
                <Duration>2021 – 2025</Duration>
                <AchievementsTitle>Notable Achievements:</AchievementsTitle>
                <AchievementsList>
                  <li>Deans Lister (1st Year)</li>
                  <li>Presidents Lister (4th Year, 1st Semester)</li>
                </AchievementsList>
              </InfoItem>
            </InfoCard>

            {/* Work Experience Section */}
            <InfoCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <InfoTitle>
                <IconWrapper $color="#e15759">
                  <FaLaptopCode />
                </IconWrapper>
                 Experience
              </InfoTitle>
              <InfoItem>
                <h3>Web Developer Intern</h3>
                <Company>Staff Outsourcing Solutions</Company>
                <Location>7F MDCT Building, Leyte Loop, Cebu Business Park, Cebu City, 6000 Philippines</Location>
                <Duration>August 2024 – January 2025</Duration>
                <AchievementsTitle>Key Responsibilities:</AchievementsTitle>
                <AchievementsList>
                  <li>Developed two complex, responsive web and mobile applications in collaboration with fellow intern team members using modern development tools and best practices</li>
                  <li>Worked closely with designers, developers, and testers to meet functional requirements and project deadlines</li>
                  <li>Gained hands-on experience in technologies such as React, Flutter, Firebase, Docker, and API integration</li>
                  <li>Utilized Git for version control to manage codebase changes and coordinate effectively with the team</li>
                </AchievementsList>
              </InfoItem>
              <InfoItem>
                <h3>Freelance Web Developer</h3>
                <Duration>2023 – Present</Duration>
                <AchievementsTitle>Projects:</AchievementsTitle>
                <AchievementsList>
                  <li>Developed custom web-based projects for students using PHP, focusing on functionality, usability, and academic requirements</li>
                  <li>Collaborated with clients to gather project requirements, implement requested features, and deliver responsive, presentable systems on time</li>
                  <li>Built user interfaces with HTML, CSS, JavaScript, and integrated backend logic using PHP and MySQL</li>
                </AchievementsList>
              </InfoItem>
              <InfoItem>
                <h3>Freelance Categorization / Image Annotation</h3>
                <Company>Remotasks (Online Job)</Company>
                <Duration>2021-2022</Duration>
                <AchievementsList>
                  <li>Performed accurate image annotation and data categorization for machine learning projects</li>
                  <li>Maintained high quality standards while meeting project deadlines</li>
                </AchievementsList>
              </InfoItem>
            </InfoCard>

            {/* Certifications Section */}
            <InfoCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <InfoTitle>
                <IconWrapper $color="#76b7b2">
                  <FaCertificate />
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
                  View Credential <FiExternalLink size={14} />
                </CertificationLink>
              </InfoItem>
              <InfoItem>
                <h3>DICT EDP Diagnostic Examination - Programming</h3>
                <Company>Caraga State University Cabadbaran Campus</Company>
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
            viewport={{ once: true, margin: "-100px" }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Internship Moments
              <TitleUnderline />
            </SectionTitle>
            <CarouselDescription>
              Snapshots from my internship journey — showcasing collaboration, presentations, and milestones.
            </CarouselDescription>
            <CarouselContainer>
              <CarouselButton 
                $direction="left" 
                onClick={prevImage}
                aria-label="Previous image"
              >
                <FiChevronLeft size={24} />
              </CarouselButton>
              
              <AnimatePresence custom={direction} initial={false}>
                <CarouselImage
                  key={currentImageIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                >
                  <img 
                    src={images[currentImageIndex].src} 
                    alt={images[currentImageIndex].alt}
                    loading="lazy"
                  />
                  <CarouselCaption>
                    {images[currentImageIndex].description}
                  </CarouselCaption>
                </CarouselImage>
              </AnimatePresence>
              
              <CarouselButton 
                $direction="right" 
                onClick={nextImage}
                aria-label="Next image"
              >
                <FiChevronRight size={24} />
              </CarouselButton>
            </CarouselContainer>
            
            <CarouselIndicators>
              {images.map((_, index) => (
                <CarouselIndicator 
                  key={index}
                  $active={index === currentImageIndex}
                  onClick={() => goToImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </CarouselIndicators>
          </CarouselSection>
        </AboutContent>
      </SectionContainer>
    </AboutSection>
  );
};

// Styled Components
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
    background: 
      radial-gradient(circle at 20% 50%, ${({ theme }) => theme.colors.primary}08, transparent 30%),
      radial-gradient(circle at 80% 70%, ${({ theme }) => theme.colors.secondary}08, transparent 25%);
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
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  display: inline-block;
  width: 100%;
`;

const TitleUnderline = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  margin: 1.5rem auto 0;
  border-radius: 2px;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const IntroContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.background};
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 5px 15px ${({ theme }) => theme.colors.shadow};
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const IntroText = styled.div`
  p {
    margin-bottom: 1.5rem;
    font-size: clamp(1rem, 2vw, 1.1rem);
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const SkillsContainer = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt2};
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const SkillsTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

const SkillCategory = styled.div`
  h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '•';
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 0;

  li {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 0.4rem;
    position: relative;
    padding-left: 1rem;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.primary};
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

interface IconWrapperProps {
  $color?: string;
}

const IconWrapper = styled.span<IconWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ $color, theme }) => $color ? `${$color}20` : `${theme.colors.primary}20`};
  border-radius: 12px;
  margin-right: 12px;
  color: ${({ $color, theme }) => $color || theme.colors.primary};
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

const AchievementsTitle = styled.p`
  font-weight: 500 !important;
  color: ${({ theme }) => theme.colors.text} !important;
  margin-top: 0.8rem !important;
`;

const AchievementsList = styled.ul`
  margin-top: 0.5rem;
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
      content: '▹';
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

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

const CarouselSection = styled(motion.div)`
  margin-top: 3rem;
  width: 100%;
`;

const CarouselDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
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
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-50%) scale(1.1);
    opacity: 1;
  }

  ${({ $direction }) => $direction === 'left' ? 'left: -25px;' : 'right: -25px;'}

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    ${({ $direction }) => $direction === 'left' ? 'left: -15px;' : 'right: -15px;'}
  }
`;

const CarouselImage = styled(motion.div)`
  position: absolute;
  width: 100%;
  max-width: 800px;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CarouselCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  padding: 1.5rem 1rem 0.5rem;
  text-align: center;
  font-size: 0.9rem;
`;

const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.8rem;
`;

interface CarouselIndicatorProps {
  $active: boolean;
}

const CarouselIndicator = styled.button<CarouselIndicatorProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primary : 'rgba(0, 0, 0, 0.2)'};
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  padding: 0;

  &:hover {
    transform: scale(1.2);
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export default About;