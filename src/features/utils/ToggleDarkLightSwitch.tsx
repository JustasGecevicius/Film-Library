interface Props {
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

export const ToggleDarkLightSwitch = ({ setTheme }: Props) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={(e) => {
          setTheme(e.target.checked ? "dark" : "light");
        }}
      ></input>
      <span className="slider round"></span>
    </label>
  );
};
