
import { Tag } from "./Tag"

const Project = ({ title, link, media, bullets, tags }) => {

  
  return (
    <div className="bg-slate-200 border-b-8 border-b-indigo-400 rounded-xl p-4 my-8 h-fit z-10">
      
      <div className="flex justify-center"> 
      <iframe width="360" height="200" src="https://www.youtube.com/embed/CHxTcQiFjGk?si=fKD90uyY7FRQf6tM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      </div>
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
