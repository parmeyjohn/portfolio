import { motion } from "framer-motion"

const ArtProject = ({project}) => {
  return (
    <motion.div
      id={project.id} 
      className='wide-card point-on'
      layout
      whileHover={{scale: 1.05}}>
        <motion.div layout='position' className='card-content'>
          <h4 className='wide-card-header white'>{project.name}</h4>
        </motion.div>
    </motion.div>
  )
}   

const CodeProject = ({project}) => {
  return (
    <motion.div
      onClick={() => window.open(project.link)}
      id={project.id} 
      className='wide-card point-on'
      layout
      whileHover={{scale: 1.05}}>
        <motion.div layout='position' className='card-content'>
          <h4 layout='position' className='wide-card-header'>{project.name}</h4>
          <ul>
            {project.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
          </ul>
        </motion.div>     
    </motion.div>
  )
}

export { ArtProject, CodeProject }