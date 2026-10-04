import { useRef, useState } from 'react';
import { useLiked, useRating } from '../../likeAndRate/hooks';
import { like, rate } from '../functions';
import { LikeAndRateType } from '../../movies/types';
import { useContextAndParams } from '../../utils/ContextAndParams';
import { useQueryClient } from 'react-query';
import { removeFromWatchLater } from '../../watchLater/functions';

export const LikeAndRate = ({ title, type }: LikeAndRateType) => {
  const { id, db, userInfo } = useContextAndParams();
  const queryClient = useQueryClient();
  const [likeButtonClicked, setlikeButtonClicked] = useState(false);
  const liked = useLiked(likeButtonClicked, type, id, userInfo, db);

  const userRating = useRef<number | undefined>(undefined);
  const [rateButtonClick, setRateButtonClick] = useState(false);
  const rating = useRating(
    rateButtonClick,
    userRating.current,
    type,
    id,
    userInfo,
    db
  );

  return userInfo && id ? (
    <div className='flex flex-wrap items-center gap-3'>
      <button
        className='h-11 px-5 text-sm font-bold text-black transition bg-white rounded-full hover:bg-white/80'
        onClick={async () => {
          await like(db, id, userInfo.uid, title, liked, type);
          queryClient.invalidateQueries(['liked', type]);
          if (!liked) {
            await removeFromWatchLater(db, id, userInfo.uid, type);
            queryClient.invalidateQueries(['watchLater', type, userInfo.uid]);
            queryClient.invalidateQueries(['userWished', type, userInfo.uid]);
          }
          setlikeButtonClicked(!likeButtonClicked);
        }}
      >
        {liked ? 'Unlike' : 'Like'}
      </button>
      <div className='flex h-11 overflow-hidden border border-white/20 rounded-full bg-white/5'>
        <input
          name='rateInput'
          className='w-20 h-full px-3 text-sm text-white bg-transparent border-r outline-none border-white/20 placeholder:text-white/50'
          type='number'
          max='10'
          min='1'
          onChange={(e) => (userRating.current = +e.target.value)}
          placeholder='Rating'
        />
        <button
          className='h-full px-4 text-sm font-bold text-white transition hover:bg-white/10'
          onClick={async () => {
            await rate(db, id, userInfo.uid, userRating.current, type);
            queryClient.invalidateQueries(['rated', type]);
            if (userRating.current) {
              await removeFromWatchLater(db, id, userInfo.uid, type);
              queryClient.invalidateQueries(['watchLater', type, userInfo.uid]);
              queryClient.invalidateQueries(['userWished', type, userInfo.uid]);
            }
            setRateButtonClick(!rateButtonClick);
          }}
        >
          Rate
        </button>
      </div>
      <p className='flex items-center h-11 px-4 text-sm border rounded-full border-white/20 bg-white/5'>{`Your rating: ${
        rating ? rating : 'none'
      }`}</p>
    </div>
  ) : null;
};
