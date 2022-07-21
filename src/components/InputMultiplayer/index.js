import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import Wheel from '../Wheel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import io from 'socket.io-client'

const socket = io.connect("http://localhost:5001");


export default function InputMultiplayer() {
    const [username, setUsername] = useState("")
    const [submitOptions, setSubmitOptions] = useState("");
    const [level, setLevel] = useState("");
    const [theme, setTheme] = useState("");
    const navigate = useNavigate()

    function handleInput(e){
        setUsername(e.target.value)
    }

    function handleLevel(e){
        setLevel(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setSubmitOptions(username, level, theme)
        socket.emit("quiz_page", ({state: {name: username, level: level, theme: theme} }) );
        socket.on('quiz_page_direction', (data) => {
        navigate("/quiz", data);
        })
        console.log("Being Redirected");

        // navigate('/quiz', {state: {name: username, level: level, theme: theme} });
        setUsername('')
    };
        

    return (        
        <>
            <Container className="w-50">
                <Form onSubmit={handleSubmit} className="d-flex justify-content-center flex-column">
                    <Row className='mb-5 text-center'>
                            <h2>Spin the Wheel to get your theme!</h2>   
                            <Wheel setTheme={setTheme} />
                    </Row>
                    <Form.Group className="mb-3" controlId="formInputText">
                        <Form.Control type="text" className="p-3" placeholder="Enter username" onChange={handleInput} value={username}/>
                    </Form.Group>   
                    <Form.Select onClick={handleLevel} className="w-100 p-3" aria-label="Choose your level here!">
                        <option>Choose you level here !</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </Form.Select>                  
                    
                    <Button variant="primary" className="primary-btn my-5 p-3" type="submit">START TO PLAY!</Button>
                </Form>
                
            </Container>
        </>
    )
}
