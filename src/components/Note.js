const Note = ({ id, title, text, date, handleDeleteNote }) => {


  return (

      <div

        className="relative flex-col cursor-pointer overflow-y-hidden flex w-96 h-[100px] rounded-lg bg-zinc-200 hover:scale-[102%] duration-150 hover:border-2 border-black shadow-lg text-center"
      >
        <span className="w-full font-semibold text-[20px] bg-zinc-300 py-1">
          {title}
        </span>
        <span className="w-full text-[14px] mt-4">{text}</span>
        <div>
          <small className="absolute bottom-2 left-2">{date}</small>
        </div>
      </div>


  );
};

export default Note;
