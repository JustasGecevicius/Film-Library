// Types
import { MovieBackdropType } from '../../movies/types';

export const BackdropPerson = ({ backdrop, poster, title }: MovieBackdropType) => {
  return (
    <div
      className='h-[500px] bg-center bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${backdrop})` }}>
      <div className='h-full max-w-4xl mx-auto relative '>
        <div className='relative top-full -translate-y-full flex-row items-end gap-x-8'>
          <div
            className='bg-cover bg-center h-48 aspect-[2/3] rounded-md'
            style={{ backgroundImage: `url(${poster})` }}></div>
          <h2 className='text-6xl font-serifFont whitespace-break-spaces'>{title}</h2>
        </div>
      </div>
    </div>
  );
};
