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

  function Rotate() {
    let sec = 0;
    randomNumber("duration");
    randomNumber("maxTime");

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

    function chooseOption(){
        if(actualRotation >= 0 && actualRotation < 61 ){
            setTheme("RED");
        }else if(actualRotation >= 61 && actualRotation < 121){
             setTheme("BLUE");
        }else if(actualRotation >= 121 && actualRotation < 181){
             setTheme("PINK");
        }else if(actualRotation >= 181 && actualRotation < 241){
             setTheme("GREEN");
        }else if(actualRotation >= 241 && actualRotation < 301){
             setTheme("YELLOW");
        }else{
             setTheme("CYAN");
        }
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
            <Container className='d-flex justify-content-center flex-column mainbox'>
                <Row >              
                    <img className="gear" src={roulette} alt="gear" width="500px" style={{ transform: `rotate(${rotation}deg`}}/>
                </Row>
                <Button onClick={Rotate}>Rotate</Button>
            </Container>
        </>
    )   
}


  return (
    <>
      <section>
        <img
          className="gear"
          src={roulette}
          alt="gear"
          style={{ transform: `rotate(${rotation}deg` }}
        />
        <button onClick={Rotate}>Rotate</button>
      </section>
    </>
  );
};

export default Wheel;
