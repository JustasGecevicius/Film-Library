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

  const userRating = useRef<number>();
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
    <div className='flex-row h-full py-4 gap-x-2'>
      <button
        className='px-2 py-1 border border-black rounded-full'
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
      <div className='border border-black rounded-full'>
        <input
          name='rateInput'
          className='w-[70px] h-full px-2 border-r border-black rounded-l-full dark: text-black'
          type='number'
          max='10'
          min='1'
          onChange={(e) => (userRating.current = +e.target.value)}
          placeholder='Rating'
        />
        <button
          className='h-full px-2 py-1 rounded-r-full dark:border-solid dark:border-white dark:border'
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
      <p className='px-2 py-1 border border-black rounded-full'>{`Your Rating: ${
        rating ? rating : 'none'
      }`}</p>
    </div>
  ) : null;
};
