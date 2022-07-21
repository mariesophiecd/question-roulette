import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home, Host, Client, Quiz, SinglePlayer } from "./pages";
import logo from "./images/logo.png";
// import logo3 from "./images/logo3.png";
import Container from "react-bootstrap/Container";

function App() {
  const navigate = useNavigate();

  const sendMessage = () => {};

  return (
    <Container className="App">
      <header className="App-header">
        <div className="d-flex logo-box pointer w-25">
          <img
            src={logo}
            alt="logo"
            className="w-75"
            onClick={() => navigate("/")}
          />
          {/* <img 
            src={logo3}
            alt='animation-roulette'
            className="animLogo"
          /> */}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/host" element={<Host />} />
          <Route path="/client" element={<Client />} />
          <Route path="/singleplayer" element={<SinglePlayer />} />
          <Route path="/quiz">
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/question" element="" />
            <Route path="/quiz/final_scores" element="" />
          </Route>
        </Routes>
      </header>
    </Container>
  );
}

export default App;

/* <Route path='/theme' element={<Quiz />} />
            <Route path='/question' element='' />
            <Route path='/final_scores' element=''/> */

/* <Route path='/' element={<Home />} />
          <Route path='/host' element={<Host/>} />
          <Route path='/client' element={<Client />} />
          <Route path='/quiz' element={<Quiz />}> */
// </Routes>/</Route>
