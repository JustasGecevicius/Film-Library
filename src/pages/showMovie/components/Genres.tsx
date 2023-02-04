import { MovieDataGenresType } from "features/movies/types";

export const Genres = ({ genres }: MovieDataGenresType) => {
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
