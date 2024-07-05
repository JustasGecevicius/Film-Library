import { DescriptionType } from 'features/movies/types';

export const Description = ({ overview }: DescriptionType) => {
  return <p>{overview}</p>;
};
