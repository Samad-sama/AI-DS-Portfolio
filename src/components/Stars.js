import React, { useEffect, useRef } from 'react';

function Stars() {
  const starsRef = useRef(null);

  useEffect(() => {
    const createStars = () => {
      const stars = starsRef.current;
      if (!stars) return;
      
      stars.innerHTML = '';
      // Reduce number of stars on mobile
      const isMobile = window.innerWidth <= 768;
      const starDensity = isMobile ? 4000 : 2000;
      const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / starDensity);

      // Create regular stars
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Improved positioning
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;
        
        // Adjust size for mobile
        const baseSize = isMobile ? 1 : 1.5;
        const size = baseSize + Math.random() * (isMobile ? 2 : 3);
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Optimize animation duration for mobile
        const duration = isMobile ? 
          (1.5 + Math.random() * 2) : 
          (2 + Math.random() * 3);
        star.style.setProperty('--star-duration', `${duration}s`);
        star.style.animationDelay = `${Math.random() * 2}s`;
        
        const brightness = 0.7 + Math.random() * 0.3;
        star.style.filter = `brightness(${brightness})`;
        
        stars.appendChild(star);
      }
    };

    const handleResize = () => {
      // Debounce resize event
      if (window.resizeTimeout) {
        window.clearTimeout(window.resizeTimeout);
      }
      window.resizeTimeout = setTimeout(createStars, 250);
    };

    createStars();
    window.addEventListener('resize', handleResize);

    // Reduce recreation frequency on mobile
    const interval = setInterval(createStars, window.innerWidth <= 768 ? 15000 : 10000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
      if (window.resizeTimeout) {
        clearTimeout(window.resizeTimeout);
      }
    };
  }, []);

  return <div ref={starsRef} className="stars" />;
}

export default Stars; 