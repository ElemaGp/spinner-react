import "./theComponent.css"
import React, { useState } from 'react'
import { SpinnerRound } from "spinners-react";

//the package's name is "spinners-react. Cool stuff"


const TheComponent = () => {
    const [isLoading, setIsLoading] = useState(false);

   const handleClick = () => {
    setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            }, 3000);
    }

  return (
    <div>
        { isLoading ?
        <button className="btnLoading"><SpinnerRound /></button>
        :
        <button className="btnSubmit" onClick={handleClick}>Click</button>
        }
        
    </div>
  )
}

export default TheComponent