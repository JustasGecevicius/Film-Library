import { Link } from "react-router-dom";
import { PosterDisplayUsersType } from "../types";
import { UserPoster } from "../../poster/components/UserPoster";

export const PosterDisplayFriends = ({
  users,
  sectionName,
}: PosterDisplayUsersType) => {
  return (
    <div className='flex-col gap-y-4'>
      <div className='flex-row justify-between'>
        <h2 className='font-bold text-3xl'>{sectionName}</h2>
        <Link to={`/Film-Library/allFriends`}>
          <button className='border p-2 border-black'>View All</button>
        </Link>
      </div>
      <div className='overflow-x-auto flex-row gap-x-4 py-4'>
        {users.map((user, index) => {
          return (
            <UserPoster
              key={index}
              imageURL={user.profileURL}
              name={user.name}
              id={user.uid}></UserPoster>
          );
        })}
      </div>
    </div>
  );
};
