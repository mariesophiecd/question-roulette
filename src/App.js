import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import { Home, Host, Client, Quiz } from './pages';
import logo from './images/logo.png'
import Container from 'react-bootstrap/Container';
import io from 'socket.io-client'

const socket = io.connect("http://localhost:5001");


function App() {

  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
      if(room !== "") {
        socket.emit("join_room", room);
      }
  }

  const sendMessage = () => {
       socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    })
  }, [socket]);

  return (
    <Container className="App">
      <header className="App-header">   
        <div className='d-flex'>           
          <img src={logo} alt="logo" />

          <input placeholder="JOIN ROOM" onChange={(event) => {
            setRoom(event.target.value);
          }}/>
          <button onClick={joinRoom}> Send Message </button>

          <input placeholder="Message..." onChange={(event) => {
            setMessage(event.target.value);
          }}/>
          <button onClick={sendMessage}> Send Message </button>
          <h1> Message:</h1>
          {messageReceived}
        </div> 

        <Routes>
          <Route path='/' element={<Home />} />
            
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
