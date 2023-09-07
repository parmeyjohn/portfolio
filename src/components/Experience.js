const Experience = ({ title, company, subtitle, bullets, experience, desc }) => {
  return (
    <div className="bg-slate-200 border-b-8 border-b-indigo-400 rounded-xl p-6 h-fit">
      
      <h1 className="text-lg text-blue-700 font-semibold">{title} </h1>
      <h2 className="mb-2">{company}</h2>
      {desc && <p className="leading-relaxed">{desc}</p>}
      
      {bullets && <ul className="list-disc">
        {subtitle && <h2 className="mb-1">{subtitle}</h2>}
        {bullets.map((b) => (
          <li className="ml-3 leading-relaxed">{b}</li>
        ))}
      </ul> }
    </div>
  );
};

export { Experience };
