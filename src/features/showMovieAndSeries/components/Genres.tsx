// Types
import { MovieDataGenresType } from "features/movies/types";

export const Genres = ({ genres }: MovieDataGenresType) => {
    return (
      <div className='flex-row gap-x-2'>
        {genres.map((elem, index) => {
          return (
            <div
              key={index}
              className='px-2 py-1 text-white border border-white rounded-full'>
              {elem.name}
            </div>
          );
        })}
      </div>
    );
};
