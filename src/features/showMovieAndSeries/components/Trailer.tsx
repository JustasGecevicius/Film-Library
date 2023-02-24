import { useTrailer } from "features/trailer/hooks";


interface Props {
name : string
year : string

}

export const Trailer = ({name, year} : Props) => {

    const trailerLink = useTrailer(name, year)
    return <>{trailerLink && <div className="trailerDiv">
      <iframe title="trailer" src={`${trailerLink}`} className="trailer" allowFullScreen={true} />
    </div>}</>;
}