import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Wheel from '../../components/Wheel';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client'

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
    navigate(data);
  })

  return (
    <>
      <div className='d-flex justify-content-center my-5'>
        <h1 className="display-1 mb-5">Join a Game !</h1>
      </div>
      <Input />
      <div className='d-flex justify-content-center my-5'>
        <h2 className="display-4 mb-5">Join a room</h2>
      </div>
    </>
  )
}
