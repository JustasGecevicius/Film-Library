import { usePeopleLikedByFriends} from "features/people/hooks";
import { PeoplePoster } from "features/poster/components/PeoplePoster";



export const PosterDisplayAllFriendLikedPeople = () => {
  const results = usePeopleLikedByFriends();

  return <>{results && (
    <div className="movieHolderAll">
      {results.map((elem, index) => {
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
  )}</>
};