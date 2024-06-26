import { Link } from "react-router-dom";
import { PersonObject } from "../../displayPostersSection/types";

export const PeoplePoster = ({ imageURL, name, id }: PersonObject) => {
  return id ? (
    <Link to={`/Film-Library/person/${id}`} className='min-w-fit'>
      <div className='flex gap-y-4 relative max-w-[185px] flex-col' data-id={`${id}`}>
        <img
          src={imageURL}
          alt='posterImage'
          className='rounded-xl h-[278px] w-[185px] bg-no-repeat bg-center bg-cover'
        />
        <p className='text-center'>{name}</p>
      </div>
    </Link>
  ) : null;
};
