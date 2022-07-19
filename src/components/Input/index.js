import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


export default function Input() {
    const [username, setUsername] = useState('')
    const [submitUsername, setSubmitUsername] = useState('');

    function handleInput(e){
        setUsername(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setSubmitUsername(username)
    }


    return (
        
        <>
            <Container className='w-50'>
                <Form onSubmit={handleSubmit} className='d-flex justify-content-center flex-column'>
                    <Form.Group className="mb-3" controlId="formInputText">
                        <Form.Control type="text" placeholder="Enter username" onChange={handleInput}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    )
}
