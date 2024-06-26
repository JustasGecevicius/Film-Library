interface Props {
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme : boolean
}

export const ToggleDarkLightSwitch = ({ setDarkTheme, darkTheme }: Props) => {

  const handleThemeChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setDarkTheme(e.target.checked ? true : false);
    localStorage.setItem("theme", e.target.checked.toString())
  }

  return (
    <label className='mode-switch'>
      <input
        checked={darkTheme}
        type='checkbox'
        onChange={(e) => {
          handleThemeChange(e);
        }}
      />
      <span className='slider round'></span>
    </label>
  );
};
