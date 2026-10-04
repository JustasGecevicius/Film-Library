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
  highContrast?: boolean;
};

export const SearchTypeSwitch = ({ setType }: Props) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className='relative flex p-1 text-sm font-bold border cursor-pointer shrink-0 rounded-xl border-white/20 bg-black/30'>
      <input
        className='sr-only'
        type='checkbox'
        aria-label='Search series instead of movies'
        onChange={(e) => {
          setType(e.target.checked ? 'series' : 'movie');
          setChecked(e.target.checked);
        }}
      />
      <span
        className={`px-4 py-2 rounded-lg transition ${
          checked ? 'text-white/60' : 'text-black bg-white'
        }`}
      >
        Movies
      </span>
      <span
        className={`px-4 py-2 rounded-lg transition ${
          checked ? 'text-black bg-white' : 'text-white/60'
        }`}
      >
        Series
      </span>
    </label>
  );
};

export const SwitchToggle = (props: SwitchToggleType) => {
  const { checked, content, highContrast = false } = props;

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
        ${highContrast ? 'before:bg-white' : 'before:bg-black dark:before:bg-white'}
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
