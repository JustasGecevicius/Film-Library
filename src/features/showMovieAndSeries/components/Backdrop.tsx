import { MovieBackdropType } from 'features/movies/types';
import { Genres } from './Genres';
import { Header } from '../../header/components/Header';

export const Backdrop = ({
  backdrop,
  poster,
  title,
  genres,
}: MovieBackdropType) => (
  <section
    className='relative overflow-hidden text-white bg-center bg-cover bg-no-repeat'
    style={{ backgroundImage: `url(${backdrop})` }}
  >
    <div className='absolute inset-0 bg-black/55' />
    <div className='absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/20 to-black/40' />
    <div className='relative z-10'>
      <Header />
      <div className='flex flex-col w-full max-w-6xl gap-6 px-4 pt-10 pb-12 mx-auto sm:flex-row sm:items-end sm:pt-16 md:pb-16'>
        <img
          alt={`${title} poster`}
          className='object-cover w-32 border shadow-2xl h-48 rounded-2xl border-white/20 sm:h-64 sm:w-44 md:h-72 md:w-48'
          src={poster}
        />
        <div className='max-w-3xl pb-1'>
          <p className='mb-3 text-xs font-bold tracking-widest uppercase text-white/60'>
            Now viewing
          </p>
          <h1 className='mb-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl'>
            {title}
          </h1>
          <Genres genres={genres} />
        </div>
      </div>
    </div>
  </section>
);
