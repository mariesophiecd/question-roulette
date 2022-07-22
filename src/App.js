import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home, Host, Client, Quiz, SinglePlayer } from "./pages";
import logo from "./images/logo.png";
import Container from "react-bootstrap/Container";
import "./index.css";

function App() {

  const navigate = useNavigate();

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
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/host" element={<Host />} />
          <Route path="/client" element={<Client />} />
          <Route path="/singleplayer" element={<SinglePlayer />} />
          <Route path="/quiz" element={<Quiz />} />         
        </Routes>
      </header>
    </Container>
  );
}

export default App;
