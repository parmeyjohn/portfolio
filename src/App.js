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



const ArtProject = ({title, id}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div onClick={()=> setIsOpen(!isOpen)}
      id={id} 
      className='wide-card point-on'
      layout
      whileHover={{scale: 1.05}}>
        <motion.div layout='position' className='card-content'>
          <h4 className='wide-card-header white'>{title}</h4>
        </motion.div>
        {isOpen && (
          <motion.div layout className="expand">
            <p>Hey this stuff is happening</p>
          </motion.div>
        )
        }
    </motion.div>
  )
}    


const CodeProject = ({project}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div onClick={()=> setIsOpen(!isOpen)}
      id={project.id} 
      className='wide-card point-on'
      layout
      whileHover={{scale: 1.05}}>
        <motion.div layout='position' className='card-content'>
          <h4 layout='position' className='wide-card-header'>{project.name}</h4>
          {isOpen && (
            <motion.div layout className="expand">
              <ul>
                {project.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
              </ul>
            </motion.div>
          )
          }
        </motion.div>
        
    </motion.div>
  )
}


const App = () => {
  const codingProjects = {
    'bapple': {
                "id": 'bapple',
                "name": "Bapple: UCI Search Engine",
                "image": "",
                "link" : "https://dennishc.github.io/bapple.html",
                'bullets' : [
                          'Web crawler and search engine for tens of thousands of UCI web pages',
                          'Achieved accurate search results with a query time of fewer than 300 milliseconds',
                          'Stack: Python (Flask), JavaScript, HTML, and CSS'
                        ]
    },
    'knowde': {
      
    }
  };


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
            I'm a developer and artist based in California.
            <br></br>
            I recently graduated from UCI and I'm looking for new opportunities.
            <br></br>
            My main languages right now are Python and JavaScript but I've worked with C, C++, and Java in the past and I'm always willing to learn new tech for a project. 
            <br></br>

            Oh and for reference this site was inspired by <a href='https://www.youtube.com/watch?v=2ccwFGUL1SU'>the title screen in Mario 64</a> and old Nintendo promo art.
            
          </p>n
        </div>
      </motion.div>
    </div>
    <div className='space'></div>
    
    <h2 className='card-header center'>Experience</h2>
    
    <div id='experience' className='card-col-container'>
      <div className='bg'>

      </div>
      
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
        <CodeProject project={codingProjects['bapple']}/>

        
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
        
      </div>
      
      




      
      <div className='card-col-container'>
        <h3 className='white'>Art</h3>
        <ArtProject id='boxer' title='portrait uno' />
        <ArtProject id='portrait_1' title='portrait uno' />
      </div>
      

    </div>
    
    
    <div className='space'></div>
    
    
    <div id='contact-me'>

      <h2 className='rb-grad-text card-header center '>Contact Me</h2>
      
      <div className='card-col-container'>
        <div className='bg'>
          <div className='card-content'>
            <h3 className='white padded'>For any opportunities or general inquiries, feel free to contact me below:</h3>
            
              <div className='contact-form'>
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
    </div>
  </div>

)
}

export default App;
