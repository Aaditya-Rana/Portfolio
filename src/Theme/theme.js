import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FFF',
  text: '#000',
  toggleBorder: '#FFF',
  background: '#363537',
  primaryColor: '#6200ea',
  secondaryColor: '#03dac6',
  font: 'Roboto, sans-serif',
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  primaryColor: '#bb86fc',
  secondaryColor: '#03dac6',
  font: 'Roboto, sans-serif',
};

export const GlobalStyles = createGlobalStyle`
:root {
  --gradient-deep-blue-purple: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  --gradient-midnight-city: linear-gradient(135deg, #232526 0%, #414345 100%);
  --gradient-deep-space: linear-gradient(135deg, #000428 0%, #004e92 100%);
  --gradient-dark-purple-violet: linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%);
  --gradient-nebula: linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%);
  --gradient-deep-sea-space: linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%);
  --gradient-night-sky: linear-gradient(135deg, #020024 0%, #090979 35%, #00d4ff 100%);
  --gradient-highlight: linear-gradient(135deg, #56CCF2, #2F80ED);
}

  body {
    background: white;
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }
`;
