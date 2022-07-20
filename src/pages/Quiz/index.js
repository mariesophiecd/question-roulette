import React, { useEffect, useState } from "react";
import { QuizCard, Timer } from "../../components/index";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import axios from "axios";
import './Quiz.css';

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
        <Container className="d-flex justify-content-center vh-98 align-items-center">
          <Card className="card-box border rounded-4 p-5">
            <Card.Body>
              <Row className="text-center">
                <Card.Title className="display-3">Score</Card.Title>
                <Card.Text className="card-text mb-3 display-3">{score}</Card.Text>
              </Row>
            </Card.Body>
          </Card>
        </Container>
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
              />
            </Col>   
          </Row>
        </Container>
      )}
    </>
  );
}

export default Quiz;
