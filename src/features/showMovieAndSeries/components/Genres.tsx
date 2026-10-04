import { MovieDataGenresType } from 'features/movies/types';

export const Genres = ({ genres }: MovieDataGenresType) => (
  <div className='flex flex-wrap gap-2'>
    {genres.map((elem, index) => (
      <div
        key={index}
        className='px-3 py-1 text-sm font-medium text-white border rounded-full border-white/30 bg-black/30 backdrop-blur-md'
      >
        {elem.name}
      </div>
    ))}
  </div>
);
