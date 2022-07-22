import React from 'react'; 
import { Input } from "../../components/index";
import Container from 'react-bootstrap/Container';

export default function SinglePlayer() {

    return (
        <>
            <h1 className='display-1 text-center mb-3'>Solo mode</h1>
            <Container className='pt-5'>
                <Input />              
            </Container>
        </>
    )
}
