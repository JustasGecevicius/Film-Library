// Types
import { MovieBackdropType } from '../../movies/types';
// Styles
import '../../showPerson/css/backdropPerson.css';

export const BackdropPerson = ({ backdrop, poster, title }: MovieBackdropType) => {
  return (
    <div className="backdropPerson" style={{ backgroundImage: `url(${backdrop})` }}>
      <div className="widthPerson">
        <div className="posterWrapperPerson">
          <div
            className="posterPerson"
            style={{ backgroundImage: `url(${poster})` }}
          ></div>
          <h2 className="posterNamePerson">{title}</h2>
        </div>
      </div>
    </div>
  );
};
