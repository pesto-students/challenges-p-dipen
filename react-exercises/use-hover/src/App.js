import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(() => {
    console.log('hover', ref.current);
    const element = ref.current;
    if (element) {
      console.log('inside');
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
      return () => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [ref]);

  return [ref, value];
}

function App() {
  const [hoverRef, isHovered] = useHover();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p ref={hoverRef}>{isHovered ? 'Hovered !' : 'Hover me !'}</p>
      </header>
    </div>
  );
}

export default App;
