
import { Tag } from "./Tag"

const Project = ({ title, link, media, bullets, tags }) => {

  
  return (
    <div className="bg-gradient-to-t from-blue-300 to-blue-200 rounded-xl p-4 m-8 h-fit">
      
      <div className="flex justify-center hidden"> 
        <iframe width="360" height="200" src="https://www.youtube.com/embed/Q6MemVxEquE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      { link ? <a href={link}><h1 className="text-lg p-1 text-blue-700 font-semibold">{title}</h1></a>: <h1 className="text-lg p-1 text-blue-700 font-semibold">{title}</h1> }
      <ul className="my-2">
        {bullets.map((b) => (
          <li className="p-1">{b}</li>
        ))}
      </ul>
      <div className="flex flex-wrap">
        {tags.map((t) => <Tag text={t}></Tag>)}
      </div>    
    </div>
  );
};

export { Project };
