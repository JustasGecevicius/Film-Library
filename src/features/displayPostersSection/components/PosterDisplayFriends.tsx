import { PosterDisplayUsersType } from '../types';
import { UserPoster } from '../../poster/components/UserPoster';
import { DisplayPosterHeader } from './helperComponents';

export const PosterDisplayFriends = ({
  users,
  sectionName,
}: PosterDisplayUsersType) => {
  return (
    <div className='flex-col gap-y-4'>
      <DisplayPosterHeader
        link={`/Film-Library/all/people/friends`}
        title={sectionName}
      />
      <div className='flex-row py-4 overflow-x-auto gap-x-4'>
        {users.map((user, index) => (
          <UserPoster
            key={index}
            imageURL={user.profileURL}
            name={user.name}
            id={user.uid}
          />
        ))}
      </div>
    </div>
  );
};
