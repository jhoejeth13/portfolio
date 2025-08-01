import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiZoomIn } from 'react-icons/fi';
import { FaGraduationCap, FaCertificate, FaLaptopCode } from 'react-icons/fa';

interface ImageItem {
  src: string;
  alt: string;
  description: string;
  category: 'events' | 'presentations' | 'certifications';
}

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<'events' | 'presentations' | 'certifications'>('events');

  const images: ImageItem[] = [
    { src: "/intern/2.jpg", alt: "Internship moment", description: "SOS 10th Year Anniversary and 2024 Year-End Glitz & Glam Party", category: 'events' },
    { src: "/intern/11.jpg", alt: "Internship moment", description: "SOS 10th Year Anniversary and 2024 Year-End Glitz & Glam Party", category: 'events' },
    // { src: "/intern/7.jpg", alt: "Team presentation", description: "Presenting our final project to the CEO — nerve-wracking but fulfilling", category: 'presentations' },
    { src: "/intern/3.jpg", alt: "Team presentation", description: "Presenting our final project to the CEO — nerve-wracking but fulfilling", category: 'presentations' },
    { src: "/intern/4.jpg", alt: "Project demo", description: "Presenting our final project to the CEO — nerve-wracking but fulfilling", category: 'presentations' },
    { src: "/intern/6.jpg", alt: "Team photo", description: "Project demo presentation with the team", category: 'presentations' },
    { src: "/intern/7.jpeg", alt: "Team photo", description: "Project demo presentation with the team", category: 'presentations' },
    { src: "/intern/12.jpg", alt: "Certificate awarding", description: "Receiving certificate of completion", category: 'certifications' },
    { src: "/intern/1.jpg", alt: "Certificate awarding", description: "Receiving certificate of completion", category: 'certifications' },
    { src: "/intern/8.jpg", alt: "Certificate awarding", description: "Receiving certificate of completion", category: 'certifications' },
    { src: "/intern/5.jpg", alt: "Team photo", description: "Group photo with the internship team and Supervisor", category: 'certifications' }
  ];

  const filteredImages = images.filter(img => img.category === filter);

  const nextImage = useCallback(() => {
    setDirection(1);
    setCurrentImageIndex(prevIndex => prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setDirection(-1);
    setCurrentImageIndex(prevIndex => prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [filteredImages.length]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isAutoPlaying && filteredImages.length > 0) {
      intervalId = setInterval(() => nextImage(), 5000);
    }
    return () => { if (intervalId) clearInterval(intervalId) };
  }, [isAutoPlaying, nextImage, filteredImages.length]);

  const goToImage = (index: number) => {
    setDirection(index > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    else if (e.key === 'ArrowLeft') prevImage();
    else if (e.key === 'Escape' && selectedImage !== null) setSelectedImage(null);
  }, [nextImage, prevImage, selectedImage]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
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
              <IntroHeader>
                <ProfileImageContainer>
                  <ProfileImage src="/me/22.png" alt="Profile" />
                  <DecorativeCircle />
                </ProfileImageContainer>
                <IntroHeaderText>
                  <h3>Turning Ideas into Digital Reality</h3>
                  <p>Web Developer | Problem Solver | Continuous Learner</p>
                </IntroHeaderText>
              </IntroHeader>
              <p>I'm a quiet but driven IT graduate who enjoys turning ideas into simple, meaningful tech solutions. I've worked on both web and mobile development projects, explored cloud tools, and integrated APIs — not just to finish tasks, but to understand how things truly work. Every project I've worked on has been part of a learning journey.</p>
              <p>As a woman in tech, I take pride in showing up with focus, consistency, and a results-driven mindset. I may not be the loudest in the room, but I think carefully before I build, and I stay committed to learning and improving through patience, problem-solving, and respectful collaboration. I believe good code isn't just about syntax; it's about intention.</p>
              <p>I'm still learning — and that's something I've learned to embrace. My goal is to grow into a reliable developer who creates practical, human-centered tools that actually make a difference. I'm always open to new challenges, and I hope to keep improving — quietly, steadily, one project at a time.</p>
            </IntroText>

            <PhotoGallery>
              <GalleryImage 
                src="/me/1.png" 
                alt="Working on project" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.3 }} 
                viewport={{ once: true, margin: "-100px" }} 
              />
              <GalleryImage 
                src="/me/2.jpg" 
                alt="Presenting work" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }} 
                viewport={{ once: true, margin: "-100px" }} 
              />
            </PhotoGallery>
          </IntroContainer>

          <InfoGrid>
            <InfoCard 
              whileHover={{ y: -5 }} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }} 
              viewport={{ once: true, margin: "-100px" }}
            >
              <InfoTitle>
                <IconWrapper $color="#4e79a7"><FaGraduationCap /></IconWrapper>
                Education
              </InfoTitle>
              <ScrollableContent>
                <InfoItem>
                  <h3>Caraga State University – Cabadbaran Campus</h3>
                  <p>Bachelor of Science in Information Technology</p>
                  <Duration>2021 – 2025</Duration>
                  <AchievementsTitle>Notable Achievements:</AchievementsTitle>
                  <AchievementsList>
                    <li>Deans Lister (1st Year)</li>
                    <li>Presidents Lister (4th Year, 1st semester)</li>
                  </AchievementsList>
                </InfoItem>
              </ScrollableContent>
            </InfoCard>

            <InfoCard 
              whileHover={{ y: -5 }} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }} 
              viewport={{ once: true, margin: "-100px" }}
            >
              <InfoTitle>
                <IconWrapper $color="#e15759"><FaLaptopCode /></IconWrapper>
                Experience
              </InfoTitle>
              <ScrollableContent>
                <InfoItem>
                  <h3>Web Developer Intern</h3>
                  <Company>Staff Outsourcing Solutions (eComia)</Company>
                  <Location>7F MDCT Building, Leyte Loop, Cebu Business Park, Cebu City, 6000 Philippines</Location>
                  <Duration>August 2024 – January 2025</Duration>
                  <AchievementsTitle>Key Responsibilities:</AchievementsTitle>
                  <AchievementsList>
                    <li>Developed two complex, responsive web and mobile applications in collaboration with fellow intern team members using modern development tools and best practices</li>
                    <li>Worked closely with designers, developers, and testers to meet functional requirements and project deadlines</li>
                    <li>Gained hands-on experience in technologies such as React, Flutter, Firebase, Docker, and API integration</li>
                    <li>Utilized Git for version control to manage codebase changes and coordinate effectively with the team</li>
                    <li>Participated in agile development processes including daily standups and sprint planning</li>
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
                    <li>Created documentation and provided training for end-users on system operation</li>
                  </AchievementsList>
                </InfoItem>
                <InfoItem>
                  <h3>Freelance Categorization / Image Annotation</h3>
                  <Company>Remotasks (Online Job)</Company>
                  <Duration>2021-2022</Duration>
                  <AchievementsList>
                    <li>Performed accurate image annotation and data categorization for machine learning projects</li>
                    <li>Maintained high quality standards while meeting project deadlines</li>
                    <li>Worked independently with minimal supervision to complete tasks efficiently</li>
                  </AchievementsList>
                </InfoItem>
              </ScrollableContent>
            </InfoCard>

            <InfoCard 
              whileHover={{ y: -5 }} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.5 }} 
              viewport={{ once: true, margin: "-100px" }}
            >
              <InfoTitle>
                <IconWrapper $color="#76b7b2"><FaCertificate /></IconWrapper>
                Certifications
              </InfoTitle>
              <ScrollableContent>
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
              </ScrollableContent>
            </InfoCard>
          </InfoGrid>

          <GallerySection>
            <SectionTitle 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              viewport={{ once: true, margin: "-100px" }}
            >
              My Experience
              <TitleUnderline />
            </SectionTitle>
            <GalleryDescription>
