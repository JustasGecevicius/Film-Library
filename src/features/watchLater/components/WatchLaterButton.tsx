import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useContextAndParams } from '../../utils/ContextAndParams';
import {
  fetchFirestore,
  getMovieOrSeriesCollectionName,
  useLikedAndRated,
} from '../../utils/firestore';
import { updateWatchLater } from '../functions';
import { useMemo } from 'react';

type WatchLaterButtonProps = {
  title: string;
  type: 'movie' | 'series';
};

export const WatchLaterButton = ({ title, type }: WatchLaterButtonProps) => {
  const { id, db, userInfo } = useContextAndParams();
  const queryClient = useQueryClient();
  const { liked, rated, isLoading } = useLikedAndRated(
    db,
    type,
    userInfo?.uid
  );
  const queryKey = useMemo(
    () => ['watchLater', type, userInfo?.uid],
    [type, userInfo?.uid]
  );
  const { data } = useQuery<Record<string, string> | undefined>(
    queryKey,
    () =>
      fetchFirestore(
        db,
        getMovieOrSeriesCollectionName(type, 'wished'),
        userInfo?.uid
      ),
    { enabled: !!userInfo && !!id }
  );
  const wished =
    !!id && !!data && Object.prototype.hasOwnProperty.call(data, id);
  const alreadyWatched =
    !!id &&
    (Object.prototype.hasOwnProperty.call(liked || {}, id) ||
      Object.prototype.hasOwnProperty.call(rated || {}, id));
  const mutation = useMutation(
    () => updateWatchLater(db, id!, userInfo!.uid, title, wished, type),
    {
      onSuccess: () => queryClient.invalidateQueries(queryKey),
    }
  );

  return userInfo && id && !isLoading && !alreadyWatched ? (
    <button
      className='px-2 py-1 border border-black rounded-full'
      disabled={mutation.isLoading}
      onClick={() => mutation.mutate()}
    >
      {wished ? 'Remove from Watch later' : 'Add to Watch later'}
    </button>
  ) : null;
};
