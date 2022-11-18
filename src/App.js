import Spline from '@splinetool/react-spline'
import { motion } from "framer-motion"


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

const App = () => (
  <div>
    <div className='face'>
        <Spline scene="https://prod.spline.design/wDQw1bMkAQ9L5avp/scene.splinecode" />
      </div>
    <div id='title'>
      <h1 className='text-gradient'>
        It's-a me... 
        <br></br>
        <span className='name'>John.</span>
      </h1>
    </div>
    
    <div className='space'></div>
      
    <div id='about' className='card-container'>
      <motion.div
        className="card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}>
        <h2 className='card-header'>About</h2>

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
    
    <h2 className='card-header'>Experience</h2>
    <div id='experience' className='card-col-container'>
      
      
      <div className="tl-container no-point tl-line">
        <motion.div
          className="tl-item"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}> 
          <h3 className='font-sml'>B.S. in Computer Science</h3>
          <h4>UCI</h4>
          <p>Heyoooo</p>
        </motion.div>
        <motion.div
          className="tl-item"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}> 
          <div className='tl-item-content'>
            <h3>Software Engineer Intern</h3>
            <h4>Knowde</h4>
            <ul>
              <li>Developed application that ingests, parses, and extracts data from chemical PDF documents</li>
              <li>Automated the process of manually parsing and entering sensitive data into their database from 200+ documents weekly</li>
              <li>Expedited document parsing from 6 minutes manually to less than 1 minute per doc</li>
              <li>Attained steady and accurate progress using agile development with Jira, and regression testing</li>
            </ul>
          </div>
        </motion.div>

        <div className='tl-item'>
          <div className='tl-content'>
            UCI
          </div>
        </div>
        <div className='tl-item'>
          <div className='tl-content'>
            UCI
          </div>
        </div>
        <div className='tl-line'></div>
      </div>
    </div>

    <div id='projects' className=''>

    </div>
    <div id='art' className=''>

    </div>
    
    <div id='contact-me' className=''>
      <h2>Looking for opportunies</h2>
      <h3>For any employment opportunities or general inquiries, feel free to contact me below:</h3>
      <div className=''></div>
      
      <form></form>
      <h3>or contact me on my socials:</h3>
    </div>

    
  <p>
    This website is inspired by <a href='https://www.youtube.com/watch?v=2ccwFGUL1SU'>the title screen in Mario 64</a>
    and the old promo Nintendo renders for the game 
  </p>
  </div>

)

export default App;
