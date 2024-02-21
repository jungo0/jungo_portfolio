import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouter from "./components/Router";
import Home from "./pages/Home/Home";
import Contact from "./pages/Etc";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "./components/Modal";
function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Skills />
      <Project />
      <Contact />
      <Modal />
      <Footer isMobileMenuOpen={false} />
    </Router>
  );
}

export default App;
