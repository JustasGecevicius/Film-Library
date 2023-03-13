interface Props {
  setType: React.Dispatch<React.SetStateAction<"series" | "movie">>;
}

export const SearchTypeSwitch = ({ setType }: Props) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={(e) => {
          setType(e.target.checked ? "series" : "movie");
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};
