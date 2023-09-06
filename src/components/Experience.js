const Experience = ({ title, company, subtitle, bullets }) => {
  return (
    <div className="bg-slate-200 border-b-8 border-b-indigo-400 rounded-xl p-4 h-fit">
      <h1 className="text-[1.0rem] text-blue-700 font-semibold">{title} </h1>
      <h2 className="text-[0.8rem]">@ {company}</h2>
      <ul className="">
        {subtitle && <h2 className="mb-1">{subtitle}</h2>}
        {bullets.map((b) => (
          <li className="">{b}</li>
        ))}
      </ul>
    </div>
  );
};

export { Experience };
