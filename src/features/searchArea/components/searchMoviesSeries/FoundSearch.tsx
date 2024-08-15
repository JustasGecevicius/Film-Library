import { FoundSearchType } from '../../types';

export const FoundSearch = ({ name, URL }: FoundSearchType) => (
  <div className='flex-row items-center justify-start pt-2 gap-x-4'>
    <img src={URL} alt='posterImage' className='max-w-14' />
    <p className='dark:text-white'>{name}</p>
  </div>
);
