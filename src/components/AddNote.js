import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const characterLimit = 200;
  const [open, setOpen] = useState(false);
  const [deleteDialog, setDelete] = useState(false);
  const date = new Date();
  const dated = date.toLocaleDateString();
  const handleTitle = (event) => {
    setNoteTitle(event.target.value);
  };
  const handleDelete = () => {
    setDelete(true);
  };
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleClose();
      handleAddNote(noteTitle, noteText);
    }
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setNoteText("");
    setNoteTitle("");
  };
  const handleDeleteBack = () => {
    setDelete(false);
  };
  const handleDel = () => {
    setNoteTitle("");
    setNoteText("");
    setDelete(false);
    setOpen(false);
  };

  return (
    <div className="">
      <button
        className="h-12 w-12 rounded-full items-center justify-center bg-black text-white text-[20px] font-semibold"
        onClick={handleOpen}
      >
        <p>{"+"}</p>
      </button>
      {open && (
        <div className="absolute flex top-0 left-0 w-screen h-screen bg-white flex-col">
          <button
            className="absolute left-6 top-6 h-12 w-12 rounded-full items-center justify-center bg-black text-white text-[15px] font-semibold"
            onClick={handleClose}
          >
            <p>{"<"}</p>
          </button>
          <button
            className="absolute flex hover:scale-[103%] duration-300 z-40 right-6 top-6  h-12 w-12 rounded-full items-center justify-center bg-black text-white text-[15px] font-semibold"
            onClick={handleDelete}
          >
            <MdDeleteForever className="flex" size="1.3em" />
          </button>
          <div className="top-12 flex w-full h-full items-center justify-center flex-col">
            <input
              className="text-[32px] font-semibold w-[80%] p-2 rounded-t-lg"
              placeholder="Enter Title..."
              onChange={handleTitle}
            />
            <span className="px-2 w-[80%] mt-2">{dated}</span>
            <textarea
              rows="8"
              cols="10"
              placeholder="Type to add a note..."
              className="bg-white p-2  mt-4 rounded-b-lg text-[20px] w-[80%]  h-[70%]"
              value={noteText}
              onChange={handleChange}
            />
          </div>
          <small className="text-[16px] absolute left-6 bottom-6 ">
            {characterLimit - noteText.length} Remaining
          </small>
          <button
            className="absolute right-2 lg:right-6 bottom-6 bg-black rounded-full py-2 px-4 text-white"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      )}
      {deleteDialog && (
        <div className="z-50 flex flex-col w-screen h-screen absolute left-0 top-0 bg-white items-center justify-center">
          <img src="./hands.png" className="h-[250px] w-[300px]" />
          <button
            className="absolute left-6 top-6 h-12 w-12 rounded-full items-center justify-center bg-black text-white text-[15px] font-semibold"
            onClick={handleDeleteBack}
          >
            <p>{"<"}</p>
          </button>
          <span className="text-[32px] mt-6 lg:text-[44px] font-semibold">
            You sure about this?
          </span>
          <span className="text-[12px] mt-4 lg:text-[16px]">
            If you delete this note, threat not, you can still find it in the
            bin.
          </span>
          <button
            className="w-64 mt-6 h-12 items-center flex justify-center bg-red-300 rounded-full"
            onClick={handleDel}
          >
            Delete this Note
          </button>
        </div>
      )}
    </div>
  );
};

export default AddNote;
