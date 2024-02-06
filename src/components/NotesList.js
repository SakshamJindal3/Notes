import React, { useState } from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import { MdDeleteForever } from "react-icons/md";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  const [openNotes, setOpenNotes] = useState(Array(notes.length).fill(false));
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [currentIndexToDelete, setCurrentIndexToDelete] = useState(null);

  const handleOpen = (index) => {
    const updatedOpenNotes = [...openNotes];
    updatedOpenNotes[index] = true;
    setOpenNotes(updatedOpenNotes);
  };

  const handleClose = (index) => {
    const updatedOpenNotes = [...openNotes];
    updatedOpenNotes[index] = false;
    setOpenNotes(updatedOpenNotes);
  };

  const modelClose = () => {
    const updatedOpenNotes = [...openNotes];
    setOpenNotes(updatedOpenNotes.map(() => false));
  };

  const handleShut = (index) => {
    setDeleteDialog(true);
    setCurrentIndexToDelete(index);
  };

  const handleConfirmDelete = () => {
    handleDeleteNote(notes[currentIndexToDelete].id);
    setDeleteDialog(false);
    setCurrentIndexToDelete(null);
	modelClose();
  };

  return (
    <div className="flex flex-row w-screen h-screen justify-between">
      <div className="p-10 h-full w-full flex overflow-y-scroll flex-col gap-y-6 justify-center items-center">
        {notes.map((note, index) => (
          <div key={note.id}>
            <button onClick={() => handleOpen(index)}>
              <Note
                id={note.id}
                title={note.title}
                text={note.text}
                date={note.date}
                handleDeleteNote={() => handleShut(index)}
              />
            </button>
            {openNotes[index] && (
              <div className="fixed top-0 z-40 left-0 w-full h-full flex items-center justify-center bg-gray-800/50">
                <button
                  onClick={modelClose}
                  className="absolute flex h-8 w-8 top-6 right-6 bg-black text-white font-bold rounded-full items-center justify-center"
                >
                  X
                </button>
                <div className="relative flex-col cursor-pointer overflow-y-hidden flex w-96 h-[300px] rounded-lg bg-zinc-200 hover:scale-[102%] duration-150 hover:border-2 border-black shadow-lg text-center p-4">
                  <span className="w-full font-semibold text-[20px] bg-zinc-300 py-1">
                    {note.title}
                  </span>
                  <span className="w-full text-[14px] mt-4">{note.text}</span>
                  <div>
                    <small className="absolute bottom-2 left-2">
                      {note.date}
                    </small>
                  </div>
                  <MdDeleteForever
                    onClick={() => handleShut(index)}
                    className="absolute bottom-2 right-2 hover:bg-red-600 hover:text-white rounded-full cursor-pointer"
                    size="1.3em"
                  />
                </div>
              </div>
            )}
            {deleteDialog && currentIndexToDelete === index && (
              <div className="z-50 flex flex-col w-screen h-screen absolute left-0 top-0 bg-white items-center justify-center">
                <img
                  src="./hands.png"
                  alt="Confirmation Modal"
                  className="h-[250px] w-[300px]"
                />
                <button
                  onClick={() => setDeleteDialog(false)}
                  className="absolute left-6 top-6 h-12 w-12 rounded-full items-center justify-center bg-black text-white text-[15px] font-semibold"
                >
                  <p>{"<"}</p>
                </button>
                <span className="text-[32px] mt-6 lg:text-[44px] font-semibold">
                  You sure about this?
                </span>
                <span className="text-[12px] mt-4 lg:text-[16px]">
                  If you delete this note, threat not, you can still find it in
                  the bin.
                </span>
                <button
                  className="w-64 mt-6 h-12 items-center flex justify-center bg-red-300 rounded-full"
                  onClick={handleConfirmDelete}
                >
                  Delete this Note
                </button>
              </div>
            )}
          </div>
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    </div>
  );
};

export default NotesList;
