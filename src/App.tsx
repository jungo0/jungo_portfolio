import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouter from "./components/Router";
import Home from "./pages/Home";
import Contact from "./pages/Etc";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Skills />
      <Project />
      <Contact />
      <AppRouter />
      <Footer isMobileMenuOpen={false} />
    </Router>
  );
}

export default App;
