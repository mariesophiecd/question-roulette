import React from 'react';
import Input from '../../components/Input';
import Container from 'react-bootstrap/Container';
import './Host.css';

export default function Host() {
  return (
    <>
      <h1 className='display-1 text-center mb-3'>Create a game !</h1>
        <Container className='pt-5'>
          <Input />              
        </Container>
    </>
  )
}

