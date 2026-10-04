import { DescriptionType } from 'features/movies/types';

export const Description = ({ overview }: DescriptionType) => {
  return overview ? (
    <section className='p-6 border bg-white/5 border-white/10 rounded-2xl sm:p-8'>
      <p className='mb-2 text-xs font-bold tracking-widest uppercase text-white/50'>
        Storyline
      </p>
      <h2 className='mb-4 text-2xl font-bold tracking-tight'>Overview</h2>
      <p className='max-w-4xl text-base leading-7 text-white/75 sm:text-lg'>
        {overview}
      </p>
    </section>
  ) : null;
};
