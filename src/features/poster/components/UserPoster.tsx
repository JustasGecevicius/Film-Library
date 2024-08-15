import { Link } from "react-router-dom";
import {
  UserPosterType,
} from "../../displayPostersSection/types";

export const UserPoster = ({ imageURL, name, id }: UserPosterType) =>
  id ? (
    <Link to={`/Film-Library/user/${id}`} className='flex-col gap-y-2'>
      <div
        className='h-64 bg-center bg-no-repeat bg-cover rounded-xl w-44'
        style={{ backgroundImage: `url(${imageURL})` }}
      />
      <p className='text-center'>{name}</p>
    </Link>
  ) : null;
