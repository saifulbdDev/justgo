import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "../utils";

const SearchField = ({ onChange }: { onChange: Function }) => {
  const inputHandler = useDebounce<React.ChangeEvent<HTMLInputElement>>(
    (e) => onChange(e.target.value),
    400
  );

  return (
    <div className="relative w-full">
      <input
        placeholder="Search..."
        className="w-full h-10 pl-10 rounded-full border "
        onChange={inputHandler}
      />
      <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2" />
    </div>
  );
};

export default SearchField;
