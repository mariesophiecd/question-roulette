import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Host, Client, Quiz } from "./pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/host" element={<Host />} />
          <Route path="/client" element={<Client />} />
          <Route path="/quiz">
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/question" element="" />
            <Route path="/quiz/final_scores" element="" />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
