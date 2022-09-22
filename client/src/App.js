import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';

function App() {
  const AuthenticLandingPage = Auth({LandingPage}, null)
  const AuthenticLoginPage = Auth({LoginPage}, false)
  const AuthenticRegisterPage = Auth({RegisterPage}, false)
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<AuthenticLandingPage />} />
          <Route exact path="/login" element={<AuthenticLoginPage />} />
          <Route exact path="/register" element={<AuthenticRegisterPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