Snapshots from my time at eComia — moments of learning, collaboration, and small wins during my internship that shaped my growth as a developer.
           </GalleryDescription>
            
            <FilterControls>
              <FilterButton 
                $active={filter === 'events'} 
                onClick={() => setFilter('events')} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                Events
              </FilterButton>
              <FilterButton 
                $active={filter === 'presentations'} 
                onClick={() => setFilter('presentations')} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                Presentations
              </FilterButton>
              <FilterButton 
                $active={filter === 'certifications'} 
                onClick={() => setFilter('certifications')} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                Certifications
              </FilterButton>
            </FilterControls>
            
            <LandscapeGrid>
              {filteredImages.map((image, index) => (
                <LandscapeItem 
                  key={index} 
                  layout 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5 }} 
                  onClick={() => setSelectedImage(index)} 
                  $category={image.category}
                >
                  <GalleryImageOverlay $category={image.category}>
                    <FiZoomIn size={24} />
                    <p>{image.description}</p>
                  </GalleryImageOverlay>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </LandscapeItem>
              ))}
            </LandscapeGrid>
          </GallerySection>

          <AnimatePresence>
            {selectedImage !== null && (
              <ModalBackdrop 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                onClick={() => setSelectedImage(null)}
              >
                <ModalContent 
                  variants={modalVariants} 
                  initial="hidden" 
                  animate="visible" 
                  exit="exit" 
                  onClick={(e) => e.stopPropagation()} 
                  $category={filteredImages[selectedImage].category}
                >
                  <CloseButton 
                    onClick={() => setSelectedImage(null)} 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.9 }}
                  >
                    &times;
                  </CloseButton>
                  <ModalImageContainer>
                    <ModalImage 
                      src={filteredImages[selectedImage].src} 
                      alt={filteredImages[selectedImage].alt} 
                    />
                  </ModalImageContainer>
                  <ImageCaption>
                    {filteredImages[selectedImage].description}
                    <ImageCounter>{selectedImage + 1} / {filteredImages.length}</ImageCounter>
                  </ImageCaption>
                  <NavigationButtons>
                    <NavButton 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        setSelectedImage(prev => prev === 0 ? filteredImages.length - 1 : (prev || 0) - 1) 
                      }} 
                      whileHover={{ scale: 1.1 }} 
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiChevronLeft size={28} />
                    </NavButton>
                    <NavButton 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        setSelectedImage(prev => prev === filteredImages.length - 1 ? 0 : (prev || 0) + 1) 
                      }} 
                      whileHover={{ scale: 1.1 }} 
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiChevronRight size={28} />
                    </NavButton>
                  </NavigationButtons>
                </ModalContent>
              </ModalBackdrop>
            )}
          </AnimatePresence>
        </AboutContent>
      </SectionContainer>
    </AboutSection>
  );
};

