import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import io from 'socket.io-client'

const socket = io.connect("http://localhost:5001");


export default function Host() {

  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [room, setRoom] = useState("");
  const [button, setButton] = useState(true);
  

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

  const sendMessage = () => {
       socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    })
  }, [socket]);
  
  return (
      <div>
        { button ? <div>
          <input placeholder="CREATE ROOM" onChange={(event) => {
            setRoom(event.target.value);
          }}/>
          <button onClick={joinRoom}> Create Room </button>
        </div> : <div><h3> CREATED ROOM: {room}</h3></div>}
        

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

