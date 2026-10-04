import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faFilm,
  faCamera,
  faUsers,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { NavigationIconType } from '../types';

export const NavigationIcon = ({
  iconName,
  link,
  sectionName,
}: NavigationIconType) => {
  const icons = {
    film: faFilm,
    camera: faCamera,
    users: faUsers,
    user: faUser,
  };

  return (
    <li className='min-w-0'>
      <Link
        to={`/Film-Library/${link}`}
        className='flex flex-col items-center justify-center min-h-11 px-2 py-1 text-white transition rounded-xl font-noto gap-y-1 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:min-w-16'
      >
        <FontAwesomeIcon icon={icons[iconName]} />
        <span className='truncate'>{sectionName}</span>
      </Link>
    </li>
  );
};
