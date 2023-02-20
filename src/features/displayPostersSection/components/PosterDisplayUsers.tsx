import { Link } from "react-router-dom";
import { PosterDisplayUsersType } from "../types";
import { UserPoster } from "./UserPoster";

export const PosterDisplayFriends = ({
  users,
  sectionName,
}: PosterDisplayUsersType) => {
  return (
    <div className="section">
      <div className="sectionInfo">
        <h2 className="sectionName">{sectionName}</h2>
        <Link to={`/Film-Library/allFriends`}>
            <button className="viewAllButton">View All</button>
        </Link>
      </div>
      <div className="posterHolder">
        {users.map((user, index) => {
          return (
            <UserPoster
              key={index}
              imageURL={user.profileURL}
              name={user.name}
              id={user.uid}
            ></UserPoster>
          );
        })}
      </div>
    </div>
  );
};
