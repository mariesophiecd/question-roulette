import React from "react";
import { useNavigate } from "react-router-dom";
import { Leaderboard } from "../../components/index";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from 'react-bootstrap/Stack';
import './Home.css';

export default function Home() {

  const navigate = useNavigate();

  return (
    <>  
      <Container>
        <Row>
          <Col>
          <Button variant='primary' size='lg' className='primary-btn p-3' onClick={() => {navigate('/singleplayer')}}>
                Start to play
          </Button>
          </Col>
          <Col>
            <Stack className='d-flex justify-content-end' direction='horizontal'>
              <Button variant='primary' size='lg' className='primary-btn p-3' onClick={() => {navigate('/host')}}>
                Start a game
              </Button>
              <Button variant='outline-primary' size='lg' className='outline-primary-btn m-4 p-3' onClick={() => {navigate('/client')}}>
                Join a game
              </Button>
            </Stack>
          </Col>
        </Row>
      </Container>

      <Container>
        <h1 className="d-flex justify-content-center display-1">Welcome!</h1>
        <h2 className="d-flex justify-content-center display-4">Will you beat them?</h2>
      </Container>
     
      <Container className="w-50 my-5">
        <Card className="border rounded-4">
          <Leaderboard />
        </Card>
      </Container>
    </>
  );
}
