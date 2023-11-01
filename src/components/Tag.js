const Tag = ({ text }) => {
  return (
    <div className="m-1 w-fit rounded-full border border-emerald-800 bg-green-500 p-2 text-[0.6rem] text-emerald-900 transition-all duration-75 hover:bg-emerald-600">
      {text}
    </div>
  );
};

export { Tag };
