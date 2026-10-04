import { Link } from 'react-router-dom';
import { PersonObject } from '../../displayPostersSection/types';

export const PeoplePoster = ({ imageURL, name, id }: PersonObject) =>
  id ? (
    <Link to={`/Film-Library/person/${id}`} className='group min-w-fit'>
      <div
        className='relative flex flex-col max-w-44 gap-y-4'
        data-id={`${id}`}
      >
        <img
          src={imageURL}
          alt='posterImage'
          className='object-cover w-44 h-64 border shadow-lg rounded-xl border-white/10 transition group-hover:-translate-y-1 group-hover:shadow-2xl'
        />
        <p className='text-sm font-medium text-center'>{name}</p>
      </div>
    </Link>
  ) : null;
