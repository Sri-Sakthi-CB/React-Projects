import { useState } from "react";
import "./style.css";
import React from 'react'

const Testimonials = () => {
    const [currentIndex, setcurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "This is the best product that I have ever used.",
            author: "Jane Doe",
        },
        {
            quote: "I highly recommend this product to everyone!",
            author: "Sathish Rayon",
        },
        {
            quote: "This product has completely blown my mind.",
            author: "Alex",
        }
    ]

    const handlePrevClick = () => {
        setcurrentIndex(
            (currentIndex + testimonials.length-1) % testimonials.length
        )
    }
    const handleNextClick = () => {
        setcurrentIndex(
            (currentIndex + 1) % testimonials.length
        )
    }


  return (
    <div className="testimonials">
        <div className="testimonials-quote">
            {testimonials[currentIndex].quote}
        </div>
        <div className="testimonials-author">
            {testimonials[currentIndex].author}
        </div>
        <testimonials className="nav">
            <button onClick={handlePrevClick}>Prev</button>
            <button onClick={handleNextClick}>Next</button>
        </testimonials>
      
    </div>
  )
}

export default Testimonials







