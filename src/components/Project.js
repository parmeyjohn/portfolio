import { FaGithub, FaLink } from "react-icons/fa";
import { Tag } from "./Tag";

const Project = ({
  title,
  github,
  link,
  media,
  bullets,
  desc,
  tags,
  image,
  subtitle,
  thumbnailLink
}) => {
  return (
    <div className="z-10 h-fit rounded-xl border-b-8 border-b-blue-400 bg-slate-200 p-6">
      <a href={thumbnailLink}>
        <div className="w-auto h-auto overflow-hidden border-blue-700 hover:border-blue-500 transition-all duration-100 border-2 rounded-xl">
          <img
            src={require(`../images/${image}`)}
            alt={`${title} landing page`}
            className="transition-all duration-100 hover:scale-125"
          ></img>
        </div>
      </a>
      <div className="flex w-full items-center justify-between pt-3">
        <div className="">
          <h2 className="text-xl text-blue-700">{title}</h2>
          <h3 className="text-[0.9rem] text-slate-600">{subtitle}</h3>
        </div>
        <div className="flex w-fit items-start">
          {github && (
            <a
              href={github}
              className="point-on front h-fit border px-2 text-slate-900 transition-all duration-100  ease-in-out hover:text-blue-700"
            >
              <FaGithub size="1.8rem" />
            </a>
          )}
          {link && (
            <a
              href={link}
              className="point-on front h-fit px-2 text-slate-900 transition-all duration-100  ease-in-out hover:text-blue-700"
            >
              <FaLink size="1.8rem" />
            </a>
          )}
        </div>
      </div>
      <p className="py-4 leading-relaxed">{desc}</p>
      <h4>Built with:</h4>
      <div className="flex flex-wrap">
        {tags.map((t, i) => (
          <Tag key={i} text={t}></Tag>
        ))}
      </div>
    </div>
  );
};

export { Project };
