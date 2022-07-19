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
        <Stack className='d-flex justify-content-end' direction='horizontal'>
          <Button variant='primary' size='lg' className='primary-btn p-3'>Start a game</Button>
          <Button variant='outline-primary' size='lg' className='outline-primary-btn m-4 p-3'>Join a game</Button>
        </Stack>
        </Row>
        <h1 className="d-flex justify-content-center">Welcome!</h1>
        <h2 className="d-flex justify-content-center">Can you beat them?</h2>
      </Container>
      
      <Leaderboard />
    </>
  );
}
