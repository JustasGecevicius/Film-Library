import { PeoplePoster } from '../../poster/components/PeoplePoster';
import { PeoplePosterDisplayType } from '../types';
import '../../displayPostersSection/css/posterDisplay.css';
import { Link } from 'react-router-dom';

export const PosterDisplayPeople = ({
  arr,
  sectionName,
  link,
}: PeoplePosterDisplayType) => {
  return (
    <>
      {arr.length !== 0 && (
        <div className='overflow-x-auto'>
          <div className='flex flex-row items-center justify-between'>
            <h2 className='text-2xl italic font-bold'>{sectionName}</h2>
            <Link
              to={`/Film-Library/allPeople/${link}`}
              className='border border-black rounded-full hover:outline-2 hover:outline-black hover:outline dark:border-white h-7'
            >
              <button className='h-full px-2 hover:font-bold'>View All</button>
            </Link>
          </div>
          <div className='flex flex-row py-4 overflow-auto gap-x-4'>
            {arr.map((elem, index) => {
              return (
                <PeoplePoster
                  key={index}
                  imageURL={elem.imageURL}
                  name={elem.name}
                  id={elem.id}
                ></PeoplePoster>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
