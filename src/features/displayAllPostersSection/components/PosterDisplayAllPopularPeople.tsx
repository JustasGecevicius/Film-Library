import { useState } from 'react';
import { usePopularPeople } from '../../people/hooks';
import { PeoplePoster } from '../../poster/components/PeoplePoster';
import { useAllElementsVertical } from '../../../hooks';

export const PosterDisplayAllPopularPeople = () => {
  const [divElement, setDivElement] = useState<HTMLDivElement | null>(null);

  const results = useAllElementsVertical(usePopularPeople, divElement);
  return results ? (
    <div
      className='flex-row flex-wrap gap-4'
      ref={(elem) => setDivElement(elem)}
    >
      {results?.map((elem, index) => (
        <PeoplePoster
          key={index}
          imageURL={elem.imageURL}
          name={elem.name}
          id={elem.id}
        />
      ))}
    </div>
  ) : null;
};
