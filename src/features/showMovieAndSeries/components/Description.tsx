import { DescriptionType } from 'features/movies/types';

export const Description = ({ overview }: DescriptionType) => {
  return (
    <div className='max-w-4xl mx-auto'>
      <p>{overview}</p>
    </div>
  );
};
