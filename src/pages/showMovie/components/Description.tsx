interface Props {
    overview: string;
}

export const Description = ({ overview } : Props) => {
    return (
        <div className="overview">
            <div className="overviewWidth">
                <p className="overview">{overview}</p>
            </div>
        </div>
    );
};
