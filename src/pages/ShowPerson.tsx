import { LikePerson } from "features/likeAndRate/components/LikePerson";
import { useLikedPerson } from "features/likeAndRate/hooks";
import { getPerson } from "features/people/api";
import { Backdrop } from "features/showMovieAndSeries/components/Backdrop";
import { Description } from "features/showMovieAndSeries/components/Description";
import { VisitHomepage } from "features/showMovieAndSeries/components/VisitHomepage";
import { useBackdropPerson } from "features/showMovieAndSeries/hooks";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export const ShowPerson = () => {
  const { id } = useParams();

  const { data: person } = useQuery(
    ["person", id],
    () => {
      return getPerson(id);
    },
    {
      enabled: !!id,
    }
  );
  const backdrop = useBackdropPerson(person);
  const liked = useLikedPerson(false);
    console.log(person);
  return (
    <>
      {backdrop && person && (
        <Backdrop backdrop={""} poster={backdrop} title={person.name} />
      )}
      {person && (
        <>
          <div className="genres">
            <div className="genreItems">
              <div className="genreSymbol">{person.known_for_department}</div>
            </div>
          </div>
            <LikePerson name={person.name}/>
            <Description overview={person.biography} />
            {person.homepage && (
            <VisitHomepage link={person.homepage} />
          )}
        </>
      )}
    </>
  );
};
