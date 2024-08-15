import { SwitchToggle } from '../searchArea/components/SearchTypeSwitch';
import { useState } from 'react';

type Props = {
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
};

export const ToggleDarkLightSwitch = ({ setDarkTheme, darkTheme }: Props) => {
  const [checked, setChecked] = useState(false);
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDarkTheme(e.target.checked ? true : false);
    setChecked(e.target.checked);
    localStorage.setItem('theme', e.target.checked.toString());
  };

  return (
    <label className='relative inline-block h-8 border-2 border-black min-w-14 rounded-2xl dark:border-white'>
      <input
        className='w-0 h-0 opacity-0'
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
