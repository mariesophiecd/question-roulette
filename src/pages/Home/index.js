import React from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Leaderboard } from "../../components/index";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Stack from 'react-bootstrap/Stack';
// import logo from '../../images/logo.png'
import './Home.css';

export default function Home() {
  // const scores = useSelector((state) => console.log(state));
  const navigate = useNavigate();

  return (
    <>  
      <Stack className='d-flex justify-content-end' direction='horizontal'>
        <Button variant='primary' size='lg' className='primary-btn p-3' onClick={() => {navigate('/host')}}>
          Start a game
        </Button>
        <Button variant='outline-primary' size='lg' className='outline-primary-btn m-4 p-3' onClick={() => {navigate('/client')}}>
          Join a game
        </Button>
      </Stack>

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
