import { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import ReactModal from 'react-modal';

const projectGroups = [
  {
    name: "Graduates and Alumni DB System",
    description: "A centralized platform using K-means clustering to manage alumni records and evaluate institutional impact through graduate tracer data.",
    coverImage: "/FuamiScreenshots/1.png",
    tags: ["Laravel", "Blade", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    allImages: [
      "/FuamiScreenshots/1.png",
      "/FuamiScreenshots/2.png",
      "/FuamiScreenshots/3.png",
      "/FuamiScreenshots/2.jpg",
      "/FuamiScreenshots/4.jpg",
      "/FuamiScreenshots/5.png",
      "/FuamiScreenshots/12.png",
      "/FuamiScreenshots/13.png",
      "/FuamiScreenshots/11.png",
      "/FuamiScreenshots/9.png",
      "/FuamiScreenshots/10.png",
      "/FuamiScreenshots/14.png",
      "/FuamiScreenshots/3.jpg"

    ]
  },
  {
    name: "QUEUE+",
    description: "QUEUE+ aims to enhance queue workflow during peak periods like enrollment, prevent crowded hallways at the CEIT office counter, and facilitate seamless transactions between clerks and students.",
    coverImage: "/Queue+/1.png",
    tags: ["PHP", "JavaScript", "MySQL", "CSS", "Bootstrap"],
    allImages: [
      "/Queue+/1.png",
      "/Queue+/2.png",
      "/Queue+/3.png",
      "/Queue+/4.png",
      "/Queue+/7.png"
    ]
  },
  {
    name: "Barangay Time and Wage System",
    description: "Digital solution for tracking employee attendance, work hours, and automated wage computation in local government units.",
    coverImage: "/Apsystem/1.png",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    allImages: [
      "/Apsystem/1.png",
      "/Apsystem/2.png",
      "/Apsystem/3.png",
      "/Apsystem/4.png"
    ]
  },
  {
    name: "Earthquake Occurrence Analysis",
    description: "This project investigates the temporal behavior of earthquakes in the Philippines, focusing specifically on identifying the hours of the day when seismic events most frequently occur.",
    coverImage: "/Earthquake/1.png",
    tags: ["Python", "Streamlit", "Pandas", "Plotly", "Pydeck and Folium"],
    allImages: [
      "/Earthquake/1.png",
      "/Earthquake/2.png",
      "/Earthquake/3.png",
      "/Earthquake/4.png"
    ]
  }
];

const Projects = () => {
  const [expandedGroup, setExpandedGroup] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <ProjectsSection id="projects">
      <SectionContainer>
        <HeaderContainer>
          <SectionTitle>
            <span>Project Portfolio</span>
            <TitleUnderline />
          </SectionTitle>
          <SectionDescription>
            Here are some of the projects I worked on during college. While I'm only able to share a few due to privacy restrictions, they reflect my learning and hands-on experience.
          </SectionDescription>
        </HeaderContainer>

        <ProjectGroupsContainer>
          {projectGroups.map((group, index) => (
            <ProjectGroup 
              key={group.name}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <ProjectCard
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  boxShadow: hoveredProject === index ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                  delay: index * 0.1
                }}
              >
                <ProjectImageWrapper>
                  <ProjectImage 
                    src={group.coverImage} 
                    alt={`${group.name} cover`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/default-project.jpg';
                    }}
                  />
                  <ImageOverlay $isHovered={hoveredProject === index} />
                </ProjectImageWrapper>
                <ProjectContent>
                  <ProjectName>{group.name}</ProjectName>
                  <ProjectDescription>{group.description}</ProjectDescription>
                  <TechTags>
                    {group.tags.map((tag) => (
                      <TechTag 
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tag}
                      </TechTag>
                    ))}
                  </TechTags>
                  <ViewButton 
                    onClick={() => setExpandedGroup(expandedGroup === index ? null : index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedGroup === index ? 'Hide Details' : 'View Details'}
                    <ButtonArrow $isExpanded={expandedGroup === index} />
                  </ViewButton>
                </ProjectContent>
              </ProjectCard>

              <AnimatePresence>
                {expandedGroup === index && (
                  <GalleryContainer
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <GalleryTitle>Project Screenshots</GalleryTitle>
                    <GalleryGrid>
                      {group.allImages.map((image, imgIndex) => (
                        <GalleryImage 
                          key={imgIndex}
                          src={image}
                          alt={`${group.name} screenshot ${imgIndex + 1}`}
                          onClick={() => setSelectedImage(image)}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/default-project.jpg';
                          }}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        />
                      ))}
                    </GalleryGrid>
                  </GalleryContainer>
                )}
              </AnimatePresence>
            </ProjectGroup>
          ))}
        </ProjectGroupsContainer>

        <ReactModal
          isOpen={!!selectedImage}
          onRequestClose={() => setSelectedImage(null)}
          contentLabel="Project Image Modal"
          style={modalStyles}
          closeTimeoutMS={300}
        >
          <AnimatePresence>
            {selectedImage && (
              <ModalContent
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <ModalImage 
                  src={selectedImage}
                  alt="Enlarged project view"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/default-project.jpg';
                  }}
                />
                <CloseButton 
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &times;
                </CloseButton>
              </ModalContent>
            )}
          </AnimatePresence>
        </ReactModal>
      </SectionContainer>
    </ProjectsSection>
  );
};

// Modal styles
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
  },
  content: {
    border: 'none',
    background: 'transparent',
    padding: 0,
    inset: 'auto',
    maxWidth: '90vw',
    maxHeight: '90vh',
    width: 'auto',
    overflow: 'visible',
    animation: 'fadeIn 0.3s ease-out',
  }
};

// Styled Components
const ProjectsSection = styled.section`
  padding: 6rem 0;
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
    background: radial-gradient(circle at 20% 50%, rgba(100, 100, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  display: inline-block;
  position: relative;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const TitleUnderline = styled.div`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
`;

const SectionDescription = styled.p`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin: 0 auto;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProjectGroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ProjectGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 45%;
    min-height: 300px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProjectImageWrapper}:hover & {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    height: 100%;
    min-height: 300px;
  }
`;

const ImageOverlay = styled.div<{ $isHovered: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
  opacity: ${({ $isHovered }) => $isHovered ? 0.8 : 0.5};
  transition: opacity 0.3s ease;
`;

const ProjectContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const ProjectName = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TechTags = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const TechTag = styled(motion.span)`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const ViewButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: black;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  align-self: flex-start;
  margin-top: auto;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ButtonArrow = styled.span<{ $isExpanded: boolean }>`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${({ $isExpanded }) => $isExpanded ? 'rotate(180deg)' : 'rotate(0)'};
  font-size: 1.2rem;
`;

const GalleryContainer = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem;
`;

const GalleryTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    margin-right: 10px;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const GalleryImage = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
`;

const ModalImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export default Projects;