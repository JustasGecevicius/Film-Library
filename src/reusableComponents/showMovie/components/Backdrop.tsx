import React from "react";

interface Props {
    backdrop: string;
    poster: string;
    title: string;
}

export const Backdrop: React.FC<Props> = ({ backdrop, poster, title }) => {
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
