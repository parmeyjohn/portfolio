const Experience = ({ title, company, subtitle, bullets }) => {
  return (
    <div className="bg-gradient-to-t from-blue-300 to-blue-200 rounded-xl p-4 m-8 h-fit">
      <h1 className="text-[1.0rem]">{title} </h1>
      <h2 className="text-[0.8rem]">@ {company}</h2>
      <ul className="">
        {subtitle && <h2>{subtitle}</h2>}
        {bullets.map((b) => (
          <li>{b}</li>
        ))}
      </ul>
    </div>
  );
};

export { Experience };
