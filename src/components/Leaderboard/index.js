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
          "#F5D06B",
          "#77E0E7",
          "#F55657",
          "#F5B6E9",
          "#455BE2",
        ],
      },
    ],
  };
  return (
    <>
      <h1>Top 5</h1>
      {/* <table>
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
      </table> */}

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
