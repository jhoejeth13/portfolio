// components/Skills.tsx
import { useState, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { skills } from '../constants/data';

const SkillsSection = styled.section`
  padding: 8rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  transition: background 0.3s ease;
  overflow: hidden;
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

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`;

const MarqueeTrack = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${scroll} 30s linear infinite;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }
`;

const SkillsRow = styled.div`
  display: inline-flex;
  gap: 1.5rem;
  padding: 1rem 0;
`;

const SkillCard = styled.div<{ $isHovered: boolean }>`
  padding: 1.5rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  white-space: normal;

  ${({ $isHovered, theme }) =>
    $isHovered &&
    css`
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      border-color: ${theme.colors.primary};
    `}
`;

const SkillIcon = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  font-size: 2.5rem;
`;

const SkillName = styled.h4`
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

const SkillDescription = styled.p`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 0.8rem;
  line-height: 1.4;
  margin: 0;
`;

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Duplicate the skills for seamless looping
  const duplicatedSkills = [...skills, ...skills];

  return (
    <SkillsSection id="skills">
      <Container>
        <div>
<Title>Tech Stack & Expertise</Title>

          <Subtitle>
The technologies I'm experienced with and currently working on.         </Subtitle>
        </div>

        <MarqueeContainer>
          <MarqueeTrack ref={marqueeRef}>
            <SkillsRow>
              {duplicatedSkills.map((skill, index) => (
                <SkillCard
                  key={`${skill.name}-${index}`}
                  $isHovered={hoveredSkill === `${skill.name}-${index}`}
                  onMouseEnter={() => setHoveredSkill(`${skill.name}-${index}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <SkillIcon>
                    {skill.icon}
                  </SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                  {skill.description && (
                    <SkillDescription>{skill.description}</SkillDescription>
                  )}
                </SkillCard>
              ))}
            </SkillsRow>
          </MarqueeTrack>
        </MarqueeContainer>
      </Container>
    </SkillsSection>
  );
}