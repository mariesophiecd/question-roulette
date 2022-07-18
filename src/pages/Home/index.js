import React from "react";
import { useSelector } from "react-redux";
import { Leaderboard } from "../../components/index";
import Stack from 'react-bootstrap/Stack';
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row'
import { Container } from "react-bootstrap";
import './Home.css';

export default function Home() {
  //const scores = useSelector((state) => console.log(state));
  return (
    <>
      <Container>
        <Row>
        <Stack direction='horizontal' gap={3}>
          <Button variant='primary' size='lg' className='primary-btn m-5'>Start a game</Button>
          <Button variant='info' size='lg' className='info-btn ms-auto m-5'>Join a game</Button>
        </Stack>
        </Row>
        <h1 className="d-flex justify-content-center">Welcome!</h1>
        <h2 className="d-flex justify-content-center">Can you beat them?</h2>
      </Container>
      
      <Leaderboard />
    </>
  );
}
