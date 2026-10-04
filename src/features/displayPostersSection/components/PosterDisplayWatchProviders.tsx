import { WatchProviderPoster } from '../../poster/components/WatchProviderPoster';
import { WatchProvidersDataResultsProvider } from '../../showMovieAndSeries/types';

export interface PosterDisplayWatchProvidersType {
  arr: WatchProvidersDataResultsProvider[];
  sectionName: string;
}

export const PosterDisplayWatchProviders = ({
  arr,
  sectionName,
}: PosterDisplayWatchProvidersType) => {
  return (
    <section className='py-4'>
      <h2 className='mb-5 text-2xl font-bold tracking-tight'>{sectionName}</h2>
      <div className='flex flex-wrap gap-4'>
        {arr.map((elem, index) => {
          return (
            <WatchProviderPoster
              key={index}
              imageURL={elem.logo_path}
              providerName={elem.provider_name}
            />
          );
        })}
      </div>
    </section>
  );
};
