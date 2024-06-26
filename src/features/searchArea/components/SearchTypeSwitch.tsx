import { useEffect, useRef, useState } from 'react';

interface Props {
  setType: React.Dispatch<React.SetStateAction<'series' | 'movie'>>;
}

export const SearchTypeSwitch = ({ setType }: Props) => {
  const [checked, setChecked] = useState(false);
  return (
    <label className='min-w-20 relative inline-block h-7 rounded-xl border-white border-2'>
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
        switchSize={50}
        beforeContent=''
        afterContent={checked ? 'Movies' : 'Series'}
      />
    </label>
  );
};

type SwitchToggleType = {
  checked: boolean;
  switchSize: number;
  beforeContent: string;
  afterContent: string;
};

const SwitchToggle = (props: SwitchToggleType) => {
  const { checked, switchSize, beforeContent, afterContent } = props;
  const [parentSize, setParentSize] = useState(0);
  const switchComponent = useRef<any>(null);
  useEffect(() => {
    if (!switchComponent?.current?.offsetParent?.offsetWidth) return;
    setParentSize(switchComponent.current.offsetParent.offsetWidth);
  }, [switchComponent]);
  return (
    <span
      ref={switchComponent}
      className={`
        w-[${switchSize}px]
        dark:bg-black
        dark:before:bg-white
        dark:after:text-white
        rounded-xl
        absolute
        before:h-6
        before:w-6
        before:absolute
        before:rounded-xl
        before:left-[${checked ? parentSize + 2 - 30 : 2}px]
        `}></span>
  );
};

// after:content-['${afterContent}']
// after:absolute
// after:left-${checked ? '2' : '6'}
// before:left-${checked ? '6' : '2'}
