import { SearchAreaPeople } from '../features/searchArea/components/searchPeople/SearchAreaPeople';
import { PosterDisplayPeople } from '../features/displayPostersSection/components/PosterDisplayPeople';

export default function People() {
  return (
    <main className='min-h-screen text-white bg-zinc-950'>
      <SearchAreaPeople />
      <div className='w-full max-w-6xl px-4 py-10 mx-auto sm:py-14'>
        <PosterDisplayPeople type='pop' link='popular' />
      </div>
    </main>
  );
}
