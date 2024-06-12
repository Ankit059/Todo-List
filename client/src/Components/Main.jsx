import React, { useState } from 'react';
import { Todo } from './todo';
import Cancel from './cross1.png';

export const Main = () => {

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const del = () => {
    setMessage("");
  }

  const Add = async (e) => {

    e.preventDefault();

    try {
      const data1 = { "data":message };
      const response = await fetch('http://localhost:3001/api/auth/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data1),
      });

      if (!response.ok) {
        alert("not added")
      }
      else {
        // alert("added successfully");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }



  }


  return (
    <>
      <div className="mainContainer">
        <div className="successnotify">
          {/* Success notify */}
        </div>
        <div className="failnotify">
          {/* Fail notify */}
        </div>
        <div className="content">
          <input className="box" type="text" onChange={handleChange} value={message} />
          {
            message && (
              <img id='cancel' style={{ visibility: 'visible' }} src={Cancel} alt="cancel" onClick={del} />
            )
          }

          <button id='button' onClick={Add}>Add</button>
          <div className='todo'>
            < Todo />
          </div>

        </div>
      </div>
    </>
  )
}
