import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import { useDispatch } from "react-redux";
import { addScore } from "../../actions";
import { QuizCard, Timer, Loading, Leaderboard } from "../../components/index";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "../../index.css";
import "./Quiz.css";

function Quiz() {
  const [questions, setQuestions] = useState([
    { question: "", incorrect_answers: [] },
  ]);
  const [seconds, setSeconds] = useState(10);
  const [end, setEnd] = useState(true);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [key, setKey] = useState(0);
  const [loading, setLoading] = useState(true);
  const [points, setPoints] = useState(0);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData(level, theme) {
      try {
        const result = await axios.get(
          `https://opentdb.com/api.php?amount=5&category=${theme}&difficulty=${level}&type=multiple`
        );
        setQuestions(result.data.results);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData(location.state.level, location.state.theme);
  }, []);

  function RenderConfetti() {
    if (score > 3) {
      return (
        <>
          <h1 className="text-center">Fantastic! You are really smart</h1>
          <Confetti />
        </>
      );
    } else {
      return <h1 className="text-center">Better luck next time</h1>;
    }
  }
  if (showScore && end) {
    console.log("Adding score");
    let multiplier = 1;
    if (location.state.level === "medium") {
      multiplier = 2;
    } else if (location.state.level === "hard") {
      multiplier = 3;
    }
    let totalPoints = score * 200 + points;
    totalPoints = totalPoints * multiplier;
    setPoints(totalPoints);
    dispatch(addScore(location.state.name, totalPoints));
    setEnd(false);
  }
  function handleLeaderboard(e) {
    e.preventDefault();
    setShowLeaderboard(!showLeaderboard);
  }
  return (
    <>
      {loading ? (
        <Container className="d-flex align-items-center justify-content-center flex-column">
          <Loading setLoading={setLoading} />
        </Container>
      ) : showScore ? (

        showLeaderboard ? (
          <>
            <Button className="primary-btn p-3" onClick={handleLeaderboard}>Close</Button>
            <Leaderboard />
          </>
        ) : (
          <>
            <RenderConfetti />
            <Button className="primary-btn p-3" onClick={handleLeaderboard}>Leaderboard</Button>
            <Container className="d-flex justify-content-center vh-98 align-items-center">
              <Card className="card-box border rounded-4 p-5">
                <Card.Body>
                  <Row className="text-center">
                    <Card.Title className="display-3">
                      Correct Answers
                    </Card.Title>
                    <Card.Text className="card-text mb-3 display-4">
                      {score}/{questions.length}
                    </Card.Text>
                    <Card.Title className="display-3">Points</Card.Title>
                    <Card.Text className="card-text mb-3 display-4">
                      {points}
                    </Card.Text>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
          </>
        )

      ) : (
        <Container>
          <Row className="d-flex justify-content-evenly vh-90 align-items-center">
            <Col className="d-flex justify-content-center align-items-center">
              <Timer
                seconds={seconds}
                setSeconds={setSeconds}
                key={key}
                setKey={setKey}
              />
            </Col>
            <Col>
              <QuizCard
                questions={questions}
                setSeconds={setSeconds}
                setShowScore={setShowScore}
                setScore={setScore}
                score={score}
                seconds={seconds}
                setKey={setKey}
                setPoints={setPoints}
              />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default Quiz;
