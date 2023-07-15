const Experience = ({ title, company, subtitle, bullets }) => {
  return (
    <div className="bg-green-900 rounded-xl p-4 m-8 h-fit">
      <h1 className="text-md">{title} @ {company}</h1>
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
