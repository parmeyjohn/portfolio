import { motion } from "framer-motion";

const Project = ({ title, link, media, bullets }) => {

  
  return (
    <div className="bg-green-900 rounded-xl p-4 m-8 h-fit">
      { link ? <a href={link}><h1>{title}</h1></a>: <h1>{title}</h1> }
      <div className="bg-red-900 w-80 h-80"></div>
      <ul className="">
        {bullets.map((b) => (
          <li>{b}</li>
        ))}
      </ul>
    </div>
  );
};

export { Project };
