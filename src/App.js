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
    <div className='screen-size'>
      <h1>It's-a me...John.</h1>
      <div className='face'>
        <Spline scene="https://prod.spline.design/wDQw1bMkAQ9L5avp/scene.splinecode" />
      </div>
    </div>
    

    <div className="about center">
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
          </ul>
        </p>
      </motion.div>
      
    </div>
    <div className='screen-size'></div>

    
    <div className="experience center timeline-container">
      <h2>Experience</h2>
      <br></br>
      <div>
        <motion.div
          className="timeline-item front"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}> 
          <h3>Software Engineer Intern</h3>
          <h4>Knowde</h4>
          
          
        </motion.div>
      </div>
    </div>
  </div>

)

export default App;
