import { PersonObject } from '../../displayPostersSection/types';
import { usePeopleLikedByFriends } from '../../people/hooks';
import { PeoplePoster } from '../../poster/components/PeoplePoster';
import { useEffect, useState } from 'react';

interface Props {
  page: number;
}

export const PosterDisplayAllFriendLikedPeople = ({ page }: Props) => {
  const results = usePeopleLikedByFriends();
  const [combinedResults, setCombinedResults] = useState<PersonObject[]>([]);
  const [multiplier, setMultiplier] = useState(0);

  useEffect(() => {
    page !== 1 && setMultiplier((prevCount) => prevCount + 20);
  }, [page]);

  useEffect(() => {
    const slice = results.slice(0 + multiplier, 19 + multiplier);
    if (slice.length === 0) return;

    setCombinedResults((prev) => {
      return multiplier !== 0 ? [...prev, ...slice] : [...slice];
    });
  }, [multiplier]);

  return (
    <>
      {results && (
        <div className='movieHolderAll'>
          {combinedResults.map((elem, index) => {
            return (
              <PeoplePoster
                key={index}
                imageURL={elem.imageURL}
                name={elem.name}
                id={elem.id}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
