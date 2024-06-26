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
          <div className='flex flex-row justify-between items-center'>
            <h2 className='font-bold text-2xl italic'>{sectionName}</h2>
            <Link to={`/Film-Library/allPeople/${link}`}>
              <button className='p-2 border border-black'>View All</button>
            </Link>
          </div>
          <div className='flex flex-row gap-x-4 overflow-auto py-4'>
            {arr.map((elem, index) => {
              return (
                <PeoplePoster
                  key={index}
                  imageURL={elem.imageURL}
                  name={elem.name}
                  id={elem.id}></PeoplePoster>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
