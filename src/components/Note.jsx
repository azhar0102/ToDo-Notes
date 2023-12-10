import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  return (
    <div className="shadow-2xl relative flex w-[350px] md:w-[400px] flex-col m-5 rounded-lg bg-slate-200 ">
      <p className="p-3 w-full break-words font-bold">{props.title}</p>
      <p className="p-3 w-full break-words">{props.content}</p>
      <div className="absolute -bottom-5 right-3">
        <button
          className="p-2 mx-1 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-orange-500-500 hover:to-slate-500 rounded-full"
          onClick={() => props.edit(props.id)}
        >
          <EditIcon />
        </button>
        <button
          className="p-2 mx-1 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-orange-500-500 hover:to-slate-500 rounded-full"
          onClick={() => props.del(props.id)}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
export default Note;
