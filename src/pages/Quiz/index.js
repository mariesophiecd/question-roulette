import React, { useEffect, useState } from "react";
import { QuizCard, Timer } from "../../components/index";
import axios from "axios";

function Quiz() {
  const [questions, setQuestions] = useState([
    { question: "", incorrect_answers: [] },
  ]);
  const [seconds, setSeconds] = useState(10);
  const [end, setEnd] = useState(true);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
        );
        setQuestions(result.data.results);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {showScore ? (
        <h1>Score : {score}</h1>
      ) : (
        <div>
          <Timer
            seconds={seconds}
            setSeconds={setSeconds}
            key={key}
            setKey={setKey}
          />
          <QuizCard
            questions={questions}
            setSeconds={setSeconds}
            setShowScore={setShowScore}
            setScore={setScore}
            score={score}
            seconds={seconds}
            setKey={setKey}
          />
        </div>
      )}
    </>
  );
}

export default Quiz;
