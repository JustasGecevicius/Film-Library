import { useRef, useState } from 'react';
import { useLiked, useRating } from '../../likeAndRate/hooks';
import { like, rate } from '../functions';
import { LikeAndRateType } from '../../movies/types';
import { useContextAndParams } from '../../utils/ContextAndParams';

export const LikeAndRate = ({ title, type }: LikeAndRateType) => {
  const { id, db, userInfo } = useContextAndParams();
  const [likeButtonClicked, setlikeButtonClicked] = useState(false);
  const liked = useLiked(likeButtonClicked, type, id, userInfo, db);

  const userRating = useRef<number>();
  const [rateButtonClick, setRateButtonClick] = useState(false);
  const rating = useRating(rateButtonClick, userRating.current, type, id, userInfo, db);

  return userInfo && id ? (
    <div className='flex-row h-full py-4 gap-x-2'>
      <button
        className='px-2 py-1 border border-black rounded-full'
        onClick={() => {
          like(db, id, userInfo.uid, title, liked, type);
          setlikeButtonClicked(!likeButtonClicked);
        }}
      >
        {liked ? 'Unlike' : 'Like'}
      </button>
      <div className='border border-black rounded-full'>
        <input
          name='rateInput'
          className='w-[70px] h-full px-2 border-r border-black rounded-l-full'
          type='number'
          max='10'
          min='1'
          onChange={(e) => (userRating.current = +e.target.value)}
          placeholder='Rating'
        />
        <button
          className='h-full px-2 py-1 rounded-r-full'
          onClick={() => {
            rate(db, id, userInfo.uid, userRating.current, type);
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
