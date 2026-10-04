import { SwitchToggle } from '../searchArea/components/SearchTypeSwitch';

type Props = {
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
};

export const ToggleDarkLightSwitch = ({ setDarkTheme, darkTheme }: Props) => {
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isDarkTheme = e.target.checked;

    setDarkTheme(isDarkTheme);
    localStorage.setItem('theme', isDarkTheme.toString());
  };

  return (
    <label className='relative inline-block h-8 border-2 min-w-14 rounded-2xl border-white/70 bg-white/10'>
      <input
        className='w-0 h-0 opacity-0'
        checked={darkTheme}
        type='checkbox'
        aria-label='Toggle dark mode'
        onChange={handleThemeChange}
      />
      <SwitchToggle checked={darkTheme} highContrast />
    </label>
  );
};
