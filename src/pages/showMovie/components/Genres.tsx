import { MovieDataGenresType } from "features/movies/types";

export const Genres = ({ genres }: MovieDataGenresType) => {
    //console.log(genres);
    return (
        <div className="genres">
            <div className="genreItems">
                {genres.map((elem, index) => {
                    return <div key={index} className="genreSymbol">{elem["name"]}</div>;
                })}
            </div>
        </div>
    );
};
