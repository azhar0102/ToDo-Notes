import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

export default function EditNote(props) {
  const [note, setNote] = useState({
    title: props.title,
    content: props.content,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const handleSave = (e) => {
    e.preventDefault();
    props.onSave(props.id, note.title, note.content);
  };

  return (
    <div className="flex relative justify-center items-center">
      <form className="my-11 w-[350px] md:w-[480px]">
        <input
          className="p-4 w-full font-bold rounded-t-2xl outline-none"
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="This is title"
        />

        <textarea
          className="p-4 w-full rounded-b-2xl outline-none"
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="This is content.."
        />
        <div className="absolute bottom-6 right-3">
          <button
            className="p-2 mx-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
            type="button"
            onClick={handleSave}
          >
            <CheckIcon />
          </button>
          <button
            className="p-2 mx-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
            type="button"
            onClick={props.onCancel}
          >
            <ClearIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
