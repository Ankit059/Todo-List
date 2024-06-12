import React, { useState } from 'react';
import "../App.css";
import img from './cross.png';
import logo from './logo.png';
import hambgr from './hamburger.png';

export const Navbar = () => {

  // const [val,setVal] =useState("...");
  const [visibility,setVisibility] = useState("hidden");
  const [hamvisibility,setHamvisibility] = useState("visible");

  const click = () =>{
    if(visibility==="hidden"){
      setVisibility("visible");
      setHamvisibility("hidden");
    }
    else{
      setVisibility("hidden");
      setHamvisibility("visible");
    }
  }

  // debugger;
  return (
    <>
        <div className="container">
          <img id='logo' src={logo} alt="logo" />
          <h1>Tod0-list</h1>

          <img onClick={click} style={{visibility:hamvisibility}} id='hambgr' src={hambgr} alt="" />
          <img id='img' onClick={click} style={{visibility:visibility}} src={img} alt="t"  />
          <table style={{visibility: visibility}}>
            <tbody>
              <tr>Home</tr>
              <tr>About</tr>
              <tr>Contact us</tr>
              <tr>Help</tr>
              <tr>Other</tr>
            </tbody>
          </table>
        </div>
    </>
  )
}
