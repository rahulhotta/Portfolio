
import React from 'react'
import home_img from '../images/home-page-main-logo.png'
import my_logo from '../images/my-logo-3.jpg'
import {motion} from 'framer-motion'
import { Container, Row, Col } from 'react-bootstrap';


function Home() {

  
  return (
    
    <motion.div 
   
    initial={{y:-250, opacity:0}}
    animate={{y:0, opacity:1}}
    
    className='home-container'>
      
      <Container>
        <motion.img 
        src={my_logo} 
        alt="" 
        whileHover={{scale:1.1 }}
        whileTap={{scale:0.6}}
        
        className='home-img'/>
        </Container>
        <h1 className='name'>
            --I'M Rahul Hotta
        </h1>
        <h2 className='job-title'>
            Web developer
        </h2>

        <p className='description'>
        I'm Rahul a web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
        </p>
        
    </motion.div>
  )
}

export default Home