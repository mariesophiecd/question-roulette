import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function QuizCard({
  questions,
  setSeconds,
  setShowScore,
  setScore,
  score,
  seconds,
  setKey,
}) {
  let options = [];
  //console.log("from card: ", questions[0]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [show, setShow] = useState(false);

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
    console.log("clicked second", seconds);
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
      setKey((prev) => prev + 1);
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
      } else {
        setShowScore(true);
      }
    }
  }, [seconds]);
  return (
    <>
      <Container>
        <Card className="card-box border rounded-4 p-5">
          <Card.Body>
            <Row className="text-center">
              <div className="mb-2">
                <Card.Title className="card-title mb-3 fs-2">
                  Question {currentQuestion + 1}/{questions.length}
                </Card.Title>
              </div>
              <Card.Text
                className="card-text mb-3 fs-5"
                dangerouslySetInnerHTML={{
                  __html: questions[currentQuestion].question,
                }}
              ></Card.Text>
              <Row>
                {answers.map((answer) => (
                  <div className="text-center">
                    <Button
                      className="answer-btn m-1 p-3 w-100"
                      onClick={handleClick}
                      dangerouslySetInnerHTML={{ __html: answer }}
                    ></Button>
                  </div>
                ))}
              </Row>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
