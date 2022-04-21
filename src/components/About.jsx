import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {FaLinkedin} from 'react-icons/fa'
import {motion} from 'framer-motion'
function About() {
  return (
    <motion.div className='about'
    initial={{ y: -250, opacity: 0}}
    animate={{y:0, opacity: 1}}
    > 
        <h1 className='about-txt, about-heading'>ABOUT</h1>
        <h1 className='me-text about-heading'>ME</h1>

    <motion.div 
    whileHover={{ scale: 1.1 }}
            >
        <Container className='my-details '>
  <Row>
    <Col className='left-column'>First Name: </Col>
    <Col className='right-column'>Rahul</Col>
  </Row>
  <Row>
    <Col className='left-column'>Last Name: </Col>
    <Col className='right-column'>Hotta</Col>
  </Row>
  <Row>
    <Col className='left-column'>Age: </Col>
    <Col className='right-column'>20</Col>
  </Row>
  <Row>
    <Col className='left-column'>College: </Col>
    <Col className='right-column'>Natioanl Institute of Science and Technology</Col>
  </Row>
  <Row>
    <Col className='left-column'>Phone: </Col>
    <Col className='right-column'>7008262278</Col>
  </Row>
  <Row>
    <Col className='left-column'>Email: </Col>
    <Col className='right-column'><a href="mailto:rahulhotta99@gmail.com?body=My custom mail body">E-Mail</a></Col>
  </Row>
  <Row>
    <Col className='left-column'>Linked in:  </Col>
    <Col className='right-column'><a href="https://www.linkedin.com/in/rahul-hotta-a58078203/" target="_blank"><FaLinkedin /> Rahul hotta</a></Col>
  </Row>
</Container>
</motion.div>
    </motion.div>
  )
}

export default About