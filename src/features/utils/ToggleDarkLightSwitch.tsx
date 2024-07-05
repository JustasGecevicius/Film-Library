import { SwitchToggle } from '../searchArea/components/SearchTypeSwitch';
import { useState } from 'react';

interface Props {
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
}

export const ToggleDarkLightSwitch = ({ setDarkTheme, darkTheme }: Props) => {
  const [checked, setChecked] = useState(false);
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDarkTheme(e.target.checked ? true : false);
    setChecked(e.target.checked);
    localStorage.setItem('theme', e.target.checked.toString());
  };

  return (
    <label className='min-w-14 relative inline-block h-8 rounded-2xl border-black dark:border-white border-2'>
      <input
        className='opacity-0 w-0 h-0'
        checked={darkTheme}
        type='checkbox'
        onChange={(e) => {
          handleThemeChange(e);
        }}
      />
      <SwitchToggle checked={checked} />
    </label>
  );
};
