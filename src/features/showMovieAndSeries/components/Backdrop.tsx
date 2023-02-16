// Types
import { MovieBackdropType } from "features/movies/types";

export const Backdrop = ({ backdrop, poster, title } : MovieBackdropType) => {
    return (
        <div
            className="backdrop"
            style={{ backgroundImage: `url(${backdrop})` }}
        >
            <div className="width">
                <div className="posterWrapper">
                    <div
                        className="poster"
                        style={{ backgroundImage: `url(${poster})` }}
                    ></div>
                    <div className="posterText">
                        <h2 className="posterName">{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
