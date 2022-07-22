import React, { useState } from 'react';
import roulette from '../../images/lucky-roulette.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import './Wheel.css';


const Wheel = ({setTheme}) => {
    let timer;
    let duration = 0;
    let maxTime = 0;
    let actualRotation = 0;

    const [rotation, setRotation] = useState(0);

    function Rotate(){
        let sec = 0;
        randomNumber('duration');
        randomNumber('maxTime');
        
        timer = setInterval(() => {
            actualRotation += (duration - sec) / maxTime;
            actualRotation = Math.round(actualRotation % 360);
            sec++;
            setRotation(360 - actualRotation);
            if(sec >= duration){

                stop();
            }
            
        }, maxTime)

        
    }

        //red
        //blue
        //pink
        //green
        //yellow
        //cyan

    function chooseOption(){
        if(actualRotation >= 0 && actualRotation < 61 ){
          setTheme(10);
        }else if(actualRotation >= 61 && actualRotation < 121){
          setTheme(18);
        }else if(actualRotation >= 121 && actualRotation < 181){
          setTheme(21);
        }else if(actualRotation >= 181 && actualRotation < 241){
          setTheme(11);
        }else if(actualRotation >= 241 && actualRotation < 301){
          setTheme(15);
        }else{
          setTheme(12);
        }
    }
  

    function randomNumber(target) {
      if (target === "duration") {
        duration = Math.floor(Math.random() * 300) + 200;
      } else {
        maxTime = Math.floor(Math.random() * 20) + 10;
      }
    }

    
    function stop(){
      clearInterval(timer);
      chooseOption();
    }

    return(
        <>
            <Container className='d-flex justify-content-center flex-column mainbox my-5'>
              <Row className="d-flex justify-content-center">
                  <Button className="primary-btn mt-5 w-25" onClick={Rotate}>Spin</Button>
              </Row>
              <Row className="mb-5">              
                  <img className="gear" src={roulette} alt="gear" style={{ transform: `rotate(${rotation}deg`}}/>
              </Row>
            </Container>
        </>
    )   
}


export default Wheel;
