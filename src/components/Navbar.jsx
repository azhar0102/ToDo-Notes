import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function Nav() {
  return (
    <div className=" w-full text-center py-5 bg-gradient-to-r from-orange-300 to-rose-300">
      <h1 className="font-bold italic text-4xl">
        <MenuBookIcon fontSize="large" /> Notes
      </h1>
    </div>
  );
}
