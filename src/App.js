import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import { Home, Host, Client, Quiz } from './pages';
import logo from './images/logo.png'
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';


function App() {

  const sendMessage = () => {

  };



  return (
    <Container className="App">
      <header className="App-header">         
        <img src={logo} className="d-flex justify-content-center" alt="logo" />

        <Routes>
            
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
