import { useState } from 'react';

type Props = {
  setType: React.Dispatch<React.SetStateAction<'series' | 'movie'>>;
};

const contentVariants = {
  moviesSeries: ['after:content-["Series"]', 'after:content-["Movies"]'],
  '': '',
};

type SwitchToggleType = {
  checked: boolean;
  content?: keyof typeof contentVariants;
};

export const SearchTypeSwitch = ({ setType }: Props) => {
  const [checked, setChecked] = useState(false);
  return (
    <label className='min-w-24 relative inline-block h-8 rounded-2xl border-black dark:border-white border-2'>
      <input
        className='opacity-0 w-0 h-0'
        type='checkbox'
        onChange={(e) => {
          setType(e.target.checked ? 'series' : 'movie');
          setChecked(e.target.checked);
        }}
      />
      <SwitchToggle
        checked={checked}
        content='moviesSeries'
      />
    </label>
  );
};

export const SwitchToggle = (props: SwitchToggleType) => {
  const { checked, content } = props;

  return (
    <span
      className={`
        w-full
        h-full
        absolute
        before:duration-300
        after:duration-300
        before:h-5/6
        after:h-5/6
        before:aspect-square
        before:absolute
        after:absolute
        before:rounded-xl
        before:top-[2px]
        after:top-[2px]
        before:bg-black
        dark:before:bg-white
        ${
          checked
            ? contentVariants[content || ''][0]
            : contentVariants[content || ''][1]
        }
        ${checked ? 'before:right-[4px]' : 'before:left-[4px]'}
        ${checked ? 'after:left-[6px]' : 'after:right-[6px]'}
      `}
    />
  );
};
