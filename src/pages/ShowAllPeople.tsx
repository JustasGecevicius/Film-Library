import { useState } from "react";
import { useParams } from 'react-router-dom';
import { PosterDisplayAllPopularPeople } from '../features/displayAllPostersSection/components/PosterDisplayAllPopularPeople';
import { PosterDisplayAllFriendLikedPeople } from '../features/displayAllPostersSection/components/PosterDisplayAllFriendLikedPeople';
import { PosterDisplayAllCast } from '../features/displayAllPostersSection/components/PosterDisplayAllCast';
import { SearchAreaPeople } from '../features/searchArea/components/searchPeople/SearchAreaPeople';

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
