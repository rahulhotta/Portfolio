import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaPython, FaJava } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
  return (
    <motion.div 
    initial={{ y: -250, opacity: 0}}
    animate={{y:0, opacity: 1}}
    className='skills'>

      <h1 className='skills-heading'>MY SKILLS</h1>
      <Container>

        <Row>
          <Col> <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.6 }}
            className="skill"><FaHtml5 className='logo' /> HTML</motion.div> </Col>
          <Col><motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.6 }}
            className="skill"> <FaCss3Alt className='logo' /> CSS</motion.div></Col>
        </Row>
        <Row>
          <Col> <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.6 }}
            className="skill"><SiJavascript className='logo' /> JAVASCRIPT</motion.div></Col>
          <Col> <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.6 }}
            className="skill"><FaReact className='logo' /> REACT</motion.div></Col>
        </Row>

        <Row>
          <Col> <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.6 }}
            className="skill"><FaBootstrap className='logo' /> BOOTSTRAP</motion.div></Col>
          <Col> <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.6 }}
            className="skill"> <FaPython className='logo' /> PYTHON</motion.div></Col>
          
        </Row>
        <Row>
        <Col> <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.6 }}
            className="skill"><FaJava className='logo' /> JAVA</motion.div></Col>
          
        </Row>
      </Container>

    </motion.div>
  )
}


export default Skills