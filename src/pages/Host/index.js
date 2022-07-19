import React from 'react';
import Input from '../../components/Input';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import './Host.css';

export default function Host() {
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

