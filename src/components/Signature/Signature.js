import React from 'react';
import './Signature.css';
import home from './homepage.png';
import linkedin from './LinkedIn-Icon.png';
import github from './github.png';
import { Container, Row } from 'react-bootstrap';

const Signature = () => {

    return (
        <Container fluid className='signature-container'>
            <Row className='justify-content-center'>
                <p className="name">Martha Sharpe</p>
            </Row>
            <Row className='justify-content-center'>
                <a
                    href="https://www.linkedin.com/in/marthasharpe2020/"
                    target="_blank" rel="noopener noreferrer"
                >
                <img className="icon" alt="linkedin icon" src={linkedin}/>
                </a>
                <a
                    href="https://github.com/marthasharpe"
                    target="_blank" rel="noopener noreferrer"
                >
                <img className="icon" alt="github icon" src={github}/>
                </a>
                <a
                    href="https://marthasharpe.netlify.com/"
                    target="_blank" rel="noopener noreferrer"
                >
                <img className="icon" alt="homepage icon" src={home}/>
                </a>
            </Row>
        </Container>
    )
}

export default Signature;