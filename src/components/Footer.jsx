import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bottom-0">
      <p className="text-center mx-auto">
        Copyright <CopyrightIcon /> {currentYear}
      </p>
    </footer>
  );
}
