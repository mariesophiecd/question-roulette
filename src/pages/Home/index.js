import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Leaderboard } from "../../components/index";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import './Home.css';

export default function Home() {
  //const scores = useSelector((state) => console.log(state));
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Row>
        <Stack className='d-flex justify-content-end' direction='horizontal'>
          <Button variant='primary' size='lg' className='primary-btn p-3' onClick={() => {navigate('/client')}}>Start a game</Button>
          <Button variant='outline-primary' size='lg' className='outline-primary-btn m-4 p-3'>Join a game</Button>
        </Stack>
        </Row>
        <h1 className="d-flex justify-content-center">Welcome!</h1>
        <h2 className="d-flex justify-content-center">Can you beat them?</h2>
      </Container>
      <Container className="w-50 my-5">
        <Card className="border rounded-3">
          <Leaderboard />
        </Card>
      </Container>
    </>
  );
}
