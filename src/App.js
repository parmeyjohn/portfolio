import Spline from '@splinetool/react-spline'
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"
import { ArtProject, CodeProject} from "./components/Project"
import codingProjects from "./data/codeProjects.json"
import artProjects from "./data/artProjects.json"
 
const App = () => {
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
        
          <p className='med-font'>
            I'm a developer and artist based in California.
            <br></br>
            I recently graduated from UCI and I'm looking for new opportunities.
            <br></br>
            My main languages right now are Python and JavaScript but I've worked with C, C++, and Java in the past and I'm always willing to learn new tech for a project. 
            <br></br>

          </p>n
        </div>
      </motion.div>
    </div>
    <div className='space'></div>
    
    <h2 className='card-header center'>Experience</h2>
    
    <div id='experience' className='card-col-container'>      
      <div className="tl-container no-point tl-line center">
        <motion.div
          className="tl-item"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}> 
          <div className='tl-item-content'>
            <h3 className='font-sml'>B.S. in Computer Science <span className='black'>at</span> UCI</h3>
            <h4>2022</h4>
            <br></br>
            <p><strong>Relevant Coursework:</strong> </p>
            <ul>
              <li>Data Structure Implementation and Analysis</li>
              <li>Design and Analysis of Algorithms</li>
              <li>Principles in System Design</li>
              <li>Data Management</li>
              <li>Machine Learning and Data Mining</li>
            </ul>
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
              <li>Expedited document parsing from 6+ minutes manually to less than 1 minute per doc</li>
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

    <h2 className='card-header gb-grad-text center'>Recent Projects</h2>
    
    <div id='projects' className='card-col-container'>
        <h3 className='white'>code</h3>
        <CodeProject project={codingProjects['bapple']} />
        <CodeProject project={codingProjects['knowde']} />
        <CodeProject project={codingProjects['portfolio64']} />
        <h3 className='white'>art</h3>
        <ArtProject project={artProjects['boxer']} />
        <ArtProject project={artProjects['portrait_1']} />
    </div>
    
    
    <div className='space'></div>
    <div className='space'></div>
    <div className='space'></div>
    
    <h2 className='rb-grad-text card-header center '>Contact Me</h2>
    <div id='contact-me' className='card-col-container'>
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

)
}

export default App;
