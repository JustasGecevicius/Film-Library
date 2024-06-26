import { VisitHomepageType } from 'features/movies/types';

export const VisitHomepage = ({ link }: VisitHomepageType) => {
  return (
    <div className='max-w-4xl py-4 mx-auto text-2xl font-bold'>
      <a href={link} target='_b' className='text-wrap'>
        Visit the movie Homepage by clicking here!
      </a>
    </div>
  );
};
