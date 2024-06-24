import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Layout from './Layout';
import { ThemeProvider, styled } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './Theme/theme';
import { useState } from 'react';
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";

// const Button = styled.button`
//   position: fixed;
//   top: 5%;
//   right: 5%;
//   color: red;
//   background-color: ${({ theme }) => theme.primaryColor};
//   color: ${({ theme }) => theme.text};
// `;

function App() {
  const [theme, setTheme] = useState('light');
  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <div className="App">
        {/* <Button onClick={toggleTheme}>{theme === 'light' ? "Dark": "Light"}</Button> */}

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
