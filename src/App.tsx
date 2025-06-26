// src/App.tsx
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components'; // Add this import
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { DefaultTheme } from 'styled-components'; // Import for typing

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} theme={theme} />
      <MainContainer>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </MainContainer>
      <Footer />
    </ThemeProvider>
  );
}

// Add proper type annotation for the theme prop
const MainContainer = styled.main<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
  min-height: 100vh;
  padding-top: 80px; /* Adjust based on header height */
`;

export default App;