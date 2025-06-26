import { useState } from 'react';
import styled, { css } from 'styled-components';
import { skills } from '../constants/data';

const SkillsSection = styled.section`
  padding: 5rem 0;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  transition: background 0.3s ease;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }
`;

const CategoryContainer = styled.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`;

const CategoryIcon = styled.span`
  font-size: 1.8rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;

const SkillCard = styled.div<{ $isHovered: boolean }>`
  padding: 1.5rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid ${({ theme }) => theme.colors.border};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ $isHovered, theme }) =>
    $isHovered &&
    css`
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
      border-color: ${theme.colors.primary}80;
    `}

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const SkillIcon = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 2.5rem;
  
  svg {
    width: 100%;
    height: 100%;
    max-width: 50px;
    max-height: 50px;
    color: ${({ theme }) => theme.colors.primary};
    
    /* Specific styling for GitHub/GitLab icons in dark mode */
    path[fill="#181717"], /* GitHub logo color */
    path[fill="#F05032"], /* GitLab logo color */
    path[fill="#000000"], /* Any black paths */
    path[fill="#010101"] { /* GitHub alternative black */
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`;


const SkillName = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categoryIcons = {
    'Programming Languages': '🧠',
    'Frontend Development': '🎨',
    'Backend Development': '🛠️',
    'Version Control': '🔧',
    'Cloud & Tools': '☁️'
  };

  return (
    <SkillsSection id="skills">
      <Container>
        <Title>My Skills</Title>
        
        {Object.entries(categoryIcons).map(([category, icon]) => (
          <CategoryContainer key={category}>
            <CategoryTitle>
              <CategoryIcon>{icon}</CategoryIcon>
              {category}
            </CategoryTitle>
            
            <SkillsGrid>
              {skills
                .filter(skill => skill.category === category)
                .map((skill) => (
                  <SkillCard
                    key={skill.name}
                    $isHovered={hoveredSkill === skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                    {skill.description && (
                      <SkillDescription>{skill.description}</SkillDescription>
                    )}
                  </SkillCard>
                ))}
            </SkillsGrid>
          </CategoryContainer>
        ))}
      </Container>
    </SkillsSection>
  );
}