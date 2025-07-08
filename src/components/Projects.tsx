import { useState, useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ReactModal from 'react-modal';

const projectCategories = [
  {
    name: "Graduates and Alumni DB System",
    description: "A centralized platform using K-means clustering to manage alumni records and evaluate institutional impact through graduate tracer data.",
    projects: [
      { id: 1, image: "/FuamiScreenshots/1.png", tags: ["Laravel", "Blade", "PHP", "MySQL", "JavaScript", "Tailwind CSS"] },
      { id: 2, image: "/FuamiScreenshots/2.png", tags: ["Laravel", "Blade", "PHP", "MySQL", "JavaScript", "Tailwind CSS"] },
      { id: 3, image: "/FuamiScreenshots/3.png", tags: ["Laravel", "Blade", "PHP", "MySQL", "JavaScript", "Tailwind CSS"] },
      { id: 4, image: "/FuamiScreenshots/4.png", tags: ["Laravel", "Blade", "PHP", "MySQL", "JavaScript", "Tailwind CSS"] },
      { id: 5, image: "/FuamiScreenshots/5.png", tags: ["Laravel", "Blade", "PHP", "MySQL", "JavaScript", "Tailwind CSS"] },
      { id: 6, image: "/FuamiScreenshots/6.png", tags: ["Laravel", "Blade", "PHP", "MySQL", "JavaScript", "Tailwind CSS"] },
      { id: 7, image: "/FuamiScreenshots/7.png", tags: ["Laravel", "Blade", "PHP", "MySQL", "JavaScript", "Tailwind CSS"] },
      { id: 8, image: "/FuamiScreenshots/8.png", tags: ["Laravel", "Blade", "PHP", "MySQL", "JavaScript", "Tailwind CSS"] }
    ]
  },
  {
    name: "QUEUE+",
    description: "QUEUE+ aims to enhance queue workflow during peak periods like enrollment, prevent crowded hallways at the CEIT office counter, and facilitate seamless transactions between clerks and students.",
    projects: [
      { id: 9, image: "/Queue+/1.png", tags: ["PHP", "JavaScript", "MySQL", "CSS", "Bootstrap"] },
      { id: 10, image: "/Queue+/2.png", tags: ["PHP", "JavaScript", "MySQL", "CSS", "Bootstrap"] },
      { id: 11, image: "/Queue+/3.png", tags: ["PHP", "JavaScript", "MySQL", "CSS", "Bootstrap"] },
      { id: 12, image: "/Queue+/4.png", tags: ["PHP", "JavaScript", "MySQL", "CSS", "Bootstrap"] },
      { id: 13, image: "/Queue+/5.png", tags: ["PHP", "JavaScript", "MySQL", "CSS", "Bootstrap"] },
      { id: 14, image: "/Queue+/6.png", tags: ["PHP", "JavaScript", "MySQL", "CSS", "Bootstrap"] },
      { id: 15, image: "/Queue+/7.png", tags: ["PHP", "JavaScript", "MySQL", "CSS", "Bootstrap"] },
      { id: 16, image: "/Queue+/8.png", tags: ["PHP", "JavaScript", "MySQL", "CSS", "Bootstrap"] },
    ]
  },
  {
    name: "Barangay Time and Wage System",
    description: "Digital solution for tracking employee attendance, work hours, and automated wage computation in local government units.",
    projects: [
      { id: 17, image: "/Apsystem/1.png", tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"] },
      { id: 18, image: "/Apsystem/2.png", tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"] },
      { id: 19, image: "/Apsystem/3.png", tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"] },
      { id: 20, image: "/Apsystem/4.png", tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"] }
    ]
  },
  {
    name: "Earthquake Occurrence Analysis",
    description: "This project investigates the temporal behavior of earthquakes in the Philippines, focusing specifically on identifying the hours of the day when seismic events most frequently occur. The study utilizes a historical earthquake dataset and implements a Python-based analytical pipeline built on the Streamlit framework.",
    projects: [
      { id: 29, image: "/Earthquake/1.png", tags: ["Python", "Streamlit", "Pandas", "Plotly", "Pydeck and Folium"] },
      { id: 30, image: "/Earthquake/2.png", tags: ["Python", "Streamlit", "Pandas", "Plotly", "Pydeck and Folium"] },
      { id: 31, image: "/Earthquake/3.png", tags: ["Python", "Streamlit", "Pandas", "Plotly", "Pydeck and Folium"] },
      { id: 32, image: "/Earthquake/4.png", tags: ["Python", "Streamlit", "Pandas", "Plotly", "Pydeck and Folium"] },
      { id: 33, image: "/Earthquake/5.png", tags: ["Python", "Streamlit", "Pandas", "Plotly", "Pydeck and Folium"] }
    ]
  }
];

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set app element when component mounts
    ReactModal.setAppElement('#root');
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ProjectsSection ref={sectionRef} id="projects">
      <BackgroundPattern />
      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>
            <span>Project Portfolio</span>
          </SectionTitle>
          
          <SectionDescription>
            Here are some of the projects I worked on during college. While I'm only able to share a few due to privacy restrictions, they reflect my learning and hands-on experience.
          </SectionDescription>
        </HeaderContainer>

        {!isMobile && (
          <CategoryTabs>
            {projectCategories.map((category, index) => (
              <TabButton
                key={category.name}
                $active={activeCategory === index}
                onClick={() => setActiveCategory(index)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {category.name}
                <TabHighlight $active={activeCategory === index} $isHovering={isHovering} />
              </TabButton>
            ))}
          </CategoryTabs>
        )}

        <ProjectViewerContainer>
          {isMobile ? (
            <MobileProjectViewer>
              {projectCategories.map((category, index) => (
                <ProjectCategory key={category.name}>
                  <CategoryContent>
                    <CategoryHeader>
                      <CategoryTitle>{category.name}</CategoryTitle>
                      <CategoryDescription>{category.description}</CategoryDescription>
                    </CategoryHeader>
                    
                    <TechStack>
                      <h4>Technology Stack</h4>
                      <TechPills>
                        {category.projects[0].tags.map((tag) => (
                          <TechPill key={tag}>{tag}</TechPill>
                        ))}
                      </TechPills>
                    </TechStack>
                  </CategoryContent>

                  <ProjectCarousel category={category} />
                </ProjectCategory>
              ))}
            </MobileProjectViewer>
          ) : (
            <DesktopProjectViewer>
              <AnimatePresence mode="wait">
                <ProjectCategory 
                  key={projectCategories[activeCategory].name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <CategoryContent>
                    <CategoryHeader>
                      <CategoryTitle>{projectCategories[activeCategory].name}</CategoryTitle>
                      <CategoryDescription>{projectCategories[activeCategory].description}</CategoryDescription>
                    </CategoryHeader>
                    
                    <TechStack>
                      <h4>Technology Stack</h4>
                      <TechPills>
                        {projectCategories[activeCategory].projects[0].tags.map((tag) => (
                          <TechPill key={tag}>{tag}</TechPill>
                        ))}
                      </TechPills>
                    </TechStack>
                  </CategoryContent>

                  <ProjectCarousel category={projectCategories[activeCategory]} />
                </ProjectCategory>
              </AnimatePresence>
            </DesktopProjectViewer>
          )}
        </ProjectViewerContainer>
      </SectionContainer>
    </ProjectsSection>
  );
};

const ProjectCarousel = ({ category }: { category: typeof projectCategories[0] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === category.projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? category.projects.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <>
      <CarouselContainer ref={carouselRef}>
        <CarouselButton onClick={prevSlide} position="left" aria-label="Previous slide">
          <ArrowIcon>&lt;</ArrowIcon>
        </CarouselButton>
        
        <CarouselSlide>
          <AnimatePresence custom={direction}>
            <ProjectCard
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <ProjectImage 
                src={category.projects[currentIndex].image} 
                alt={`${category.name} ${currentIndex + 1}`}
                onClick={openModal}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/default-project.jpg';
                }}
              />
              <ProjectOverlay>
                <div>
                  <ProjectTitle onClick={openModal}>{category.name}</ProjectTitle>
                  <ProjectSubtitle> {currentIndex + 1}/{category.projects.length}</ProjectSubtitle>
                </div>
                <ProjectIndex>
                  <span>{currentIndex + 1}</span> / {category.projects.length}
                </ProjectIndex>
              </ProjectOverlay>
            </ProjectCard>
          </AnimatePresence>
        </CarouselSlide>

        <CarouselButton onClick={nextSlide} position="right" aria-label="Next slide">
          <ArrowIcon>&gt;</ArrowIcon>
        </CarouselButton>

        <CarouselDots>
          {category.projects.map((_, index) => (
            <Dot 
              key={index} 
              $active={index === currentIndex}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </CarouselDots>
      </CarouselContainer>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Project Image Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            position: 'relative',
            inset: 'auto',
            border: 'none',
            background: 'transparent',
            overflow: 'visible',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '0',
            padding: '0',
            maxWidth: '90vw',
            maxHeight: '90vh',
            width: 'auto',
            height: 'auto',
          }
        }}
        ariaHideApp={true}
        parentSelector={() => document.body}
      >
        <ModalImage 
          src={category.projects[currentIndex].image} 
          alt={`${category.name} screenshot ${currentIndex + 1}`}
          onClick={(e) => e.stopPropagation()}
        />
        <ModalCloseButton onClick={closeModal}>
          &times;
        </ModalCloseButton>
      </ReactModal>
    </>
  );
};

// Styled Components
const ProjectsSection = styled.section`
  padding: 10rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  position: relative;
  overflow: hidden;
  isolation: isolate;

  @media (max-width: 1024px) {
    padding: 6rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(100, 100, 255, 0.05) 0%, transparent 20%),
    radial-gradient(circle at 80% 70%, rgba(255, 100, 100, 0.05) 0%, transparent 20%);
  z-index: -1;
  opacity: 0.5;
`;

const SectionContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: ${({ theme }) => theme.colors.text};
  font-weight: 800;
  line-height: 1.2;
  position: relative;
  display: inline-block;

  span {
    position: relative;
    display: inline-block;
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    padding: 0 0.5rem;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 4px;
      background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
      border-radius: 2px;
    }
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin: 0 auto;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 3rem;
  padding: 0 1rem;
  position: relative;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const TabButton = styled.button<{ $active: boolean }>`
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  background: transparent;
  color: ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.textSecondary};
  z-index: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TabHighlight = styled.span<{ $active: boolean; $isHovering: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: ${({ theme }) => theme.colors.primary};
  transform: scaleX(${({ $active }) => $active ? 1 : 0});
  transform-origin: center;
  transition: transform 0.3s ease;
  z-index: -1;

  ${({ $isHovering }) => $isHovering && css`
    transform: scaleX(0.5);
  `}
`;

const ProjectViewerContainer = styled.div`
  position: relative;
  padding: 2rem 0;
`;

const MobileProjectViewer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (min-width: 1025px) {
    display: none;
  }
`;

const DesktopProjectViewer = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const ProjectCategory = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (min-width: 1025px) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
    margin-bottom: 6rem;

    &:nth-child(odd) {
      flex-direction: row;
    }
    
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

const CategoryContent = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 1025px) {
    text-align: left;
    padding: 0 2rem;
  }
`;

const CategoryHeader = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  line-height: 1.3;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
`;

const CategoryDescription = styled.p`
  font-size: clamp(1rem, 1.1vw, 1.1rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const TechStack = styled.div`
  margin-top: 2.5rem;

  h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    opacity: 0.9;
  }
`;

const TechPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;

  @media (min-width: 1025px) {
    justify-content: flex-start;
  }
`;

const TechPill = styled(motion.span).attrs(() => ({
  whileHover: { y: -2 },
  whileTap: { scale: 0.95 }
}))`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  cursor: default;
`;

const CarouselContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;

  @media (min-width: 1025px) {
    min-width: 600px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const CarouselSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: relative;
  aspect-ratio: 16/9;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  padding: 2rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 2;
`;

const ProjectCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.border};
  aspect-ratio: 16/9;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: zoom-in;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ProjectTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: white;
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ProjectSubtitle = styled.span`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
`;

const ProjectIndex = styled.div`
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-weight: 700;
    color: white;
    font-size: 1.1rem;
  }
`;

const CarouselButton = styled(motion.button).attrs(() => ({
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 }
}))<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ position }) => position === 'left' ? 'left: 20px' : 'right: 20px'};
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const ArrowIcon = styled.span`
  display: inline-block;
  margin-top: -2px;
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.8rem;
`;

const Dot = styled(motion.div).attrs(() => ({
  whileHover: { scale: 1.2 },
  whileTap: { scale: 0.9 }
}))<{ $active: boolean }>`
  width: ${({ $active }) => $active ? '20px' : '12px'};
  height: 12px;
  border-radius: 6px;
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.textSecondary};
  cursor: pointer;
  opacity: ${({ $active }) => $active ? 1 : 0.6};
  transition: all 0.3s ease;
`;

const ModalImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: -40px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: white;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: -50px;
    right: 0;
  }
`;

export default Projects;