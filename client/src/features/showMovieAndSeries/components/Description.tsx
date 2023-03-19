// Types
import { DescriptionType } from "features/movies/types";

export const Description = ({ overview } : DescriptionType) => {
    return (
        <div className="overview">
            <div className="overviewWidth">
                <p className="overview">{overview}</p>
            </div>
        </div>
    );
};
