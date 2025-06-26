import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const projectCategories = [
  {
    name: "Graduates and Alumni Database System",
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
    name: "Online-Food-Ordering-System",
    description: "This Online Food Ordering System project in PHP focuses mainly on managing online food orders. The system helps to keep track of clients and their orders, and displays all available food dishes with their respective restaurants.",
    projects: [
      { id: 21, image: "/eCommerce/1.png", tags: ["PHP", "JavaScript", "CSS", "MySQL", "Bootstrap"] },
      { id: 22, image: "/eCommerce/2.png", tags: ["PHP", "JavaScript", "CSS", "MySQL", "Bootstrap"] },
      { id: 23, image: "/eCommerce/3.png", tags: ["PHP", "JavaScript", "CSS", "MySQL", "Bootstrap"] },
      { id: 24, image: "/eCommerce/4.png", tags: ["PHP", "JavaScript", "CSS", "MySQL", "Bootstrap"] },
      { id: 25, image: "/eCommerce/5.png", tags: ["PHP", "JavaScript", "CSS", "MySQL", "Bootstrap"] },
      { id: 26, image: "/eCommerce/6.png", tags: ["PHP", "JavaScript", "CSS", "MySQL", "Bootstrap"] },
      { id: 27, image: "/eCommerce/7.png", tags: ["PHP", "JavaScript", "CSS", "MySQL", "Bootstrap"] },
      { id: 28, image: "/eCommerce/8.png", tags: ["PHP", "JavaScript", "CSS", "MySQL", "Bootstrap"] },
    ]
  },
  {
    name: "ANALYZE THE TIME OF DAY WHEN EARTHQUAKES ARE MOST LIKELY TO OCCUR",
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ProjectsSection id="projects">
      <SectionContainer>
        <SectionTitle>
          <span>Project Portfolio</span>
        </SectionTitle>
        
        {!isMobile && (
          <CategoryTabs>
            {projectCategories.map((category, index) => (
              <TabButton
                key={category.name}
                $active={activeCategory === index}
                onClick={() => setActiveCategory(index)}
              >
                {category.name}
              </TabButton>
            ))}
          </CategoryTabs>
        )}

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
                    <h4>Technology Stack:</h4>
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
            <ProjectCategory key={projectCategories[activeCategory].name}>
              <CategoryContent>
                <CategoryHeader>
                  <CategoryTitle>{projectCategories[activeCategory].name}</CategoryTitle>
                  <CategoryDescription>{projectCategories[activeCategory].description}</CategoryDescription>
                </CategoryHeader>
                
                <TechStack>
                  <h4>Technology Stack:</h4>
                  <TechPills>
                    {projectCategories[activeCategory].projects[0].tags.map((tag) => (
                      <TechPill key={tag}>{tag}</TechPill>
                    ))}
                  </TechPills>
                </TechStack>
              </CategoryContent>

              <ProjectCarousel category={projectCategories[activeCategory]} />
            </ProjectCategory>
          </DesktopProjectViewer>
        )}
      </SectionContainer>
    </ProjectsSection>
  );
};

const ProjectCarousel = ({ category }: { category: typeof projectCategories[0] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === category.projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? category.projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <CarouselContainer>
      <CarouselButton onClick={prevSlide} position="left">
        <ArrowIcon>&lt;</ArrowIcon>
      </CarouselButton>
      
      <CarouselSlide>
        <ProjectCard>
          <ProjectImage 
            src={category.projects[currentIndex].image} 
            alt={`${category.name} screenshot`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/default-project.jpg';
            }}
          />
          <ProjectOverlay>
            <ProjectTitle>{category.name}</ProjectTitle>
            <ProjectIndex>{currentIndex + 1}/{category.projects.length}</ProjectIndex>
          </ProjectOverlay>
        </ProjectCard>
      </CarouselSlide>

      <CarouselButton onClick={nextSlide} position="right">
        <ArrowIcon>&gt;</ArrowIcon>
      </CarouselButton>

      <CarouselDots>
        {category.projects.map((_, index) => (
          <Dot 
            key={index} 
            $active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};

const ProjectsSection = styled.section`
  padding: 8rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
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

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  font-weight: 700;

  span {
    position: relative;
    display: inline-block;
    padding: 0 1.5rem;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      width: clamp(30px, 5vw, 60px);
      height: 3px;
      background: linear-gradient(
        90deg, 
        ${({ theme }) => theme.colors.primary}, 
        ${({ theme }) => theme.colors.secondary}
      );
      transform: translateY(-50%);
    }

    &::before {
      left: clamp(-30px, -5vw, -60px);
    }

    &::after {
      right: clamp(-30px, -5vw, -60px);
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
    
    span {
      &::before,
      &::after {
        width: 20px;
      }
      
      &::before {
        left: -25px;
      }
      
      &::after {
        right: -25px;
      }
    }
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TabButton = styled.button<{ $active: boolean }>`
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;

  ${({ $active, theme }) => $active 
    ? css`
        background: ${theme.colors.primary};
        color: black;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      `
    : css`
        background: ${theme.colors.background};
        color: ${theme.colors.text};
        border: 1px solid ${theme.colors.border};
        
        &:hover {
          background: ${theme.colors.primaryLight};
          color: ${theme.colors.primary};
        }
      `}

  @media (max-width: 1024px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    max-width: 200px;
  }
`;

const MobileProjectViewer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

const DesktopProjectViewer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ProjectCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: center;
    gap: 3rem;
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

  @media (min-width: 769px) {
    text-align: left;
    padding: 0 2rem;
  }
`;

const CategoryHeader = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  line-height: 1.3;
`;

const CategoryDescription = styled.p`
  font-size: clamp(1rem, 1.1vw, 1.1rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  margin-top: 2rem;

  h4 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }
`;

const TechPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;

  @media (min-width: 769px) {
    justify-content: flex-start;
  }
`;

const TechPill = styled.span`
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid ${({ theme }) => theme.colors.primary}20;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(121, 103, 103, 0.1);
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 700px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 769px) {
    min-width: 500px;
  }
`;

const CarouselSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 1.5rem;
  color: white;
  opacity: 1;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (min-width: 769px) {
    opacity: 0;
  }
`;

const ProjectCard = styled.article`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  max-width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  aspect-ratio: 16/9;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    
    ${ProjectOverlay} {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ProjectTitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

  @media (min-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ProjectIndex = styled.span`
  font-size: 0.9rem;
  background: rgba(102, 100, 100, 0.2);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  backdrop-filter: blur(5px);
   background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const CarouselButton = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ position }) => position === 'left' ? 'left: -20px' : 'right: -20px'};
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    ${({ position }) => position === 'left' ? 'left: -10px' : 'right: -10px'};
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    ${({ position }) => position === 'left' ? 'left: -5px' : 'right: -5px'};
  }
`;

const ArrowIcon = styled.span`
  display: inline-block;
  margin-top: -2px;
   background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.8rem;
`;

const Dot = styled.div<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${({ $active }) => $active ? 1 : 0.6};

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
`;

export default Projects;