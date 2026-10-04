import { FoundSearchType } from '../../types';

export const FoundSearch = ({ name, URL }: FoundSearchType) => (
  <div className='flex items-center justify-start p-2 transition rounded-xl gap-x-4 hover:bg-white/10'>
    <img
      src={URL}
      alt='posterImage'
      className='object-cover w-12 h-16 rounded-lg'
    />
    <p className='text-white'>{name}</p>
  </div>
);
