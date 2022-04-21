import React from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import music_app from '../images/the-music-galary.jpg'
import notes_app from '../images/the-notes-app.jpg'
import simon_game from '../images/simon-game.jpg'
import meme_generator from '../images/meme-generator.jpg'
import { motion } from 'framer-motion'


function Projects() {

  return (
    <div className='My-Projects'>
    <motion.div
      initial={{ y: -250, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className='all-projects'>
      <h1 className='projects-heading'>MY PROJECTS</h1>
      <Container>
        <Row>
          <Col>

            <Card style={{ width: '18rem' }} className='project'>
              <Card.Img variant="top" src={music_app} />
              <Card.Body className='bg-dark'>
                <Card.Title >The music galary </Card.Title>
                <Card.Text>
                  This is a music app which will let you listen to music on your device
                </Card.Text>
                <a href="https://hopeful-newton-80d044.netlify.app/" target="_blank">
                  <Button variant="primary">Open it</Button>
                </a>
              </Card.Body>
            </Card>

          </Col>
          <Col>

            <Card style={{ width: '18rem' }} className='project'>
              <Card.Img variant="top" src={notes_app} />
              <Card.Body className='bg-dark '>
                <Card.Title >The Notes app </Card.Title>
                <Card.Text>
                  This is notes app which will help you to write and manage your notes
                </Card.Text>
                <a href="https://upbeat-ritchie-c74b9f.netlify.app/" target="_blank">
                  <Button variant="primary">Open it</Button>
                </a>
              </Card.Body>
            </Card>

          </Col>
        </Row>
        <Row>
          <Col>

            <Card style={{ width: '18rem' }} className='project'>
              <Card.Img variant="top" src={simon_game} />
              <Card.Body className='bg-dark '>
                <Card.Title >Simon game </Card.Title>
                <Card.Text>
                  This is the simon game. It is fun and engaging.
                </Card.Text>
                <a href="https://thirsty-kirch-f2ad42.netlify.app/" target="_blank">
                  <Button variant="primary">Open it</Button>
                </a>
              </Card.Body>
            </Card>

          </Col>

          <Col>

            <Card style={{ width: '18rem' }} className='project last-project'>
              <Card.Img variant="top" src={meme_generator} />
              <Card.Body className='bg-dark '>
                <Card.Title >Meme generator </Card.Title>
                <Card.Text>
                  This is a meme generator and this will generate hilarious meme templates for you to edit.
                </Card.Text>
                <a href="https://candid-medovik-cbdd95.netlify.app/" target="_blank">
                  <Button variant="primary">Open it</Button>
                </a>
              </Card.Body>
            </Card>

          </Col>


        </Row>
      </Container>
    </motion.div>
    </div>
  )
}

export default Projects