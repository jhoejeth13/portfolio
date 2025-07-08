import { useState } from 'react';
import styled, { css } from 'styled-components';
import { skills } from '../constants/data';
import React from 'react';

const SkillsSection = styled.section`
  padding: 8rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  transition: background 0.3s ease;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    gap: 3rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  letter-spacing: -0.05em;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

const Divider = styled.div`
  flex-grow: 1;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;

const SkillCard = styled.div<{ $isHovered: boolean }>`
  padding: 1.75rem 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${({ $isHovered, theme }) =>
    $isHovered &&
    css`
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      border-color: ${theme.colors.primary}50;
    `}
`;

const SkillIcon = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};

  svg {
    width: 100%;
    height: 100%;
    max-width: 40px;
    max-height: 40px;
    color: inherit;

    &[data-icon="github"] {
      path {
        fill: ${({ theme }) => theme.title === 'dark' ? theme.colors.text : '#181717'};
      }
    }

    &[data-icon="gitlab"] {
      path {
        fill: ${({ theme }) => theme.title === 'dark' ? '#FC6D26' : '#F05032'};
      }
    }

    path {
      fill: currentColor;
    }
  }
`;

const SkillName = styled.h4`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

const SkillDescription = styled.p`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
`;

interface Skill {
  name: string;
  category: string;
  description?: string;
  icon: React.ReactNode | string;
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    'Programming Languages',
    'Frontend Development',
    'Backend Development',
    'Version Control',
    'Cloud & Tools'
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <div>
          <Title>Skills & Expertise</Title>
          <Subtitle>
            Technologies and tools I've worked with, organized by category.
          </Subtitle>
        </div>
        
        {categories.map((category) => (
          <CategoryContainer key={category}>
            <CategoryHeader>
              <Divider />
              <CategoryTitle>{category}</CategoryTitle>
              <Divider />
            </CategoryHeader>
            
            <SkillsGrid>
              {skills
                .filter((skill: Skill) => skill.category === category)
                .map((skill: Skill) => (
                  <SkillCard
                    key={skill.name}
                    $isHovered={hoveredSkill === skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <SkillIcon>
                      {typeof skill.icon === 'object' ? 
                        React.cloneElement(skill.icon as React.ReactElement, { 
                          ...(skill.name.toLowerCase().includes('github') && { 'data-icon': 'github' }),
                          ...(skill.name.toLowerCase().includes('gitlab') && { 'data-icon': 'gitlab' })
                        }) : 
                        skill.icon}
                    </SkillIcon>
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