import { useFetchFriendLikedMovies, useFetchFriendRatedMovies, useFetchFriendRatedSeries, useFriendLikedSeries } from "features/friends/hooks";
import { PosterMovieSeries } from "features/poster/components/PosterMovieSeries";

interface Props {
  type: "movie" | "series" | undefined;
}

export const PosterDisplayAllFriendRated = ({type} : Props) => {
    return <>{type === "movie" ? <PosterDisplayAllFriendRatedMovies/> : <PosterDisplayAllFriendRatedSeries/>}</>;
}

export const PosterDisplayAllFriendRatedMovies = () => {
    const results = useFetchFriendRatedMovies(); 
    return <>{
      results && results.filteredMoviesList && <div className="movieHolderAll">
      {results.filteredMoviesList.map((elem, index) => {
        return (
          <PosterMovieSeries
            key={index}
            imageURL={elem.imageURL}
            title={elem.title}
            release_date={elem.release_date}
            id={elem.id}
            liked={elem.liked}
            rating={elem.rating}
            type={"movie"}
          />
        );
      })}
    </div>
    }
    </>
}

export const PosterDisplayAllFriendRatedSeries = () => {
  const results = useFetchFriendRatedSeries(); 
  return <>{
    results && results.filteredSeriesList && <div className="movieHolderAll">
    {results.filteredSeriesList.map((elem, index) => {
      return (
        <PosterMovieSeries
          key={index}
          imageURL={elem.imageURL}
          title={elem.title}
          release_date={elem.release_date}
          id={elem.id}
          liked={elem.liked}
          rating={elem.rating}
          type={"series"}
        />
      );
    })}
  </div>
  }
  </>
}