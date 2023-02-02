import { Link } from "react-router-dom";

interface Props {
  imageLink: string;
  name: string;
  releaseDate?: string;
  id?:number;
}

export const ImagePoster = ({ imageLink, name, releaseDate, id }: Props) => {

  return (id ? <Link to={`${id}`}>
    <div className="imagePoster" data-id = {`${id}`} >
      <img src={imageLink} alt="posterImage" className="posterImage" />
      <div className="movieText">
        <p className="title">{name}</p>
        {releaseDate ? (<span className="date">{releaseDate}</span>) : (null)}
      </div>
    </div>
  </Link> : null
    
  );
};
