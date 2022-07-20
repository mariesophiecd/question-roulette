import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import { Home, Host, Client, Quiz } from './pages';
import logo from './images/logo.png'
import Container from 'react-bootstrap/Container';


function App() {

  return (
    <Container className="App">
      <header className="App-header">   
        <div className='d-flex'>           
          <img src={logo} alt="logo" />
        </div> 

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/client' element={<Client />} />
          <Route path='/host' element={<Host/>} />
            
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
