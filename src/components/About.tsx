import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection id="about">
      <SectionContainer>
        <SectionTitle>About Me</SectionTitle>
        <AboutContent>
          <IntroText>
            <p>
              A dedicated IT graduate from Caraga State University – Cabadbaran Campus (CSUCC), eager to apply and expand technical skills in real-world settings. A fresh graduate with a strong foundation in both web and mobile development, cloud technologies, and API integration. Brings excellent problem-solving abilities, adaptability, and teamwork, with a goal of becoming a well-rounded, career-driven professional in the tech industry.
            </p>
          </IntroText>

          <InfoGrid>
            {/* Education Section */}
            <InfoCard>
              <InfoTitle>
                <IconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </IconWrapper>
                Education
              </InfoTitle>
              <InfoItem>
                <h3>Caraga State University – Cabadbaran Campus</h3>
                <p>Bachelor of Science in Information Technology</p>
                <Duration>2021 – 2025</Duration>
                <AchievementsList>
                  <li>Deans Lister (1st Year)</li>
                  <li>Presidents Lister (4th Year, 1st Semester)</li>
                  <li>ICT Student Congress – Certification (Member)</li>
                </AchievementsList>
              </InfoItem>
            </InfoCard>

            {/* Work Experience Section */}
            <InfoCard>
              <InfoTitle>
                <IconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </IconWrapper>
                Work Experience
              </InfoTitle>
              <InfoItem>
                <h3>Web Developer Intern</h3>
                <Company>Staff Outsourcing Solutions</Company>
                <Duration>August 2024 - January 2025</Duration>
              </InfoItem>
              <InfoItem>
                <h3>Freelance Categorization / Image Annotation</h3>
                <Company>Remotasks (Online Job)</Company>
                <Duration>2021-2022</Duration>
              </InfoItem>
            </InfoCard>

            {/* Certifications Section */}
            <InfoCard>
              <InfoTitle>
                <IconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
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
                >
                  View Credential
                </CertificationLink>
              </InfoItem>
              <InfoItem>
                <h3>DICT EDP Diagnostic Examination</h3>
                <Company>CSU – Cabadbaran Campus</Company>
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
        </AboutContent>
      </SectionContainer>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  position: relative;
  overflow: hidden;

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

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 5rem;
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  font-weight: 700;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    margin: 1.5rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const IntroText = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};

  p {
    margin-bottom: 0;
    font-size: clamp(1rem, 2vw, 1.1rem);
  }

  @media (max-width: 768px) {
    text-align: left;
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

const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
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

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 8px;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.primary};

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

const Duration = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary} !important;
  font-size: 0.85rem !important;
  margin-bottom: 0.8rem !important;
  opacity: 0.9;
`;

const AchievementsList = styled.ul`
  margin-top: 1rem;
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
      content: '';
      position: absolute;
      left: 0;
      top: 0.5rem;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const CertificationLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primaryLight};
  margin-top: 0.5rem;

  &:hover {
    color: white;
    background: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transform: translateY(-2px);
  }
`;

export default About;