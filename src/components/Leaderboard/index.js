import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export default function Leaderboard() {
  const scores = useSelector((state) => state.score);
  console.log("score", scores);
  const chartData = {
    labels: scores.map((player) => player.name),
    datasets: [
      {
        label: "Player names",
        data: scores.map((player) => player.score),
        backgroundColor: [
          "#ffbb11",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  };
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

      <div>
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Leaderboard",
              },
              legend: {
                display: true,
                position: "bottom",
              },
            },
          }}
        />
      </div>
    </>
  );
}
