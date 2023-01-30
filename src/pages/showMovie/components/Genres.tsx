interface Props {
    genres: Object[];
}

export const Genres = ({ genres }: Props) => {
    return (
        <div className="genres">
            <div className="genreItems">
                {genres.map((elem: any, index) => {
                    return <div key={index} className="genreSymbol">{elem["name"]}</div>;
                })}
            </div>
        </div>
    );
};
