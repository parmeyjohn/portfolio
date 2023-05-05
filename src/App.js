import Spline from '@splinetool/react-spline'
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"
import { ArtProject, CodeProject} from "./components/Project"
import codingProjects from "./data/codeProjects.json"
import artProjects from "./data/artProjects.json"
 
const App = () => {
  return (
  <div className='bg-slate-900 h-screen w-screen overflow-y-auto'>
    {/* <div className='face'>
      <Spline scene="https://prod.spline.design/wDQw1bMkAQ9L5avp/scene.splinecode" />
    </div> */}
    <div className='w-full h-screen bg-slate-800'>
      <div className='flex w-full h-full flex justify-center items-center text-4xl'>
        It's a me John
      </div>
    </div>
    
    <div id='about' className='p-4 my-20  w-full h-screen flex flex-col items-center justify-center'>
      <h2 className='text-4xl my-10 font-semibold'>
        About
      </h2>
      <div className='p-8 rounded-xl w-full h-auto bg-slate-100 max-w-4xl'>
        <ul>
          <li>Hi, I'm John, a dev and artist based in California.</li>
          <li>I recently graduated from UCI with a BS in Computer Science and am currently looking for new opportunities.</li>
          <li>Recently I've been using JavaScript and Python for web development, but I've enjoyed working with C, C++, and Java in the
          past; I'm always willing to learn a new language or framework for a project.</li>
          <li>My current interests include UX/UI Design, mobile development, and AR.</li>
          <li>Feel free to check out my projects down below or contact me on my socials.</li>
        </ul>
      </div>
    </div>
    
    <div id='experience' className='w-full h-auto p-4 my-20 flex flex-col items-center before:bg-teal-900 before:h-full before:absolute'>
      
      <h2 className='text-4xl my-10 font-semibold'>
        Experience
      </h2>
      
      <div className='w-full h-auto max-w-4xl'>
        <div className='p-8 my-10 rounded-xl w-full h-auto bg-slate-100'>
          <h3 className='text-xl font-semibold mb-2'>B.S. in Computer Science at UCI</h3>
          <h4 className='ml-2'>Relevant Coursework:</h4>
          <ul className='ml-4'>
            <li>Data Structure Implementation and Analysis</li>
            <li>Design and Analysis of Algorithms</li>
            <li>Principles in System Design</li>
            <li>Data Management</li>
            <li>Machine Learning and Data Mining</li>
          </ul>
        </div>

        <div className='p-8 my-10 rounded-xl w-full h-auto bg-slate-100'>
          <h3 className='text-xl font-semibold mb-2'>Software Engineer Capstone at Knowde</h3>
          <ul className='ml-4'>
            <li>Developed application that ingests, parses, and extracts data from chemical PDF documents</li>
            <li>Automated the process of manually parsing and entering sensitive data into their database from 200+ documents weekly</li>
            <li>Expedited document parsing from 6+ minutes manually to less than 1 minute per doc</li>
            <li>Attained steady and accurate progress using agile development with Jira, and regression testing</li>
          </ul>
        </div>

        <div className='p-8 my-10 rounded-xl w-full h-auto bg-slate-100'>
          <h3 className='text-xl font-semibold mb-2'>Team Member at Chipotle</h3>
          <ul className='ml-2'>
            <li>Amplified throughput on the cash register and food line in a fast-paced team environment</li>
            <li>Provided exemplary service to over 150 customers per shift</li>
          </ul>
        </div>

        <div className='p-8 my-10 rounded-xl w-full h-auto bg-slate-100'>
          <h3 className='text-xl font-semibold mb-2'>Sales Associate at Vans</h3>
          <ul className='ml-2'>
            <li>Worked the shoe floor, cash register, and apparel deck engaging with customers and assisting coworkers</li>
            <li>Memorized dozens of shoe and apparel styles to improve ability to meet customers’ needs</li>
          </ul>
        </div>


      </div>
    </div>

  

    <div className='space'></div>

    <h2 className='card-header gb-grad-text center'>Recent Projects</h2>
    
    <div id='projects' className='card-col-container'>
        <CodeProject project={codingProjects['bapple']} />
        <CodeProject project={codingProjects['knowde']} />
        <CodeProject project={codingProjects['portfolio64']} />
        {/*
        <h3 className='white'>art</h3>
        <ArtProject project={artProjects['boxer']} />
        <ArtProject project={artProjects['portrait_1']} />
        */}
    </div>
    
    
    <h2 className='rb-grad-text card-header center'>Contact Me</h2>
    <div className='card-col-container'>
      <div id='contact-me' className='green-card-bg'>
        <h3 className='white padded center front'>For any opportunities or general inquiries, feel free to contact me below:</h3>   
        <div className='contact-form'>
          <form action="https://formsubmit.co/johncuviello99@gmail.com" method="POST">
            <input type="text" name="name" placeholder="Name" className='front' required />
            <input type="email" name="email" placeholder="Email" className='front' required />
            <input type="message" name="msg" placeholder="Message" className='msg-box front' required />
            <button className='front' type="submit">Send</button>
          </form>
        </div>
        <h3 className='white padded center front'>or check out my socials:</h3>
        <div className='flex-icons padded'>
          <a href='https://www.linkedin.com/in/johncuv/' className='point-on front'>
            <FaLinkedin href='google.com' color='white' size='4rem' />
          </a>
          <a href='instagram.com' className='point-on front'>
            <FaInstagram color='white' size='4rem' />
          </a>
          <a href='https://github.com/parmeyjohn' className='point-on front'>
            <FaGithub color='white' size='4rem' />
          </a>
        </div>
      </div>
    </div>
    <div className='bot-page-wave'></div>
    
  </div>

)
}

export default App;
