import { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import ReactModal from 'react-modal';
import { FiExternalLink } from 'react-icons/fi';

interface Project {
  name: string;
  description: string;
  coverImage: string;
  tags: string[];
  allImages: string[];
}

const projectGroups: Project[] = [
  {
    name: "Graduates and Alumni DB System",
    description: "A centralized platform using K-means clustering to manage alumni records and evaluate institutional impact through graduate tracer data.",
    coverImage: "/FuamiScreenshots/1.png",
    tags: ["HTML", "Laravel", "Blade", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
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
    tags: ["HTML", "PHP", "JavaScript", "MySQL", "CSS", "Bootstrap"],
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
    tags: ["HTML", "PHP", "Laravel", "MySQL", "JavaScript", "CSS", "Bootstrap"],
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
  },
  {
    name: "ObjectDetection",
description: "ObjectDetection is a real-time wearable item detector using YOLOv8 and transfer learning. It identifies caps, hats, glasses, and sunglasses with a custom-trained model from Roboflow.",
    coverImage: "/ObjectDetection/2.jpg",
    tags: ["Python", "YOLOv8", "Ultralytics", "OpenCV", "Roboflow", "Computer Vision", "Object Detection", "Transfer Learning"],
    allImages: [
      "/ObjectDetection/1.png",
      "/ObjectDetection/1.jpg",
      "/ObjectDetection/2.jpg",
      "/ObjectDetection/3.png",
      "/ObjectDetection/2.png",

    ]
  },
    {
    name: "Secure Registration & Login System",
    description: "A web project built with advanced input validation and login security features, including password strength checks and username availability detection. It enforces proper formatting for names, addresses, and optional fields. Failed login attempts trigger timed lockouts to prevent brute force attacks. During cooldown periods, login actions and browser back navigation are disabled for added security.",
    coverImage: "/Security/1.png",
    tags: ["HTML", "CSS", "Bootstrap", "PHP", "JavaScript", "MySQL"],
    allImages: [
      "/Security/1.png",
      "/Security/2.png",
      "/Security/3.png",
      "/Security/4.png",

    ]
  }
    
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
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
These are a few projects I worked on — all part of my journey learning to build real, useful tech.
          </SectionDescription>
        </HeaderContainer>

      <ProjectsGrid>
        {projectGroups.map((project, index) => (
          <ProjectCard
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            layout
          >
            <ProjectImageWrapper>
              <ProjectImage 
                src={project.coverImage} 
                alt={`${project.name} cover`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/default-project.jpg';
                }}
              />
              <ImageOverlay $isHovered={hoveredProject === index}>
                <ViewButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(index);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </ViewButton>
              </ImageOverlay>
            </ProjectImageWrapper>
            <ProjectContent>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechTags>
                {project.tags.map((tag) => (
                  <TechTag 
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tag}
                  </TechTag>
                ))}
              </TechTags>
              <ViewFullLink
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(index);
                }}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                View full project <FiExternalLink size={14} />
              </ViewFullLink>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>

        {/* Project Detail Modal */}
        <ReactModal
          isOpen={selectedProject !== null}
          onRequestClose={() => setSelectedProject(null)}
          contentLabel="Project Details"
          style={modalStyles}
          closeTimeoutMS={300}
          ariaHideApp={false}
        >
          <AnimatePresence>
            {selectedProject !== null && (
              <ModalContainer
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <CloseButton 
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CloseIcon>×</CloseIcon>
                </CloseButton>
                
                <ModalContent>
                  <ModalHeader>
                    <ModalTitle>{projectGroups[selectedProject].name}</ModalTitle>
                    <ModalDescription>{projectGroups[selectedProject].description}</ModalDescription>
                  </ModalHeader>
                  
                  <GalleryContainer>
                    <GalleryTitle>Project Screenshots</GalleryTitle>
                    <GalleryGrid>
                      {projectGroups[selectedProject].allImages.map((image, imgIndex) => (
                        <GalleryImage 
                          key={imgIndex}
                          src={image}
                          alt={`${projectGroups[selectedProject].name} screenshot ${imgIndex + 1}`}
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
                </ModalContent>
              </ModalContainer>
            )}
          </AnimatePresence>
        </ReactModal>

        {/* Image Detail Modal */}
        <ReactModal
          isOpen={!!selectedImage}
          onRequestClose={() => setSelectedImage(null)}
          contentLabel="Project Image"
          style={imageModalStyles}
          closeTimeoutMS={300}
          ariaHideApp={false}
        >
          <AnimatePresence>
            {selectedImage && (
              <ImageModalContent
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
                  <CloseIcon>×</CloseIcon>
                </CloseButton>
              </ImageModalContent>
            )}
          </AnimatePresence>
        </ReactModal>
      </SectionContainer>
    </ProjectsSection>
  );
};

const ViewFullLink = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors?.primary || '#646cff'};
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 1rem;
  cursor: pointer;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
`;

// Modal styles
const modalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
  },
  content: {
    border: 'none',
    background: 'transparent',
    padding: 0,
    inset: 'auto',
    width: '90%',
    maxWidth: '900px',
    maxHeight: '90vh',
    overflow: 'hidden',
    borderRadius: '12px',
  }
};

const imageModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    zIndex: 1001,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
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
    borderRadius: '8px',
  }
};

// Styled Components
const ProjectsSection = styled.section`
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
  color: ${({ theme }) => theme.colors?.text || '#333'};
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
  background: ${({ theme }) => theme.colors?.primary || '#646cff'};
  border-radius: 2px;
`;

const SectionDescription = styled.p`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors?.textSecondary || '#666'};
  line-height: 1.7;
  margin: 0 auto;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors?.background || '#fff'};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors?.border || '#eaeaea'};
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

interface ImageOverlayProps {
  $isHovered: boolean;
}

const ImageOverlay = styled.div<ImageOverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, ${({ $isHovered }) => $isHovered ? 0.7 : 0.5});
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: ${({ $isHovered }) => $isHovered ? 1 : 0};
`;

const ViewButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.colors?.primary || '#646cff'};
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  line-height: 1.3;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors?.textSecondary || '#666'};
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex-grow: 1;
`;

const TechTags = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled(motion.span)`
  background: ${({ theme }) => theme.colors?.backgroundLight || '#f0f0f0'};
  color: ${({ theme }) => theme.colors?.primary || 'black'};
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors?.border || '#ddd'};
`;

const ModalContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors?.background || '#fff'};
  border-radius: 12px;
  overflow: hidden;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ModalContent = styled.div`
  padding: 2rem;
  overflow-y: auto;
  max-height: calc(90vh - 60px);
`;

const ModalHeader = styled.div`
  margin-bottom: 2rem;
`;

const ModalTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors?.text || '#333'};
`;

const ModalDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors?.textSecondary || '#666'};
  line-height: 1.7;
`;

const GalleryContainer = styled.div`
  margin-top: 1.5rem;
`;

const GalleryTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors?.primary || '#646cff'};
    margin-right: 10px;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const GalleryImage = styled(motion.img)`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors?.border || '#eaeaea'};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ImageModalContent = styled(motion.div)`
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
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background: white;
  color: black;
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

const CloseIcon = styled.span`
  display: block;
  line-height: 1;
  font-size: 24px;
  font-weight: bold;
`;

export default Projects;