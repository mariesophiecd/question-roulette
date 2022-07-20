import React, {useEffect, useState} from 'react';
import roulette from '../../images/lucky-roulette.png';
import Container from 'react-bootstrap/Container';

const Wheel = () => {
  let timer;
  let duration = 0;
  let maxTime = 0;
  let actualRotation = 0;

  const [rotation, setRotation] = useState(0);

  function Rotate() {
    let sec = 0;
    randomNumber("duration");
    randomNumber("maxTime");

    timer = setInterval(() => {
      actualRotation += (duration - sec) / maxTime;
      actualRotation = Math.round(actualRotation % 360);
      sec++;
      console.log(360 - actualRotation);
      setRotation(360 - actualRotation);
      if (sec >= duration) {
        stop();
      }
    }, maxTime);
  }

  function chooseOption() {
    if (actualRotation >= 0 && actualRotation < 61) {
      console.log("RED");
    } else if (actualRotation >= 61 && actualRotation < 121) {
      console.log("BLUE");
    } else if (actualRotation >= 121 && actualRotation < 181) {
      console.log("PINK");
    } else if (actualRotation >= 181 && actualRotation < 241) {
      console.log("GREEN");
    } else if (actualRotation >= 241 && actualRotation < 301) {
      console.log("YELLOW");
    } else {
      console.log("CYAN");
    }
  }

  function randomNumber(target) {
    if (target === "duration") {
      duration = Math.floor(Math.random() * 300) + 200;
    } else {
      maxTime = Math.floor(Math.random() * 20) + 10;
    }
  }

  useEffect(() => {
    Rotate();
  }, []);

<<<<<<< HEAD
  function stop() {
    clearInterval(timer);
    chooseOption();
  }
=======
    return(
        <>
            <Container>
                <img className="gear" src={roulette} alt="gear" style={{ transform: `rotate(${rotation}deg`}}/>
                <button onClick={Rotate} >Rotate</button>
            </Container>
        </>
    )   
}
>>>>>>> fa8cedd2e19932fd34cb7db2d286efe9e504e090

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
