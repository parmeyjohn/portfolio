const Tag = ({ text }) => {
  return (
    <div className="bg-blue-300 border border-b-2 border-blue-600 text-blue-700 hover:bg-blue-400 transition-all ease-linear rounded-lg w-fit p-2 m-2">
      {text}
    </div>
  );
};

export { Tag };
