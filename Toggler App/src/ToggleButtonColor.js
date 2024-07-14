import { useState } from "react";
import "./style.css";
import React from 'react'


const ToggleButtonColor = () => {

  const [backgroundColor, setbackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setbuttonStyle ] = useState("white");

  function handleClick() {
    setbackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setbuttonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  }

  return (
    <>
    <section style={{backgroundColor, color: textColor }}>
      <button 
      onClick={handleClick}
      style={{
        buttonStyle,
        color: textColor,
        border: `2px solid ${textColor}`,
      }}
      
      >Toggle Theme</button>
      <section className="content">
      <h1>
        Welcome To Toggler By <br />
        Sri Sakthi
      </h1>
    </section>
    </section>
    </>

  )
}

export default ToggleButtonColor;

