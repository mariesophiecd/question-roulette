import React, { useState, useEffect } from "react";

export default function Timer({ seconds, setSeconds }) {
  useEffect(() => {
    setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
  }, []);

  return <h1>{seconds}s</h1>;
}