// Modernized Styled Components
const AboutSection = styled.section`
  padding: 8rem 0;
  background: ${({ theme }) => theme.colors?.backgroundAlt || '#f8f9fa'};
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 10% 30%, rgba(78, 121, 167, 0.05), transparent 25%),
      radial-gradient(circle at 90% 70%, rgba(118, 183, 178, 0.05), transparent 25%);
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
  margin-bottom: 4rem;
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.textPrimary || '#2d3748'};
  position: relative;
  display: inline-block;
  width: 100%;
`;

const TitleUnderline = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #4e79a7, #76b7b2);
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
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  background: ${({ theme }) => theme.colors?.background || '#fff'};
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.colors?.border || '#eaeaea'};
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(78, 121, 167, 0.1), transparent 70%);
    z-index: 0;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
  }
`;

const IntroHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  grid-column: 1 / -1;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #4e79a7;
  position: relative;
  z-index: 2;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const DecorativeCircle = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4e79a7, #76b7b2);
  z-index: 1;
  animation: rotate 15s linear infinite;

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const IntroHeaderText = styled.div`
  h3 {
    font-size: clamp(1.5rem, 3vw, 1.75rem);
    margin-bottom: 0.5rem;
    color: #4e79a7;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors?.textSecondary || '#666'};
    margin: 0;
    font-weight: 500;
  }
`;

const IntroText = styled.div`
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors?.text || '#2d3748'};
    position: relative;
    z-index: 1;

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const PhotoGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-content: start;
`;

const GalleryImage = styled(motion.img)`
  width: 100%;
  border-radius: 16px;
  aspect-ratio: 1/1;
  object-fit: cover;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const InfoCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors?.background || '#fff'};
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid ${({ theme }) => theme.colors?.border || '#eaeaea'};
  position: relative;
  overflow: hidden;
  height: 650px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, #4e79a7, #76b7b2);
  }

  @media (max-width: 768px) {
    padding: 2rem;
    height: auto;
    max-height: 600px;
  }
