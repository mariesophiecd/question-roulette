import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";

export default function Timer({ seconds, setSeconds, key, setKey }) {
  //   useEffect(() => {
  //     setInterval(() => {
  //       setSeconds((seconds) => seconds - 1);
  //     }, 1000);
  //   }, []);
  const children = ({ remainingTime }) => {
    const seconds = remainingTime % 60;
    setSeconds(seconds);
    return (
      <div className="time">{seconds}</div>
    )
  };
  return (
    <>
      <CountdownCircleTimer
        key={key}
        isPlaying
        duration={10}
        size={220}
        colors={["#77E0E7", "#005F4B", "#F5B6E9", "#F55657"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => {
          // do your stuff here
          return { shouldRepeat: true }; // repeat animation in 1.5 seconds
        }}
      >
        {children}
      </CountdownCircleTimer>
    </>
  );
}
