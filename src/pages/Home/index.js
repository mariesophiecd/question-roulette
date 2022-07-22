import React from "react";
import { useNavigate } from "react-router-dom";
import { Leaderboard } from "../../components/index";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import '../../index.css'

export default function Home() {

  const navigate = useNavigate();

  return (
    <>  
      <Container className="fluid m-5 pb-5">
        <Row className="w-100 mb-5">
          <Col className="d-flex flex-column">
            <h2 className="text-center mb-3">Solo mode</h2>
              <div className="d-flex flex-row justify-content-center">   
                <Button variant='primary' size='lg' className='primary-btn px-4 py-3' onClick={() => {navigate('/singleplayer')}}>
                    Start to play
                </Button>
              </div>
          </Col>
          <Col className="me-5">
            <h2 className="text-center mb-3">Play with friends</h2>
              <div className="d-flex flex-row justify-content-center">             
                <Button variant='primary' size='lg' className='primary-btn p-3 me-1' onClick={() => {navigate('/host')}}>
                  Create a game
                </Button>
                <Button variant='outline-primary' size='lg' className='outline-primary-btn p-3' onClick={() => {navigate('/client')}}>
                  Join a game
                </Button>
              </div> 
          </Col>
        </Row>
      </Container>

      <Container>
        <h1 className="d-flex justify-content-center display-4 my-3">Will you beat them?</h1>
      </Container>
     
      <Container className="w-50 my-5 pb-5">
        <Card className="border rounded-4">
          <Leaderboard />
        </Card>
      </Container>
    </>
  );
}