`;

const ScrollableContent = styled.div`
  overflow-y: auto;
  height: 100%;
  padding-right: 0.8rem;
  flex: 1;
  
  /* Custom scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #4e79a7 ${({ theme }) => theme.colors?.border || '#eaeaea'};
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors?.border || '#eaeaea'};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #4e79a7;
    border-radius: 3px;
  }
`;

const IconWrapper = styled.span<{ $color?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${({ $color }) => `${$color}15`};
  border-radius: 14px;
  margin-right: 14px;
  color: ${({ $color }) => $color};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.8rem;
  color: ${({ theme }) => theme.colors?.textPrimary || '#2d3748'};
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const InfoItem = styled.div`
  margin-bottom: 1.8rem;
  padding-bottom: 1.8rem;
  border-bottom: 1px dashed ${({ theme }) => theme.colors?.border || '#eaeaea'};

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
    color: ${({ theme }) => theme.colors?.textPrimary || '#2d3748'};
    font-weight: 600;
    line-height: 1.4;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors?.textSecondary || '#666'};
    margin-bottom: 0.6rem;
    line-height: 1.7;
  }
`;

const Company = styled.p`
  color: #4e79a7 !important;
  font-weight: 600;
  margin-bottom: 0.4rem !important;
`;

const Location = styled.p`
  color: ${({ theme }) => theme.colors?.textSecondary || '#666'} !important;
  font-size: 0.85rem !important;
  margin-bottom: 0.6rem !important;
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &::before {
    content: '📍';
    font-size: 0.9rem;
  }
`;

const Duration = styled.p`
  color: ${({ theme }) => theme.colors?.textSecondary || '#666'} !important;
  font-size: 0.85rem !important;
  margin-bottom: 1rem !important;
  opacity: 0.9;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &::before {
    content: '📅';
    font-size: 0.9rem;
  }
`;

const AchievementsTitle = styled.p`
  font-weight: 600 !important;
  color: ${({ theme }) => theme.colors?.textPrimary || '#2d3748'} !important;
  margin-top: 1rem !important;
  margin-bottom: 0.6rem !important;
`;

const AchievementsList = styled.ul`
  margin-top: 0.6rem;
  padding-left: 0;
  list-style-type: none;

  li {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors?.text || '#2d3748'};
    margin-bottom: 0.6rem;
    position: relative;
    padding-left: 1.6rem;
    line-height: 1.6;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #4e79a7;
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`;

const CertificationLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  color: #4e79a7;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
  background: rgba(78, 121, 167, 0.1);
  margin-top: 0.8rem;
  font-size: 0.9rem;
  gap: 0.6rem;
  border: 1px solid rgba(78, 121, 167, 0.3);

  &:hover {
    color: white;
    background: #4e79a7;
    text-decoration: none;
    box-shadow: 0 8px 20px rgba(78, 121, 167, 0.3);
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.3s ease;
  }
`;

const GallerySection = styled.section`
  margin-top: 5rem;
  width: 100%;
`;

const GalleryDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors?.textSecondary || '#666'};
  line-height: 1.7;
  opacity: 0.9;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: 1rem;
  }
`;

const FilterControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const FilterButton = styled(motion.button)<{ $active: boolean }>`
  padding: 0.6rem 1.8rem;
  border-radius: 30px;
  border: none;
  background: ${({ $active }) => $active ? '#4e79a7' : 'transparent'};
  color: ${({ $active }) => $active ? 'white' : '#4e79a7'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid ${({ $active }) => $active ? 'transparent' : '#4e79a7'};
  font-size: 0.95rem;
  letter-spacing: 0.5px;

  &:hover {
    background: ${({ $active }) => $active ? '#3a5d80' : 'rgba(78, 121, 167, 0.1)'};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const LandscapeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const LandscapeItem = styled(motion.div)<{ $category: string }>`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    
    img {
      transform: scale(1.05);
    }
    
    div {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  @media (max-width: 768px) {
    height: 240px;
  }
`;

const GalleryImageOverlay = styled.div<{ $category: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ $category }) => {
    switch($category) {
      case 'events': return 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent 40%)';
      case 'presentations': return 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent 40%)';
      case 'certifications': return 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent 40%)';
      default: return 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)';
    }
  }};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.4s ease;
  
  p {
    text-align: center;
    margin-top: 1rem;
    font-size: 0.95rem;
    line-height: 1.5;
    color: white;
  }
  
  svg {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
    color: white;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    
    p {
      font-size: 0.9rem;
    }
  }
`;

const ModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(12px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)<{ $category: 'events' | 'presentations' | 'certifications' }>`
  position: relative;
  width: 90vw;
  max-width: min(1000px, 90vw);
  max-height: 90vh;
  background: ${({ theme }) => theme.colors?.background || '#fff'};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
  border-top: 6px solid ${({ $category }) => {
    switch($category) {
      case 'events': return '#4e79a7';
      case 'presentations': return '#e15759';
      case 'certifications': return '#76b7b2';
      default: return '#4e79a7';
    }
  }};
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    max-width: 85vw;
    max-height: 85vh;
  }

  @media (max-width: 768px) {
    max-width: 95vw;
    max-height: 90vh;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    max-width: 100vw;
    max-height: 95vh;
    border-radius: 0;
    width: 100%;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    top: 15px;
    right: 15px;
  }
`;

const ModalImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: calc(90vh - 200px);
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-height: calc(85vh - 180px);
  }

  @media (max-width: 480px) {
    max-height: calc(95vh - 160px);
  }
`;

const ImageCaption = styled.div`
  padding: 1.8rem;
  text-align: center;
  background: ${({ theme }) => theme.colors?.background || '#fff'};
  color: ${({ theme }) => theme.colors?.textPrimary || '#2d3748'};
  font-size: 1.05rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-top: 1px solid ${({ theme }) => theme.colors?.border || '#eaeaea'};

  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 1rem;
  }
`;

const ImageCounter = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors?.textSecondary || '#666'};
  opacity: 0.8;
`;

const NavigationButtons = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  transform: translateY(-50%);
  z-index: 5;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const NavButton = styled(motion.button)`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export default About;