import { useMovieSeriesCredits } from '../features/credits/hooks';
import { PosterDisplayCredits } from '../features/displayPostersSection/components/PosterDisplayCredits';
import { LikePerson } from '../features/likeAndRate/components/LikePerson';
import { getPerson } from '../features/people/api';
import { Description } from '../features/showMovieAndSeries/components/Description';
import { VisitHomepage } from '../features/showMovieAndSeries/components/VisitHomepage';
import { useBackdropPerson } from '../features/showMovieAndSeries/hooks';
import { BackdropPerson } from '../features/showPerson/components/BackdropPerson';
import { PersonalFacts } from '../features/showPerson/components/PersonalFacts';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Departments } from '../features/showPerson/components/Departments';

export default function ShowPerson() {
  const { id } = useParams();
  const { data: person } = useQuery(
    ['person', id],
    () => {
      return getPerson(id);
    },
    {
      enabled: !!id,
    }
  );

  const movieCredits = useMovieSeriesCredits('movie', id);
  const seriesCredits = useMovieSeriesCredits('series', id);

  const backdrop = useBackdropPerson(person);
  return (
    <div className='px-6 dark:bg-black'>
      {!!backdrop && !!person && (
        <BackdropPerson backdrop={''} poster={backdrop} title={person.name} />
      )}
      <div className='flex-col max-w-4xl pt-4 mx-auto gap-y-4'>
        {!!person && (
          <>
            <Departments departments={[person.known_for_department]} />
            <LikePerson name={person.name} />
            <Description overview={person.biography} />
            {person.homepage && <VisitHomepage link={person.homepage} />}
            <PersonalFacts
              birthday={person.birthday}
              deathday={person.deathday}
              also_known_as={person.also_known_as.slice(0, 3)}
              place_of_birth={person.place_of_birth}
            />
          </>
        )}
        {!!movieCredits && (
          <PosterDisplayCredits
            id={id}
            arr={movieCredits}
            sectionName='Movie Credits'
            type='movie'
          />
        )}
        {!!seriesCredits && (
          <PosterDisplayCredits
            id={id}
            arr={seriesCredits}
            sectionName='Series Credits'
            type='series'
          />
        )}
      </div>
    </div>
  );
};
