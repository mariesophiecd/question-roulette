import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client'

const socket = io.connect("http://localhost:5001");

=======
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import './Host.css';
>>>>>>> c9625ecc2a043906bb74d072c24d193f80d5286f

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
      <div className='d-flex justify-content-center my-5'>
        <h1 className="display-1 mb-5">Start a Game !</h1>
      </div>
      <div className="pb-5">
        <Input />
      </div>
      <div className='d-flex justify-content-center my-5'>
        <h2 className='display-4'>Choose your level</h2>
      </div>
      <div>
        <Stack className='col-md-5 mx-auto w-50 mb-5'>
          <Button className="easy-btn p-3 fs-4">Easy</Button>
          <Button className="medium-btn p-3 fs-4">Medium</Button>
          <Button className="hard-btn p-3 fs-4">Hard</Button>
        </Stack>
      </div>
    </>
  )
}

