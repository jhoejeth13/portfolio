// constants/data.tsx
import { FaPhp, FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { 
  SiDart, SiCplusplus, SiBootstrap, SiJavascript, SiFlutter, 
  SiLaravel, SiMysql, SiFirebase, SiGooglecloud, SiGithub, 
  SiGitlab, SiDocker, SiApache, SiXampp, SiVercel, 
  SiTypescript, SiJson,
  SiTailwindcss
} from 'react-icons/si';
import { DiTerminal } from 'react-icons/di';
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
    category: 'Programming Languages',
    description: 'Server-side scripting language'
  },
  {
    name: 'Python',
    icon: <FaPython size={40} color="#3776AB" />,
    category: 'Programming Languages',
    description: 'High-level programming language'
  },
  {
    name: 'C++',
    icon: <SiCplusplus size={40} color="#00599C" />,
    category: 'Programming Languages',
    description: 'General-purpose programming language'
  },
  {
    name: 'Java',
    icon: <FaJava size={40} color="#007396" />,
    category: 'Programming Languages',
    description: 'Object-oriented programming language'
  },
  {
    name: 'Dart',
    icon: <SiDart size={40} color="#0175C2" />,
    category: 'Programming Languages',
    description: 'Client-optimized language for apps'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={40} color="#3178C6" />,
    category: 'Programming Languages',
    description: 'Typed JavaScript superset'
  },

  // Frontend Development
  {
    name: 'HTML',
    icon: <FaHtml5 size={40} color="#E34F26" />,
    category: 'Frontend Development',
    description: 'Markup language for web pages'
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt size={40} color="#1572B6" />,
    category: 'Frontend Development',
    description: 'Styling language for web pages'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={40} color="#06B6D4" />,
    category: 'Frontend Development',
    description: 'Utility-first CSS framework'
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript size={40} color="#F7DF1E" />,
    category: 'Frontend Development',
    description: 'Client-side scripting language'
  },
  {
    name: 'React.js (Vite)',
    icon: <FaReact size={40} color="#61DAFB" />,
    category: 'Frontend Development',
    description: 'React with Vite build tool'
  },
  {
    name: 'Bootstrap',
    icon: <SiBootstrap size={40} color="#7952B3" />,
    category: 'Frontend Development',
    description: 'CSS framework for responsive design'
  },
  {
    name: 'Flutter',
    icon: <SiFlutter size={40} color="#02569B" />,
    category: 'Frontend Development',
    description: 'UI toolkit for cross-platform apps'
  },
  {
    name: 'JSON',
    icon: <SiJson size={40} color="#000000" />,
    category: 'Frontend Development',
    description: 'Lightweight data interchange format'
  },

  // Backend Development
  {
    name: 'Node.js',
    icon: <FaNodeJs size={40} color="#339933" />,
    category: 'Backend Development',
    description: 'JavaScript runtime environment'
  },
  {
    name: 'Laravel',
    icon: <SiLaravel size={40} color="#FF2D20" />,
    category: 'Backend Development',
    description: 'PHP web application framework'
  },
  {
    name: 'MySQL',
    icon: <SiMysql size={40} color="#4479A1" />,
    category: 'Backend Development',
    description: 'Relational database management system'
  },
  {
    name: 'XAMPP',
    icon: <SiXampp size={40} color="#FB7A24" />,
    category: 'Backend Development',
    description: 'Apache distribution with PHP/MySQL'
  },
  {
    name: 'Bash/Shell',
    icon: <DiTerminal size={40} color="black" />,
    category: 'Backend Development',
    description: 'Command language for deployment'
  },

  // Cloud Services
  {
    name: 'Vercel',
    icon: <SiVercel size={40} color="#000000" />,
    category: 'Cloud Services',
    description: 'Cloud platform for frontend developers'
  },
  {
    name: 'Google Cloud (GCP)',
    icon: <SiGooglecloud size={40} color="#4285F4" />,
    category: 'Cloud Services',
    description: 'Cloud computing services'
  },
  {
    name: 'Firebase Realtime DB',
    icon: <SiFirebase size={40} color="#FFCA28" />,
    category: 'Cloud Services',
    description: 'NoSQL cloud database'
  },
  {
    name: 'Laravel Cloud',
    icon: <SiLaravel size={40} color="#FF2D20" />,
    category: 'Cloud Services',
    description: 'Laravel cloud deployment platform'
  },

  // DevOps & Tools
  {
    name: 'Docker',
    icon: <SiDocker size={40} color="#2496ED" />,
    category: 'DevOps & Tools',
    description: 'Containerization platform'
  },
  {
    name: 'GitHub',
    icon: <SiGithub size={40} />,
    category: 'DevOps & Tools',
    description: 'Code hosting platform'
  },
  {
    name: 'GitLab',
    icon: <SiGitlab size={40} color="#FCA121" />,
    category: 'DevOps & Tools',
    description: 'DevOps platform'
  },
  {
    name: 'Apache',
    icon: <SiApache size={40} color="#D22128" />,
    category: 'DevOps & Tools',
    description: 'Web server software'
  }
];