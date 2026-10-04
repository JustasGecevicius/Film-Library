import { Link } from 'react-router-dom';
import { Header } from '../features/header/components/Header';
import { useDisplayName } from '../features/welcomeScreen/hooks';

export default function Home() {
  const displayName = useDisplayName();
  const greeting = displayName ? `Welcome back, ${displayName}` : 'Discover';

  return (
    <main
      className='relative w-full min-h-screen overflow-hidden text-white bg-center bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(/Film-Library/background.avif)` }}
    >
      <div className='absolute inset-0 bg-black/50' />

      <div className='relative z-10 flex flex-col w-full max-w-6xl min-h-screen mx-auto'>
        <Header />

        <section
          className='flex items-center justify-center flex-1 px-2 py-5 sm:px-4 sm:py-10'
          aria-labelledby='home-title'
        >
          <div className='w-full max-w-4xl p-6 border shadow-2xl rounded-3xl border-white/20 bg-black/75 backdrop-blur-xl sm:p-10 lg:p-14'>
            <p className='mb-4 text-xs font-bold tracking-widest uppercase text-white/70'>
              Your film library
            </p>
            <h1
              id='home-title'
              className='max-w-4xl text-4xl font-extrabold leading-none tracking-tight sm:text-6xl lg:text-7xl'
            >
              {greeting}
            </h1>
            <p className='max-w-2xl mt-5 text-base leading-relaxed text-white/75 sm:text-xl'>
              Pick up where you left off, or discover something unforgettable.
            </p>

            <div className='flex flex-col gap-3 mt-8 sm:flex-row'>
              <Link
                className='inline-flex items-center justify-center w-full px-6 py-3 font-bold text-black transition bg-white border border-white rounded-xl hover:-translate-y-0.5 hover:bg-white/90 focus:outline-none focus:ring-4 focus:ring-white/50 motion-reduce:transition-none sm:w-auto'
                to='/Film-Library/explore'
              >
                Explore films
              </Link>
              <Link
                className='inline-flex items-center justify-center w-full px-6 py-3 font-bold text-white transition border rounded-xl border-white/40 bg-white/5 hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/70 focus:outline-none focus:ring-4 focus:ring-white/50 motion-reduce:transition-none sm:w-auto'
                to='/Film-Library/user_profile'
              >
                View profile
              </Link>
            </div>
          </div>
        </section>

        <a
          className='flex-col items-center hidden mx-auto mb-4 text-xs tracking-wider text-white/70 md:flex'
          href='#home-title'
          aria-label='Scroll to discover'
        >
          <span>Scroll to discover</span>
          <span className='text-2xl leading-none' aria-hidden='true'>
            &darr;
          </span>
        </a>
      </div>
    </main>
  );
}
