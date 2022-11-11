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
    <div id='title' className="no-point">
      <h1>
        It's-a me... 
        <br></br>
        <span className='name'>John.</span>
        </h1>
    </div>
    <p>hey gjrjgorejgjreojgj</p>
    <div className='face'>
      <Spline scene="https://prod.spline.design/wDQw1bMkAQ9L5avp/scene.splinecode" />
    </div>
    <div className='screen-size'></div>
    <div className='card-container'>
      <div id='about' className="center no-point">
        <motion.div
          className="card front rb-glow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{scale: 0.9}}>
          <h2>About</h2>
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
        </motion.div>
        
      </div>
    </div>
    <div className='screen-size'></div>
    
    <div id='experience'>
      <h2>Experience</h2>
      
      <div className="tl-container front no-point">
        
        <div className='tl-item front'>
          <div className='tl-content'>
            UCI
          </div>
        </div>
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
        <div className='tl-item'>
          <div className='tl-content'>
            UCI
          </div>
        </div>
        <div className='tl-line'></div>
      </div>
    </div>
    
    
    <motion.div
        className="timeline-item-left front"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}> 
        <h3>B.S. in Computer Science</h3>
        <h4>UCI</h4>
        <p>Heyoooo</p>
        
        
      </motion.div>




        <motion.div
          className="timeline-item-right front"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}> 
          <h3>Software Engineer Intern</h3>
          <h4>Knowde</h4>
          <p>Heyoooo</p>
          
          
        </motion.div>
  <p>
    This website is inspired by <a href='https://www.youtube.com/watch?v=2ccwFGUL1SU'>the title screen in Mario 64</a>
    and the old promo Nintendo renders for the game 
  </p>
  </div>

)

export default App;
