import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Loading.css";

export default function Loading({ setLoading }) {
  const children = ({ remainingTime }) => {
    const seconds = remainingTime % 60;
    return <div className="time">{seconds}</div>;
  };
  return (
    <>
      <h1 className='display-3 text-center mb-3'>Get Ready ! <br/>Quiz is about to start.</h1>
      <h2 className='fs-2 text-center mb-5 loading-msg'>The faster you answer, <br />the more points you get !</h2>
      <CountdownCircleTimer
        isPlaying
        duration={10}
        size={220}
        colors={["#77E0E7", "#005F4B", "#F5B6E9", "#F55657"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => {
          // do your stuff here
          setLoading(false);
          return { shouldRepeat: true }; // repeat animation in 1.5 seconds
        }}
      >
        {children}
      </CountdownCircleTimer>
    </>
  );
}
