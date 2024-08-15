import { useTrailer } from '../../trailer/hooks';

type TrailerPropsType = {
  name: string;
  year: string;
};

export const Trailer = ({ name, year }: TrailerPropsType) => {
  const trailerLink = useTrailer(name, year);
  return trailerLink ? (
    <iframe
      title='trailer'
      src={`${trailerLink}`}
      className='w-full aspect-video'
      allowFullScreen={true}
    />
  ) : null;
};
