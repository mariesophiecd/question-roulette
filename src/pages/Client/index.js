import React from 'react';
import Input from '../../components/Input';

export default function Client() {
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

