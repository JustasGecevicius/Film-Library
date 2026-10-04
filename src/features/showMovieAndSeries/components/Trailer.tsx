import { useTrailer } from '../../trailer/hooks';

type TrailerPropsType = {
  name: string;
  year: string;
};

export const Trailer = ({ name, year }: TrailerPropsType) => {
  const trailerLink = useTrailer(name, year);
  return trailerLink ? (
    <section className='py-4'>
      <h2 className='mb-5 text-2xl font-bold tracking-tight'>Trailer</h2>
      <div className='overflow-hidden border shadow-2xl border-white/10 rounded-2xl bg-black/40'>
        <iframe
          title='trailer'
          src={`${trailerLink}`}
          className='w-full aspect-video'
          allowFullScreen={true}
        />
      </div>
    </section>
  ) : null;
};
