
import { FaGithub, FaLink } from "react-icons/fa";
import { Tag } from "./Tag"

const Project = ({ title, github, link, media, bullets, desc, tags, image, subtitle}) => {

  
  return (
    <div className="bg-slate-200 border-b-8 border-b-blue-400 rounded-xl p-6 h-fit z-10">
      <img
        src={require(`../images/${image}`)}
        alt={`${title} landing page`}
        className="rounded-xl border-2 border-blue-700 hover:border-blue-500 transition-all duration-75"
      ></img>
      <div className="w-full flex justify-between items-center pt-3">
        <div className="">
          <h2 className="text-xl text-blue-700">{title}</h2>
          <h3 className="text-[0.9rem] text-slate-600">{subtitle}</h3>

        </div>
        <div className="flex w-fit items-start">
          {github &&
          <a
            href={github}
            className="point-on front px-2 h-fit border text-slate-900 hover:text-blue-700 transition-all  ease-in-out duration-100"
          >
            <FaGithub size="1.8rem" />
          </a> }
          {link && 
          <a
                href={link}
                className="point-on front px-2 h-fit text-slate-900 hover:text-blue-700 transition-all  ease-in-out duration-100"
              >
                <FaLink size="1.8rem" />
              </a>
          }

        </div>
      </div>
      <p className="py-4 leading-relaxed">{desc}</p>
      <h4>Built with:</h4>
      <div className="flex flex-wrap">
        {tags.map((t) => <Tag text={t}></Tag>)}
      </div>    
    </div>
  );
};

export { Project };
