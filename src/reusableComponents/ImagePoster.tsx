import { Link } from "react-router-dom";

interface Props {
  imageLink: string;
  name?: string | undefined;
  releaseDate?: string;
  id?:number;
  title?:string | undefined;
}

export const ImagePoster = ({ imageLink, name = undefined, releaseDate, id, title = undefined }: Props) => {

  return (id ? <Link to={`${id}`}>
    <div className="imagePoster" data-id = {`${id}`} >
      <img src={imageLink} alt="posterImage" className="posterImage" />
      <div className="movieText">
        <p className="title">{name || title}</p>
        {releaseDate ? (<span className="date">{releaseDate}</span>) : (null)}
      </div>
    </div>
  </Link> : null
    
  );
};
