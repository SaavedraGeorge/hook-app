import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <NavBar />
            <Routes>
                <Route exact path="/" element={ <HomeScreen /> } />
                <Route exact path="/about" element={ <AboutScreen /> } />
                <Route exact path="/login" element={ <LoginScreen /> } />
                <Route path="*" element={
                        <div style={{ padding: "1rem" }}>
                        <p>Pagina no encontrada</p>
                        </div>
                } />
            </Routes>
        </div>
    </Router>
  );
};
