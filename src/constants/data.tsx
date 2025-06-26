// constants/data.tsx
import { FaPhp, FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaGitlab } from 'react-icons/fa';
import { SiDart, SiCplusplus, SiBootstrap, SiJavascript, SiFlutter, SiLaravel, SiMysql, SiFirebase, SiGooglecloud } from 'react-icons/si';
import { DiGoogleCloudPlatform } from 'react-icons/di';
import { ReactElement } from 'react';

interface Skill {
  name: string;
  icon: ReactElement;
  category: string;
  description?: string;
}

export const skills: Skill[] = [
  // Programming Languages
  {
    name: 'PHP',
    icon: <FaPhp size={40} color="#777BB4" />,
    category: 'Programming Languages'
  },
  {
    name: 'Python',
    icon: <FaPython size={40} color="#3776AB" />,
    category: 'Programming Languages'
  },
  {
    name: 'Dart',
    icon: <SiDart size={40} color="#0175C2" />,
    category: 'Programming Languages'
  },
  {
    name: 'C++',
    icon: <SiCplusplus size={40} color="#00599C" />,
    category: 'Programming Languages'
  },
  {
    name: 'Java',
    icon: <FaJava size={40} color="#007396" />,
    category: 'Programming Languages'
  },

  // Frontend Development
  {
    name: 'HTML',
    icon: <FaHtml5 size={40} color="#E34F26" />,
    category: 'Frontend Development'
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt size={40} color="#1572B6" />,
    category: 'Frontend Development'
  },
  {
    name: 'Bootstrap',
    icon: <SiBootstrap size={40} color="#7952B3" />,
    category: 'Frontend Development'
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript size={40} color="#F7DF1E" />,
    category: 'Frontend Development'
  },
  {
    name: 'React',
    icon: <FaReact size={40} color="#61DAFB" />,
    category: 'Frontend Development'
  },
  {
    name: 'Flutter',
    icon: <SiFlutter size={40} color="#02569B" />,
    category: 'Frontend Development'
  },

  // Backend Development
  {
    name: 'Laravel',
    icon: <SiLaravel size={40} color="#FF2D20" />,
    category: 'Backend Development'
  },
  {
    name: 'MySQL',
    icon: <SiMysql size={40} color="#4479A1" />,
    category: 'Backend Development'
  },
  {
    name: 'Firebase',
    icon: <SiFirebase size={40} color="#FFCA28" />,
    category: 'Backend Development'
  },

  // Version Control
  {
    name: 'GitHub',
    icon: <FaGithub size={40} color="#181717" />,
    category: 'Version Control'
  },
  {
    name: 'GitLab',
    icon: <FaGitlab size={40} color="#FCA121" />,
    category: 'Version Control'
  },

  // Cloud & Tools
  {
    name: 'Google Cloud Platform (GCP)',
    icon: <DiGoogleCloudPlatform size={40} color="#4285F4" />,
    category: 'Cloud & Tools'
  },
  {
    name: 'Firestore',
    icon: <SiFirebase size={40} color="#FFCA28" />,
    category: 'Cloud & Tools'
  },
  {
    name: 'Google Cloud Storage',
    icon: <DiGoogleCloudPlatform size={40} color="#34A853" />,
    category: 'Cloud & Tools'
  },
  {
    name: 'API Integration',
    description: 'RESTful APIs & third-party services',
    icon: <FaGitAlt size={40} color="#F05032" />,
    category: 'Cloud & Tools'
  }
];