import { Link } from "react-router-dom";

interface Props {
  imageLink: string;
  name: string;
  releaseDate?: string;
  movieId:string;
}

export const ImagePoster = ({ imageLink, name, releaseDate, movieId }: Props) => {

  return (
    <Link to={movieId}>
      <div className="imagePoster" data-id = {movieId} >
        <img src={imageLink} alt="posterImage" className="posterImage" />
        <div className="movieText">
          <p className="title">{name}</p>
          {releaseDate ? (<span className="date">{releaseDate}</span>) : (null)}
        </div>
      </div>
    </Link>
  );
};
