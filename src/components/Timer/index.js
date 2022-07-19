import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./style.css";

export default function Timer({ seconds, setSeconds, key, setKey }) {
  //   useEffect(() => {
  //     setInterval(() => {
  //       setSeconds((seconds) => seconds - 1);
  //     }, 1000);
  //   }, []);
  const children = ({ remainingTime }) => {
    const seconds = remainingTime % 60;
    setSeconds(seconds);
    return `${seconds}`;
  };
  return (
    <>
      <CountdownCircleTimer
        key={key}
        isPlaying
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
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
