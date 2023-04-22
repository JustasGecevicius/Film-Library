import { useFirebaseContext } from "features/context/FirebaseContext";
import { PosterMovieSeries } from "features/poster/components/PosterMovieSeries";
import { useUserLiked, useUserRated } from "features/profile/hooks";

interface Props {
  type: "movie" | "series" | undefined;
  section: "Liked" | "Rated" | undefined
}

export const PosterDisplayAllUserLikedRated = ({type, section} : Props) => {
  if(!type) return <></>
    return <>{section === "Liked" ? <PosterDisplayAllUserLikedMoviesSeries type={type}/> : <PosterDisplayAllUserRatedMoviesSeries type={type}/>}</>;
}

interface TypeType {
 type: "movie" | "series"
}

export const PosterDisplayAllUserLikedMoviesSeries = ({type} : TypeType) => {
    const {userInfo} = useFirebaseContext();
    const results = useUserLiked(type, userInfo?.uid); 
    return <>{
      results && <div className="movieHolderAll">
      {results.map((elem, index) => {
        return (
          <PosterMovieSeries
            key={index}
            imageURL={elem.imageURL}
            title={elem.title}
            release_date={elem.release_date}
            id={elem.id}
            liked={elem.liked}
            rating={elem.rating}
            type={type}
          />
        );
      })}
    </div>
    }
    </>
}

export const PosterDisplayAllUserRatedMoviesSeries = ({type} : TypeType) => {
  const {userInfo} = useFirebaseContext();
  const results = useUserRated(type, userInfo?.uid); 
  return <>{
    results && <div className="movieHolderAll">
    {results.map((elem, index) => {
      return (
        <PosterMovieSeries
          key={index}
          imageURL={elem.imageURL}
          title={elem.title}
          release_date={elem.release_date}
          id={elem.id}
          liked={elem.liked}
          rating={elem.rating}
          type={type}
        />
      );
    })}
  </div>
  }
  </>
}