import Spline from '@splinetool/react-spline'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"


const artProjects = [
  {
    "id": 1,
    "name": "concept 01",
    "image": "",
    "link" : ""
  }
]
const codeProjects = [
  {
    "id": 1,
    "name": "Bapple",
    "image": "",
    "link" : ""
  }
]



const Bubble = ({title, text}) => {
  
  return (
    <>
      <h3>{title}</h3>
    </>
  )
}

//TODO: replace img tag with frame
const Project = ({title, image, alt}) => {
  
  return (
    <>
      <h3>{title}</h3>
      <img src={image} alt={alt}></img>
    </>
  )
}
//    

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <div>
    <div className='face'>
        <Spline scene="https://prod.spline.design/wDQw1bMkAQ9L5avp/scene.splinecode" />
      </div>
    <div id='title'>
      <h1 className='rb-grad-text'>
        It's-a me... 
        <br></br>
        <span className='name'>John.</span>
      </h1>
    </div>
    
    <div className='space'></div>

    <h2 className='card-header ry-grad-text center'>About</h2>
    <div id='about' className='card-container'>
      <motion.div
        className="card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}>

        <div className='card-content'>
        
          <p className='sml-font'>
            I'm a developer and artist who loves working on amusing and challenging projects.
            <br></br>
            I like learning new techniques and technologies that let me express myself in distinct ways.
            <br></br>
            I just graduated from UCI and right now I'm looking for new opportunities that push my limits and contribute to a meaningful product.
            <br></br>
            Here are some completely irrelevant facts about myself:
            <ul>
              <li>Favorite emoji: 🤠</li>
              <li>Favorite food: Spaghetti</li>
              <li>Favorite keyboard switches: MX Brown</li>
              <li>Favorite Disney movie: Aladdin</li>
            </ul>
          </p>
        </div>
      </motion.div>
    </div>
    <div className='space'></div>
    
    <h2 className='card-header center'>Experience</h2>
    
    <div id='experience' className='card-col-container'>
      <div className='bg'></div>
      
      <div className="tl-container no-point tl-line center">
        <motion.div
          className="tl-item"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}> 
          <div className='tl-item-content'>
            <h3 className='font-sml'>B.S. in Computer Science <span className='black'>at</span> UCI</h3>
            <h4>2022</h4>
            <br></br>
            <p>
              Relevant Coursework: <br /> Design and Analysis of Algorithms, Principles in System Design, Data Structure Implementation and Analysis, Data Management, Machine Learning and Data Mining
            </p>
          </div>
        </motion.div>
        <motion.div
          className="tl-item"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}> 
          <div className='tl-item-content'>
            <h3>Software Engineer Intern 
              <span className='black'> at</span> <strong>Knowde</strong></h3>
            <h4>2022</h4>
            <br></br>
            <ul>
              <li>Developed application that ingests, parses, and extracts data from chemical PDF documents</li>
              <li>Automated the process of manually parsing and entering sensitive data into their database from 200+ documents weekly</li>
              <li>Expedited document parsing from 6 minutes manually to less than 1 minute per doc</li>
              <li>Attained steady and accurate progress using agile development with Jira, and regression testing</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="tl-item"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}> 
          <div className='tl-item-content'>
            
            <h3>Team Member 
              <span className='black'> at</span> <strong>Chipotle</strong></h3>
            <h4>2021</h4>
            <br></br>
            <ul>
              <li>Amplified throughput on the cash register and food line in a fast-paced team environment</li>
              <li>Provided exemplary service to over 150 customers per shift</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="tl-item"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}> 
          <div className='tl-item-content'>
            
            <h3>Sales Associate 
              <span className='black'> at</span> <strong>Vans</strong></h3>
            <h4>2020</h4>
            <br></br>
            <ul>
              <li>Worked the shoe floor, cash register, and apparel deck engaging with customers and assisting coworkers</li>
              <li>Memorized dozens of shoe and apparel styles to improve ability to meet customers’ needs</li>
            </ul>
          </div>
        </motion.div>

        <div className='tl-line'></div>
      </div>
    </div>

    <div className='space'></div>

    <div id='projects'>
      <h2 className='card-header gb-grad-text center'>Recent Projects</h2>
      
      <div className='card-col-container'>
        <h3 className='white'>Code</h3>
        <motion.div
         id='knowde' className='wide-card point-on'
         whileHover={{scale: 0.9}}>
          <div className='card-content'>
            <h4 className='wide-card-header'>Knowde PDF Data Pipeline</h4>
            <ul>
              <li>Application that ingests, parses, and extracts data from chemical PDF documents</li>
              <li>Stack: JavaScript (React), Python (Flask, pandas, numPy), MongoDB, HTML, and CSS</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
         id='bapple' className='wide-card point-on'
         whileHover={{scale: 1.05}}>
          <div className='card-content'>
            <h4 className='wide-card-header'>Bapple: UCI Search Engine</h4>
            <ul>
              <li>Web crawler and search engine for tens of thousands of UCI web pages</li>
              <li>Achieved accurate search results with a query time of fewer than 300 milliseconds</li>
              <li>Stack: Python (Flask), JavaScript, HTML, and CSS</li>
              <li>Link to demo and writeup available <a href='https://dennishc.github.io/bapple.html'>here</a></li>
            </ul>
          </div>
        </motion.div>
      </div>
      
      





      <div className='card-col-container'>
        <h3 className='white'>Art</h3>
        <motion.div
          id='boxer' className='wide-card point-on'
          whileHover={{scale: 1.1}}>
          <div className='card-content'>
            <h4 className='wide-card-header white'>Boxer</h4>

          </div>
          
        </motion.div>
        
        <motion.div
          id='portrait_1' className='wide-card point-on'
          whileHover={{scale: 1.1}}>
          <div className='card-content'>
            <h4 className='wide-card-header white'>Speed Portrait 01</h4>
          </div>
          
        </motion.div>
      </div>
      

    </div>
    
    
    <div className='space'></div>
    
    
    <div id='contact-me'>

      <h2 className='rb-grad-text card-header center front'>Contact Me</h2>
      
      <div className='card-col-container front'>
        <div className='bg'></div>
        <div className='card-content front'>
          <h3 className='white padded'>For any opportunities or general inquiries, feel free to contact me below:</h3>
          
            <div className='contact-form front'>
              <form action="https://formsubmit.co/johncuviello99@gmail.com" method="POST">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="message" name="msg" placeholder="Message" className='msg-box' required />
                <button className='point-on' type="submit">Send</button>
              </form>
            </div>
          <h3 className='white padded'>or check out my socials:</h3>
          
          
          <div className='flex-icons padded'>
            <a href='https://www.linkedin.com/in/johncuv/' className='point-on'>
              <FaLinkedin href='google.com' color='white' size='4rem' />
            </a>
            <a href='instagram.com' className='point-on'>
              <FaInstagram color='white' size='4rem' />
            </a>
            <a href='https://github.com/parmeyjohn' className='point-on'>
              <FaGithub color='white' size='4rem' />
            </a>
            <a href='https://github.com/parmeyjohn' className='point-on'>
              <FaGithub color='white' size='4rem' />
            </a>
          </div>
      </div>
    </div>
    </div>
  <p>
    This website is inspired by <a href='https://www.youtube.com/watch?v=2ccwFGUL1SU'>the title screen in Mario 64</a>
    and the old promo Nintendo renders for the game 
  </p>
  </div>

)
}

export default App;
