import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputMultiplayer } from '../../components';
import io from 'socket.io-client'
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import './Host.css';


const socket = io.connect("http://localhost:5001");

export default function Host() {

  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [room, setRoom] = useState("");
  const [button, setButton] = useState(true);
  const [users, setUsers] = useState(0);
  const [roomsAvailable, setRoomsAvailability] = useState([]);
  const [players, setPlayers] = useState([]);
  const [username, setUsername] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [searchSubject, setSubject] = useState('');
  
  const navigate = useNavigate();

  const joinRoom = () => {

    try{
      if(room !== "") {
        socket.emit("join_room", room);
        setButton(false);
      }
    }catch(err){
      setMessageReceived(err);
    }   
  }

  const Difficulty = () => {
      socket.emit("set_difficulty", (difficulty))
  }

  const Subject = () => {
      socket.emit("set_subject", (searchSubject))
  }

  const changeUsername = () => {
    socket.emit("set_username", username);
  }

  socket.on('users', data => {
    setUsers(data);
  });

  const sendMessage = () => {
       socket.emit("send_message", { message, room });
  };

  socket.on("players", (data) =>{
    setPlayers(data);
  })

  useEffect(() => {
    socket.on('rooms', data => {
      setRoomsAvailability(data);
    })
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    })
  }, [socket]);

  useEffect(() => {
    renderAllRooms();
  }, [roomsAvailable]);

  const renderAllRooms = () => {
    return roomsAvailable.map(r => <tr><td>{r}</td></tr>)
  }

  // const  RedirectToQuiz = ( ) => {
  //   socket.emit("quiz_page", ({state: {name: username, level: level, theme: theme} }) );
  //   socket.on('quiz_page_direction', (data) => {
  //     navigate("/quiz", data);
  //   })
  //   console.log("Being Redirected");
    
  // }

  return (
    <>
      <h1 className='display-1 text-center mb-4'>Create a game !</h1>
     
          <Container>
            <Row>
              { button ? 
              <Col className='d-flex flex-column'>
                <Form className='d-flex justify-content-end'>
                  <Form.Group className="mb-3 w-50" controlId="formCreateRoom">
                    <Form.Control type="text" className="p-3" placeholder="Type a room number" onChange={(event) => { setRoom(event.target.value); }} />
                    <Button className="primary-btn mt-3" onClick={joinRoom}>Create Room</Button>
                  </Form.Group>                
                </Form>  
                <div className='d-flex justify-content-end'>
                  <h3 className='fs-4'>Available Rooms: </h3> 
                  {renderAllRooms()}
                </div>                
              </Col>
              : 
              <Col>
                <h3 className='fs-4'>Created Room: {room}</h3>
              </Col>}

              <Col>
                <Form>
                  <Form.Group className="mb-3 w-50" controlId="formSendMessage">
                    <Form.Control type="text" className="p-3" placeholder="Type a message" onChange={(event) => { setMessage(event.target.value); }} />
                    <Button className="primary-btn p-2 my-3" onClick={sendMessage}>Send Message</Button>
                    <h3 className='fs-4'>Message: </h3>
                    {messageReceived}
                  </Form.Group>
                </Form>
              </Col>
            </Row>
        </Container>

        <Container className='pt-5'>
          <InputMultiplayer />              
        </Container>
    </>
  )
}

<div> 
{/* <button id="redirect" type="submit" onClick={RedirectToQuiz}> Start Game </button> */}
</div>

{/* 
              <input placeholder="CREATE ROOM" onChange={(event) => {
                setRoom(event.target.value);
              }}/>
              <Button className="primary-btn" onClick={joinRoom}>Create Room</Button> */}

    {/* <div> 
          <h3>Users </h3> {users} 
          <h3>ALLPLAYERS </h3> {players.length}
          <br></br>
          <input placeholder="USERNAME" onChange={(event) => {
            setUsername(event.target.value);
          }}/>
          <button onClick={changeUsername}> change username</button>
        </div>
        <br></br> */}

        
        {/* <input placeholder="Message..." onChange={(event) => {
          setMessage(event.target.value);
        }}/>
        <button onClick={sendMessage}> Send Message </button>
        <h1> Message:</h1>
        {messageReceived} */}

        {/* 
        <Container> 
          <h3 className='fs-4'>Available Rooms: </h3> 
          {renderAllRooms()} 
        </Container> */}
