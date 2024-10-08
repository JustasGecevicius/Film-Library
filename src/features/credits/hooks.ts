import { useFirebaseContext } from '../context/FirebaseContext';
import { getCreditsOfMovieSeries } from '../credits/api';
import { checkLikeAndRate } from '../likeAndRate/functions';
import { MovieObject } from '../movies/types';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { filterPersonCreditsCastInformation } from './functions';
import { useLikedAndRated } from '../utils/firestore';
import { useConfig } from '../../hooks';
import { ALL_ELEMENTS_NO_PERSON, type ElementNoPerson } from '../../App';

export const useMovieSeriesCredits = (type: string, id: string, page = 1) => {
  const [credits, setCredits] = useState<MovieObject[]>();
  const { userInfo, db } = useFirebaseContext();
  const { config } = useConfig();
  const { data } = useQuery(
    ['credits', id, type],
    () => {
      //@ts-ignore
      if (!ALL_ELEMENTS_NO_PERSON.includes(type))
        return new Promise((res) => res(null));
      return getCreditsOfMovieSeries(id, type as ElementNoPerson);
    },
    {
      enabled: !!id && !!type,
    }
  );

  const { liked, rated } = useLikedAndRated(db, type, userInfo?.uid);

  // Filtering information and Checking for Like and Rate
  useEffect(() => {
    if (!config || !data) return;
    const creditsData = filterPersonCreditsCastInformation(
      config,
      data.cast.slice(0, 19 * page)
    );
    if (!liked || !rated) {
      setCredits(creditsData);
      return;
    }

    const likeAndRateCheckedData = checkLikeAndRate(
      creditsData,
      Object.keys(liked),
      rated
    );
    setCredits(likeAndRateCheckedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, data, liked, rated, page]);
  return credits;
};
