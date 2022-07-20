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
      <h1>Get Ready! Quiz is about to start</h1>
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