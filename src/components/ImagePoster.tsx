import React from "react";

interface Props {
    imageLink: string;
    name: string;
    releaseDate?: string;
    key:number;
}

export const ImagePoster: React.FC<Props> = ({
    imageLink,
    name,
    releaseDate,
}) => {
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
