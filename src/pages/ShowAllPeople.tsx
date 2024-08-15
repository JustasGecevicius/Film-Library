import { useState } from "react";
import { useParams } from 'react-router-dom';
import { PosterDisplayAllPopularPeople } from '../features/displayAllPostersSection/components/PosterDisplayAllPopularPeople';
import { PosterDisplayAllFriendLikedPeople } from '../features/displayAllPostersSection/components/PosterDisplayAllFriendLikedPeople';
import { PosterDisplayAllCast } from '../features/displayAllPostersSection/components/PosterDisplayAllCast';
import { SearchAreaPeople } from '../features/searchArea/components/searchPeople/SearchAreaPeople';
import { useSearchAreaImages } from '../features/searchArea/hooks';
import { SECTION_NAMES } from '../features/displayPostersSection/constants/sections';
import { SearchArea } from '../features/searchArea/components/SearchArea';

type Params = {
  section: 'Popular' | 'FriendLiked' | 'Cast';
};

// export const ShowAllPeople = () => {
//   const sectionNames = {
//     Popular: 'Popular People',
//     FriendLiked: 'Friend Suggestions',
//     Cast: 'Cast',
//   };

//   const [pageNumber, setPageNumber] = useState(1);

//   const { section } = useParams<keyof Params>() as Params;

//   return (
//     <div className='min-h-screen dark:bg-black'>
//       <SearchAreaPeople />
//       <div className='flex-col gap-4 p-8'>
//         <h2 className='text-2xl font-bold'>{sectionNames[section]}</h2>
//         {section === 'Popular' && (
//           <PosterDisplayAllPopularPeople page={pageNumber} />
//         )}
//         {section === 'FriendLiked' && (
//           <PosterDisplayAllFriendLikedPeople page={pageNumber} />
//         )}
//         {/* {section === 'Cast' && <PosterDisplayAllCast />} */}
//         <button
//           className='moreMovies'
//           onClick={() => {
//             setPageNumber((prev) => prev + 1);
//           }}
//         >
//           More
//         </button>
//       </div>
//     </div>
//   );
// };

type PeopleRouterProps = {
  type: string;
};

const DisplayAllPeopleSwitch = (
  props: PeopleRouterProps & { pageNumber: number }
) => {
  const { type } = props;

  if (!type) return null;

  switch (type) {
    case 'popular':
      return <PosterDisplayAllPopularPeople />;
    case 'cast':
      return <PosterDisplayAllCast />;
    // case 'friends':
    //   return <PosterDisplayAllFriendLiked type={element} />;
    default:
      return null;
  }
};

export default function ShowAllPeople() {
  const [pageNumber, setPageNumber] = useState(1);
  const links = useSearchAreaImages();
  const { type = '' } = useParams<{ [key: string]: string }>();

  if (!type) return null;

  const getSectionName = () => {
    if (!Object.keys(SECTION_NAMES).includes(type)) return '';
    else return SECTION_NAMES[type as keyof typeof SECTION_NAMES];
  };

  const getTypeName = () => {
    return '';
    // if (!Object.keys(TYPE_NAMES).includes(element)) return '';
    // else return TYPE_NAMES[element as keyof typeof TYPE_NAMES];
  };

  return (
    <div className='min-h-screen dark:bg-black'>
      <SearchArea links={links} type={'movieSeries'} />
      <div className='flex-col gap-4 p-8'>
        <h2 className='text-2xl font-bold'>{`${getSectionName()} ${getTypeName()}`}</h2>
        <DisplayAllPeopleSwitch type={type} pageNumber={pageNumber} />
        <button
          className='moreMovies'
          onClick={() => {
            setPageNumber((prev) => prev + 1);
          }}
        >
          More
        </button>
      </div>
    </div>
  );
};
