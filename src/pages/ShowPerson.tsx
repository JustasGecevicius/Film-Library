import { useMovieSeriesCredits } from "features/credits/hooks";
import { PosterDisplayCredits } from "features/displayPostersSection/components/PosterDisplayCredits";
import { PosterDisplayMoviesSeries } from "features/displayPostersSection/components/PosterDisplayMoviesSeries";
import { LikePerson } from "features/likeAndRate/components/LikePerson";
import { getPerson } from "features/people/api";
import { Backdrop } from "features/showMovieAndSeries/components/Backdrop";
import { Description } from "features/showMovieAndSeries/components/Description";
import { VisitHomepage } from "features/showMovieAndSeries/components/VisitHomepage";
import { useBackdropPerson } from "features/showMovieAndSeries/hooks";
import { BackdropPerson } from "features/showPerson/components/BackdropPerson";
import { PersonalFacts } from "features/showPerson/components/PersonalFacts";
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

  const movieCredits = useMovieSeriesCredits("movie", id);
  const seriesCredits = useMovieSeriesCredits("series", id);

  const backdrop = useBackdropPerson(person);
  return (
    <>
      {backdrop && person && (
        <BackdropPerson backdrop={""} poster={backdrop} title={person.name} />
      )}
      {person && (
        <>
          <div className="genres">
            <div className="genreItems">
              <div className="genreSymbol">{person.known_for_department}</div>
            </div>
          </div>
          <LikePerson name={person.name} />
          <Description overview={person.biography} />
          {person.homepage && <VisitHomepage link={person.homepage} />}
          <PersonalFacts
            birthday={person.birthday}
            deathday={person.deathday}
            also_known_as={person.also_known_as}
            place_of_birth={person.place_of_birth}
          />
        </>
      )}
      <div className="recommendationDiv">
        {movieCredits && (
          <PosterDisplayCredits id={id} arr={movieCredits} sectionName="Movie Credits" type="movie" />
        )}
        {seriesCredits && (
          <PosterDisplayCredits id={id} arr={seriesCredits} sectionName="Series Credits" type="series" />
        )}
      </div>
    </>
  );
};
