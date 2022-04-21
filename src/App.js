import {useState} from 'react'
import './App.css';
import Home from './components/Home';
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import {FaHome, FaTools} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsSun,BsMoon} from 'react-icons/bs'
import {motion} from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faSun } from '@fortawesome/free-regular-svg-icons';


function App() {
  let [page, setPage] = useState("Home")
  let [dark,setDark] = useState(false)
  
 
  return (
    <div className={dark?"darkMode":"App"}>
   
  {page === "Home" && <Home />}
  {page === "Skills" && <Skills />}
  {page === "Projects" && <Projects />}
  {page === "About" && <About />}


  <motion.button 
            // className="navbtn btn1"
            className='dark-btn'
            whileHover={{scale:1.5, backgroundColor:"rgb(217, 177, 0)" }}
            whileTap={{scale:0.6}}
            onClick={() => setDark(!dark)}
            
            
            > {dark? <BsSun/>:<BsMoon/>}
            </motion.button>
  
     <div className="my-nav-bar">


            <motion.button 
            // className="navbtn btn1"
            className={page === 'Home'? 'navbtn btn1 active' : 'navbtn btn1'}
            whileHover={{scale:1.5, backgroundColor:"rgb(217, 177, 0)" }}
            whileTap={{scale:0.6}}
            onClick={() => setPage("Home")}
            
            
            > <FaHome />
            </motion.button>
            
            
            <motion.button 
            className={page === 'Skills'? 'navbtn btn2 active' : 'navbtn btn2'}
            whileHover={{scale:1.5, backgroundColor:"rgb(217, 177, 0)"}}
            whileTap={{scale:0.6}}
            onClick={() => setPage("Skills")}
            
            ><FaTools />
            </motion.button>
            
            <motion.button 
            className={page === 'Projects'? 'navbtn btn3 active' : 'navbtn btn3'}
            
            whileHover={{scale:1.5, backgroundColor:"rgb(217, 177, 0)"}}
            whileTap={{scale:0.6}}
            onClick={() => setPage("Projects")}
            
            ><MdWork />
            </motion.button>
            
            <motion.button
             className={page === 'About'? 'navbtn btn4 active' : 'navbtn btn4'}
            whileHover={{scale:1.5, backgroundColor:"rgb(217, 177, 0)"}}
            whileTap={{scale:0.6}}
            onClick={() => setPage("About")}
            
            ><BsFillPersonFill />
            </motion.button>
        </div>
    </div>
  );
}

export default App;
