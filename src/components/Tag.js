const Tag = ({ text }) => {
  return (
    <div className="border border-emerald-800 -hue-rotate-30 hover:bg-emerald-600 bg-green-500 text-emerald-900 transition-all duration-75 rounded-full text-[0.6rem] w-fit p-2 m-1">
      {text}
    </div>
  );
};

export { Tag };
