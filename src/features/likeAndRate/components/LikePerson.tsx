import { useContextAndParams } from '../../utils/ContextAndParams';
import { useState } from 'react';
import { likePerson } from '../functions';
import { useLikedPerson } from '../hooks';

type PropsType = {
  name: string;
};

export const LikePerson = ({ name }: PropsType) => {
  // Route Parameters and Context
  const { id, db, userInfo } = useContextAndParams();
  // Like functionality
  const [likeButtonClicked, setlikeButtonClicked] = useState(false);
  const liked = useLikedPerson(likeButtonClicked);

  return (
    <>
      {!!userInfo && !!id && (
        <div>
          <button
            className='border-[1px] dark:hover:bg-white dark:hover:text-black px-2 rounded-xl'
            onClick={() => {
              likePerson(db, id, userInfo.uid, name, liked);
              setlikeButtonClicked(!likeButtonClicked);
            }}
          >
            {liked ? 'Unlike' : 'Like'}
          </button>
        </div>
      )}
    </>
  );
};
