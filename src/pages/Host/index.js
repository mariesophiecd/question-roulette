import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
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

  const  RedirectToQuiz = () => {
    socket.emit("quiz_page");
    socket.on('quiz_page_direction', (data) => {
      navigate(data);
    })
    console.log("Being Redirected");
    
  }

  return (
    <>
      <div> 
          <button id="redirect" type="submit" onClick={RedirectToQuiz}> Start Game </button>
        </div>
        { button ? <div>
          <input placeholder="CREATE ROOM" onChange={(event) => {
            setRoom(event.target.value);
          }}/>
          <button onClick={joinRoom}> Create Room </button>
        </div> : <div><h3> CREATED ROOM: {room}</h3></div>}
        
        <div> 
          <h3>Users </h3> {users} 
          <h3>ALLPLAYERS </h3> {players.length}
          <br></br>
          <input placeholder="USERNAME" onChange={(event) => {
            setUsername(event.target.value);
          }}/>
          <button onClick={changeUsername}> change username</button>
        </div>
        <br></br>
        
        <br></br>
        <div> <h3> Available Rooms : </h3> {renderAllRooms()} </div>

        <input placeholder="Message..." onChange={(event) => {
          setMessage(event.target.value);
        }}/>
        <button onClick={sendMessage}> Send Message </button>
        <h1> Message:</h1>
        {messageReceived}
      <h1 className='display-1 text-center mb-3'>Create a game !</h1>
        <Container className='pt-5'>
          <Input />              
        </Container>
    </>
  )
}

