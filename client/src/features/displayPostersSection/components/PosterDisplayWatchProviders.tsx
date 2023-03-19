import "features/displayPostersSection/css/posterDisplay.css";
import { WatchProviderPoster } from "features/poster/components/WatchProviderPoster";
import { WatchProvidersDataResultsProvider } from "features/showMovieAndSeries/types";
import "features/displayPostersSection/css/posterDisplay.css"

export interface PosterDisplayWatchProvidersType {
  arr : WatchProvidersDataResultsProvider[]
  sectionName : string
}

export const PosterDisplayWatchProviders = ({
  arr,
  sectionName,
}: PosterDisplayWatchProvidersType) => {
  return (
    <div className="section">
      <div className="sectionInfo">
        <h2 className="sectionName">{sectionName}</h2>
      </div>
      <div className="posterHolder">
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