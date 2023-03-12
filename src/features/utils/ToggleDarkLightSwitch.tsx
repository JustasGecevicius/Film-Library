interface Props {
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme : boolean
}

export const ToggleDarkLightSwitch = ({ setDarkTheme, darkTheme }: Props) => {
  return (
    <label className="switch">
      <input
        checked={darkTheme}
        type="checkbox"
        onChange={(e) => {
          setDarkTheme(e.target.checked ? true : false);
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};
