import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

export default function QuizCard({
  questions,
  setSeconds,
  setShowScore,
  setScore,
  score,
  seconds,
}) {
  let options = [];
  //console.log("from card: ", questions[0]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (answers.length < 4) {
      questions[currentQuestion].incorrect_answers.push(
        questions[currentQuestion].correct_answer
      );
      options = questions[currentQuestion].incorrect_answers;
      setAnswers(shuffleArray(options));
      setCorrectAnswer(questions[currentQuestion].correct_answer);
      options = [];
    }
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      return array;
    }
  }, [options]);

  function handleClick(e) {
    e.preventDefault();
    const nextQuestion = currentQuestion + 1;

    console.log("correct Answer", correctAnswer);
    console.log("User Answer", e.target.textContent);
    if (correctAnswer === e.target.textContent) {
      setScore(score + 1);
    }
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setAnswers([]);
      reset();
    } else {
      setShowScore(true);
    }
  }
  function reset() {
    setSeconds(10);
  }
  useEffect(() => {
    if (seconds === 0) {
      console.log("time up");
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setAnswers([]);
        reset();
      } else {
        setShowScore(true);
      }
    }
  }, [seconds]);

  return (
    <>
      <Container>
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Row>
              <Card.Title>Question 1/4</Card.Title>
              <Card.Text>{questions[currentQuestion].question}</Card.Text>
              <Row>
                {answers.map((answer) => (
                  <button onClick={handleClick}>{answer}</button>
                ))}
              </Row>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}