import '../../displayPostersSection/css/posterDisplay.css';
import { WatchProviderPoster } from '../../poster/components/WatchProviderPoster';
import { WatchProvidersDataResultsProvider } from '../../showMovieAndSeries/types';
import '../../displayPostersSection/css/posterDisplay.css';

export interface PosterDisplayWatchProvidersType {
  arr: WatchProvidersDataResultsProvider[];
  sectionName: string;
}

export const PosterDisplayWatchProviders = ({
  arr,
  sectionName,
}: PosterDisplayWatchProvidersType) => {
  return (
    <div className=''>
      <div className=''>
        <h2 className=''>{sectionName}</h2>
      </div>
      <div className=''>
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
    </div>
  );
};
