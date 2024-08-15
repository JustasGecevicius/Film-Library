import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFilm, faCamera, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavigationIconType } from '../types';

export const NavigationIcon = ({ iconName, link, sectionName }: NavigationIconType) => {
  const icons = {
    film: faFilm,
    camera: faCamera,
    users: faUsers,
    user: faUser,
  };

  return (
    <li>
      <Link
        to={`/film_library/${link}`}
        className='flex flex-col font-noto dark:text-white gap-y-1'
      >
        <FontAwesomeIcon icon={icons[iconName]} />
        {sectionName}
      </Link>
    </li>
  );
};
