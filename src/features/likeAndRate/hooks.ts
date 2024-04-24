import { UserInfo } from '../context/types';
import { useContextAndParams } from '../utils/ContextAndParams';
import { Firestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { checkIfLiked, checkRating } from './functions';
import { LikedRatedData } from './types';
import { fetchFirestore, getMovieOrSeriesCollectionName } from '../utils/firestore';

export const useLiked = (
  likeButtonClicked: boolean,
  type: 'movie' | 'series',
  id: string | undefined,
  userInfo: UserInfo | undefined,
  db: Firestore
) => {
  // Liked state for this specific movie/series
  const [liked, setLiked] = useState<boolean | undefined>(undefined);
  // Gets the liked movies/series for this user
  const { data: likedData } = useQuery<LikedRatedData | undefined>(
    ['likedData', userInfo, db],
    () =>
      fetchFirestore(db, getMovieOrSeriesCollectionName(type, 'liked'), userInfo?.uid),
    { enabled: !!userInfo && !!db }
  );
  // Setting liked to false or true based on if this series/movies was found in the list for this specific user
  useEffect(() => {
    if (!likedData || !id) return;
    setLiked(checkIfLiked(Object.keys(likedData), id));
  }, [likedData, id]);
  // Setting liked based on the like button click
  useEffect(() => {
    if (liked === undefined) return;
    setLiked(!liked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likeButtonClicked]);

  return liked;
};

export const useRating = (
  rateButtonClick: boolean | undefined,
  rateInput: number | undefined,
  type: 'movie' | 'series',
  id: string | undefined,
  userInfo: UserInfo | undefined,
  db: Firestore
) => {
  const [rating, setRating] = useState<number | undefined>(undefined);

  const { data: ratedData } = useQuery<LikedRatedData | undefined>(
    ['ratedData', db, userInfo?.uid],
    () => {
      return fetchFirestore(
        db,
        getMovieOrSeriesCollectionName(type, 'rated'),
        userInfo?.uid
      );
    },
    {
      enabled: !!userInfo && !!db,
    }
  );
  useEffect(() => {
    if (!ratedData || !id) return;
    setRating(checkRating(ratedData, id));
  }, [ratedData, id]);
  useEffect(() => {
    if (!rateInput) return;
    setRating(rateInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rateButtonClick]);
  return rating;
};

export const useLikedPerson = (likeButtonClicked: boolean) => {
  // Getting Context and id from the Router
  const { id, userInfo, db } = useContextAndParams();
  // Liked state for this specific movie/series
  const [liked, setLiked] = useState<boolean | undefined>(undefined);
  // Gets the liked movies/series for this user
  const { data: likedData } = useQuery<LikedRatedData | undefined>(
    ['likedDataPeople', userInfo, db],
    () => fetchFirestore(db, 'likedPeople', userInfo?.uid),
    { enabled: !!userInfo && !!db }
  );
  // Setting liked to false or true based on if this series/movies was found in the list for this specific user
  useEffect(() => {
    if (!likedData || !id) return;
    setLiked(checkIfLiked(Object.keys(likedData), id));
  }, [likedData, id]);
  // Setting liked based on the like button click
  useEffect(() => {
    if (liked === undefined) return;
    setLiked(!liked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likeButtonClicked]);
  return liked;
};
