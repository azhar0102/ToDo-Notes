import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function Create(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleClick(e) {
    e.preventDefault();
    if (note.title.trim() !== "" && note.content.trim() !== "") {
      props.AddNote(note);
      setNote({
        title: "",
        content: "",
      });
    }
  }

  return (
    <div className="flex justify-center items-center">
      <form className="shadow-2xl my-11 w-[390px] md:w-[480px]">
        <input
          className="p-4 w-full font-bold rounded-t-2xl outline-none"
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="This is title"
        />
        <div className="flex relative">
          <textarea
            className="p-4 w-full rounded-b-2xl resize-none outline-none"
            name="content"
            value={note.content}
            onChange={handleChange}
            placeholder="This is content.."
          />
          <button
            className={`rounded-full absolute top-16 right-5 p-1 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-orange-500-500 hover:to-slate-500 ${
              note.title.trim() === "" || note.content.trim() === ""
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
            onClick={handleClick}
            disabled={note.title.trim() === "" || note.content.trim() === ""}
          >
            <AddIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
