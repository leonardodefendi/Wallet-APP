import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { FiMoon } from 'react-icons/fi';
import { BsLightningCharge } from 'react-icons/bs';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import GlobalStyles from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [theme, setTheme] = useState<boolean>(false);
  const toggleTheme = () => {
    setTheme(!theme);
    setIsDarkTheme((prevState) => !prevState);
  };
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={ <Login /> } path="/" />
        <Route element={ <Wallet /> } path="/carteira" />
      </Routes>
    </>
  );
}

export default App;
