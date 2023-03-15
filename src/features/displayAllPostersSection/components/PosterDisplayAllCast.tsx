import { PeoplePoster } from "features/poster/components/PeoplePoster";
import { useMovieSeriesCast } from "features/showMovieAndSeries/hooks";
import { useParams } from "react-router-dom";


export const PosterDisplayAllCast = () => {
  const {type, id} = useParams();
  const credits = useMovieSeriesCast(type as "movie" | "series", id);
  console.log(credits);
    return <>{
      credits && <div className="movieHolderAll">
        {credits.map((elem, index) => {
          return (
            <PeoplePoster key={index} name={elem.name} imageURL={elem.imageURL} id={elem.id}/> 
          )
        })}
      </div>
    }</>;
}