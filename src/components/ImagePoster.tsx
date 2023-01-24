interface Props {
  imageLink: string;
  name: string;
  releaseDate?: string;
  key: number;
}

export const ImagePoster = ({ imageLink, name, releaseDate }: Props) => {
  return (
    <div className="imagePoster">
      <img src={imageLink} alt="posterImage" className="posterImage" />
      <div className="movieText">
        <p className="title">{name}</p>
        <span className="date">{releaseDate}</span>
      </div>
    </div>
  );
};
