import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/host" element={<Host />} />
          <Route path="/client" element={<Client />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
