interface Props {
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleDarkLightSwitch = ({ setDarkTheme }: Props) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={(e) => {
          setDarkTheme(e.target.checked ? true : false);
        }}
      ></input>
      <span className="slider round"></span>
    </label>
  );
};
