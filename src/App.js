import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Loading from './components/Loading';
import Stars from './components/Stars';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import { FaUserCircle } from 'react-icons/fa';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create a canvas to draw the icon
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    // Set background to transparent
    ctx.clearRect(0, 0, 64, 64);

    // Draw the icon
    const icon = document.createElement('div');
    icon.style.color = '#000000'; // Black color
    icon.style.fontSize = '64px';
    icon.innerHTML = FaUserCircle({}).props.children; // Get the SVG path from the icon

    // Convert the icon to a data URL
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512">${icon.innerHTML}</svg>`;
    const dataUrl = `data:image/svg+xml;base64,${btoa(svgString)}`;

    // Update favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = dataUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
    
    // Update apple touch icon
    const appleLink = document.querySelector("link[rel='apple-touch-icon']") || document.createElement('link');
    appleLink.rel = 'apple-touch-icon';
    appleLink.href = dataUrl;
    document.getElementsByTagName('head')[0].appendChild(appleLink);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Stars />
      <Navbar />
      <main>
        <section id="home" className="section home-section">
          <Home />
        </section>
        
        <section id="about" className="section about-section">
          <About />
        </section>
        
        <section id="projects" className="section projects-section">
          <Projects />
        </section>
        
        <section id="contact" className="section contact-section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
