import React from "react";
import { useSelector } from "react-redux";
import { Button, Leaderboard } from "../../components/index";

export default function Home() {
  //const scores = useSelector((state) => console.log(state));
  return (
    <>
      <h1>This is the homepage</h1>
      <h2>hello world</h2>
      <Button name="Play" />
      <Leaderboard />
    </>
  );
}
