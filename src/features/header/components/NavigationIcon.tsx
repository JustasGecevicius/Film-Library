import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFilm, faCamera, faUsers, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavigationIconType } from "../types";





export const NavigationIcon = ({ iconName, link, sectionName }: NavigationIconType) => {

  const icons = {
    film : faFilm,
    camera : faCamera,
    users : faUsers,
    user : faUser
  }

  return (
    <li className="navigationButton">
      <Link to={`/Film-Library/${link}`} className="navigationLink">
        <FontAwesomeIcon icon={icons[iconName]} className="navigationImage" />
        {sectionName}
      </Link>
    </li>
  );
};
