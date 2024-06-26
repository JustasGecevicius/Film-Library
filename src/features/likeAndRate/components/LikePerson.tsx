import { useContextAndParams } from '../../utils/ContextAndParams';
import { useState } from 'react';
import { likePerson } from '../functions';
import { useLikedPerson } from '../hooks';

interface Props {
  name: string;
}

export const LikePerson = ({ name }: Props) => {
  // Route Parameters and Context
  const { id, db, userInfo } = useContextAndParams();
  // Like functionality
  const [likeButtonClicked, setlikeButtonClicked] = useState(false);
  const liked = useLikedPerson(likeButtonClicked);

  return (
    <>
      {userInfo && id && (
        <div className='flex items-center justify-start gap-x-8 max-w-4xl w-full py-2 mx-auto'>
          <button
            className='border-[1px] dark:hover:bg-white dark:hover:text-black px-2 rounded-xl hover:border-black dark:hover:border-inherit'
            onClick={() => {
              likePerson(db, id, userInfo.uid, name, liked);
              setlikeButtonClicked(!likeButtonClicked);
            }}>
            {liked ? 'Unlike' : 'Like'}
          </button>
        </div>
      )}
    </>
  );
};
