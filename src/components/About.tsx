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
    { src: "/intern/7.jpg", alt: "Team presentation", description: "Presenting our final project to the CEO — nerve-wracking but fulfilling", category: 'presentations' },
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
              Snapshots from my journey at eComia — a mix of learning moments, team collaborations, and the little milestones that made it meaningful.
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
                  onClick={(e: { stopPropagation: () => any; }) => e.stopPropagation()} 
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

// Styled Components
const AboutSection = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors?.backgroundAlt || '#f8f9fa'};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 10% 30%, rgba(78, 121, 167, 0.05), transparent 25%),
                radial-gradient(circle at 90% 70%, rgba(118, 183, 178, 0.05), transparent 25%);
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
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
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.textPrimary || '#333'};
  position: relative;
  display: inline-block;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
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
  gap: 3rem;
`;

const IntroContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: ${({ theme }) => theme.colors?.background || '#fff'};
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.colors?.border || '#eaeaea'};
  position: relative;
  overflow: hidden;

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
  }
`;

const IntroHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  grid-column: 1 / -1;
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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    color: #4e79a7;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
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
    color: ${({ theme }) => theme.colors?.text || '#333'};
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
  border-radius: 12px;
  aspect-ratio: 1/1;
  object-fit: cover;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
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
  background: ${({ theme }) => theme.colors?.background || '#fff'};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid ${({ theme }) => theme.colors?.border || '#eaeaea'};
  position: relative;
  overflow: hidden;
  height: 600px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #4e79a7, #76b7b2);
  }
`;

const ScrollableContent = styled.div`
  overflow-y: auto;
  height: 100%;
  padding-right: 0.5rem;
  flex: 1;
  
  /* Custom scrollbar */
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

interface IconWrapperProps {
  $color?: string;
}

const IconWrapper = styled.span<IconWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ $color }) => `${$color}20`};
  border-radius: 12px;
  margin-right: 12px;
  color: ${({ $color }) => $color};
  backdrop-filter: blur(5px);

  svg {
    width: 20px;
    height: 20px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors?.textPrimary || '#333'};
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px dashed ${({ theme }) => theme.colors?.border || '#eaeaea'};

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors?.textPrimary || '#333'};
    font-weight: 600;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors?.textSecondary || '#666'};
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`;

const Company = styled.p`
  color: #4e79a7 !important;
  font-weight: 500;
  margin-bottom: 0.3rem !important;
`;

const Location = styled.p`
  color: ${({ theme }) => theme.colors?.textSecondary || '#666'} !important;
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
  color: ${({ theme }) => theme.colors?.textSecondary || '#666'} !important;
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
  color: ${({ theme }) => theme.colors?.textPrimary || '#333'} !important;
  margin-top: 0.8rem !important;
`;

const AchievementsList = styled.ul`
  margin-top: 0.5rem;
  padding-left: 0;
  list-style-type: none;

  li {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors?.text || '#333'};
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;
    line-height: 1.5;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #4e79a7;
      font-weight: bold;
    }
  }
`;

const CertificationLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  color: #4e79a7;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(78, 121, 167, 0.1);
  margin-top: 0.5rem;
  font-size: 0.9rem;
  gap: 0.5rem;

  &:hover {
    color: white;
    background: #4e79a7;
    text-decoration: none;
    box-shadow: 0 5px 15px rgba(78, 121, 167, 0.3);
  }

  svg {
    transition: transform 0.2s ease;
    
    &:hover {
      transform: translateX(3px);
    }
  }
`;

const GallerySection = styled.section`
  margin-top: 4rem;
  width: 100%;
`;

const GalleryDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 2rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors?.textSecondary || '#666'};
  line-height: 1.6;
`;

const FilterControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

interface FilterButtonProps {
  $active: boolean;
}

const FilterButton = styled(motion.button)<FilterButtonProps>`
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  border: none;
  background: ${({ $active }) => $active ? '#4e79a7' : 'transparent'};
  color: ${({ $active }) => $active ? 'white' : '#4e79a7'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid ${({ $active }) => $active ? 'transparent' : '#4e79a7'};

  &:hover {
    background: ${({ $active }) => $active ? '#3a5d80' : 'rgba(78, 121, 167, 0.1)'};
  }
`;

const LandscapeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

interface LandscapeItemProps {
  $category: string;
}

const LandscapeItem = styled(motion.div)<LandscapeItemProps>`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 250px; /* Fixed height */
  width: 100%; /* Full width of grid cell */

  /* Center the image */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5; /* Light background for images with transparency */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    
    img {
      transform: scale(1.03);
    }
    
    div {
      opacity: 1;
    }
  }
height: auto;
  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain; /* Show full image without cropping */
    transition: transform 0.5s ease;
  }
`;

interface GalleryImageOverlayProps {
  $category: string;
}

interface ModalContentProps {
  $category: 'events' | 'presentations' | 'certifications';
  theme?: any; // Optional theme prop if using styled-components theme
}

const GalleryImageOverlay = styled.div<GalleryImageOverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ $category }) => {
    switch($category) {
      case 'events': return 'linear-gradient(to top, rgba(255, 255, 255, 0.95), transparent)';
      case 'presentations': return 'linear-gradient(to top, rgba(255, 255, 255, 0.85), transparent)';
      case 'certifications': return 'linear-gradient(to top, rgba(255, 255, 255, 0.85), transparent)';
      default: return 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)';
    }
  }};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  p {
    text-align: center;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    line-height: 1.4;
  }
  
  svg {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

const ModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

const ModalContent = styled(motion.div)<ModalContentProps>`
  position: relative;
  width: 90vw; /* Use viewport width for better responsiveness */
  max-width: min(900px, 90vw); /* Never exceed 900px or 90% of viewport */
  max-height: 90vh; /* Use viewport height instead of fixed value */
  background: ${({ theme }) => theme.colors?.background || '#fff'};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border-top: 5px solid ${({ $category }) => {
    switch($category) {
      case 'events': return '#4e79a7';
      case 'presentations': return '#e15759';
      case 'certifications': return '#76b7b2';
      default: return '#4e79a7';
    }
  }};
  display: flex;
  flex-direction: column;

  /* Responsive adjustments */
  @media (max-width: 1024px) { /* Laptop sizes */
    max-width: 80vw;
    max-height: 70vh;
  }

  @media (max-width: 768px) { /* Tablet sizes */
    max-width: 98vw;
    max-height: 90vh;
    border-radius: 12px;
  }

  @media (max-width: 480px) { /* Mobile sizes */
    max-width: 100vw;
    max-height: 95vh;
    border-radius: 0;
    width: 100%;
  }
`;

const ModalImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;
`;

const ModalImage = styled.img`
  max-width: 90vw; /* 90% of viewport width */
  max-height: 80vh; /* 80% of viewport height */
  width: auto;
  height: auto;
  object-fit: contain; /* Show full image without cropping */
  border-radius: 8px;
`;

const ImageCaption = styled.div`
  padding: 1.5rem;
  text-align: center;
  background: ${({ theme }) => theme.colors?.background || '#fff'};
  color: ${({ theme }) => theme.colors?.textPrimary || '#333'};
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ImageCounter = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors?.textSecondary || '#666'};
`;

const NavigationButtons = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  transform: translateY(-50%);
  z-index: 5;
`;

const NavButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export default About;