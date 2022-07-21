import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";


const socket = io.connect("http://localhost:5001");


export default function Client() {

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
    if(!roomsAvailable.includes(room))
    {
      return;
    }
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
    socket.emit("get_difficulty", (data) => {
        setDifficulty(data);
    })
}

  const Subject = () => {
    socket.emit("get_subject", (data) => {
        setSubject(data);
    })
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

  socket.on('quiz_page_direction', (data) => {
    console.log("Being Redirected");
    navigate("/quiz", data);
  })

  return (
    <>
      <Container className='d-flex justify-content-center my-5'>
        <h1 className="display-1 mb-5">Join a Game !</h1>
      </Container>

      <Container>
        <Row>          
          <Form className='d-flex justify-content-center'>
            <Form.Group className="mb-3 w-50 d-flex" controlId="formUsername">
              <Form.Control type="text" className="p-3 border rounded-start" placeholder="Enter a username" onChange={(event) => { setUsername(event.target.value); }} />
              <Button className="primary-btn border rounded-end" onClick={changeUsername}>Send Name</Button>
            </Form.Group>   
          </Form>            
        </Row> 
      </Container>

      <Container>
        <Row>
          <Form className='d-flex justify-content-center'>
            <Form.Group className="mb-3 w-50 d-flex" controlId="formSendMessage">
              <Form.Control type="text" className="p-3 border rounded-start" placeholder="Type a message" onChange={(event) => { setMessage(event.target.value); }} />
              <Button className="primary-btn border rounded-end" onClick={sendMessage}>Send Message</Button>
            </Form.Group>
          </Form>
        </Row>    
      </Container>  

      { button ? 
        <Container>
          <Row>
            <Form className='d-flex justify-content-center'>
              <Form.Group className="mb-3 w-50 d-flex" controlId="formJoinRoom">
                <Form.Control type="text" className="p-3 border rounded-start" placeholder="Type a room number" onChange={(event) => { setRoom(event.target.value); }} />
                <Button className="primary-btn border rounded-end" onClick={joinRoom}>Join Room</Button>
              </Form.Group>                
            </Form>  
          </Row>         
        </Container> 
      : <Container>
          <h3 className='fs-4'> Joined Room: {room}</h3>
        </Container>}

      <Container className='d-flex flex-column justify-content-center'>
        <h3 className='fs-4'>Available Rooms: </h3> 
        {renderAllRooms()} 
      
        <h3 className='fs-4'>Users {users}</h3>

        <h3 className='fs-4'>All Players {players.length}</h3>      
   
        <h3 className='fs-4'>Message: {messageReceived}</h3>
      </Container>
    </>
  )
}

