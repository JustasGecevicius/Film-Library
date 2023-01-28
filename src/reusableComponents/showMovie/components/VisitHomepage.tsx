import React from "react";

interface Props {
    link: string;
}

export const VisitHomepage: React.FC<Props> = ({ link }) => {
    return (
        <div className="visitHomepage">
            <div className="visitHomepageWidth">
                <a href={link} target="_b"className="visitHomepageLink">
                    Visit the movie Homepage by clicking here!
                </a>
            </div>
        </div>
    );
};
