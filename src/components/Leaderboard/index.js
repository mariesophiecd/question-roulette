import React from "react";
import { useSelector } from "react-redux";

export default function Leaderboard() {
  const scores = useSelector((state) => state.score);
  console.log("score", scores);
  return (
    <>
      <h1>Leaderboard: Top 10</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
        {scores.map((el, index) => (
          <tr>
            <td>{el.name}</td>
            <td>{el.score}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
