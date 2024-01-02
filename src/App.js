import React from 'react';
import Navbar from './components/Navbar/Navbar';
import SignInSignUpPage from './components/Login/SignInPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/auth/signin" element={<SignInSignUpPage mode="signin" />} />
          <Route path="/auth/register" element={<SignInSignUpPage mode="register" />} />
          {/* otras rutas */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
