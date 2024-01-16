import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Config/theme'; 
import Navbar from './components/Navbar';
import SignInSignUpPage from './components/Login/SignInPage';
import PasswordRecoveryPage from './components/Login/PasswordRecoveryPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './components/Config/HeroSection';
import FloatingActionButton from './components/Config/FloatingActionButton';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
          <Route path="/" element={
              <>
                <HeroSection /> {/* Solo se muestra en la página de inicio */}
                {/* Aquí podrías añadir más componentes que solo quieres mostrar en la página de inicio */}
              </>
            }/>
            <Route path="/auth/signin" element={<SignInSignUpPage mode="signin" />} />
            <Route path="/auth/register" element={<SignInSignUpPage mode="register" />} />
            <Route path="/recover-password" element={<PasswordRecoveryPage />} /> 
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
