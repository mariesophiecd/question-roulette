import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Wheel from '../../components/Wheel';
import io from 'socket.io-client'

const socket = io.connect("http://localhost:5001");


export default function Client() {

  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [room, setRoom] = useState("");
  const [button, setButton] = useState(true);
  const [users, setUsers] = useState(0);
  const [roomsAvailable, setRoomsAvailability] = useState([]);

  //to just emit the same event to all members of a room
  // io.to('Room Name').emit('new event', 'Updates');

  const joinRoom = () => {
    // if(!roomsAvailable.includes(room))
    // {
    //   return;
    // }
    try{
      if(room !== "") {
        socket.emit("join_room", room);
        setButton(false);
      }
    }catch(err){
      setMessageReceived(err);
    }   
  }

  const getUsers = () => { 
    socket.emit('userNum', () => {
    })
  };

  socket.on('users', data => {
    console.log('Users are :' + data);
    setUsers(data);
  });

  const sendMessage = () => {
       socket.emit("send_message", { message, room });
  };

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

  return (
      <div>
        { button ? <div>
          <input placeholder="JOIN ROOM" onChange={(event) => {
            setRoom(event.target.value);
          }}/>
          <button onClick={joinRoom}> Create Room </button>
        </div> : <div><h3> JOINED ROOM: {room}</h3></div>}

        <div> <h3>Users </h3> {users} </div>
        <div> <h3> Available Rooms : </h3> {renderAllRooms()} </div>
      
        <input placeholder="Message..." onChange={(event) => {
          setMessage(event.target.value);
        }}/>
        <button onClick={sendMessage}> Send Message </button>
        <h1> Message:</h1>
        {messageReceived}
        <Input />
      </div>
  )
}
