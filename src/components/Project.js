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
    
        <div className='bg-slate-200 rounded-xl p-4 my-10 first:mt-0 last:mb-0'>
          <h4 className='text-xl font-semibold mb-2'>{project.name}</h4>
          <ul>
            {project.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
          </ul>
        </div>
  )
}

export { ArtProject, CodeProject }