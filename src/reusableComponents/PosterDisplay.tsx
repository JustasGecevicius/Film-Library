import { ImagePoster } from "./ImagePoster";
import { MoviePosterDisplayType, PeoplePosterDisplayType } from "features/movies/types";

export const PosterDisplay = ({ arr, sectionName }: MoviePosterDisplayType | PeoplePosterDisplayType) => {
    return (
        <div className="popularMoviesSection">
            <h2 className="sectionName">{sectionName}</h2>
            <div className="movieHolder">
                {arr.map((elem, index) => {
                            return (
                                <ImagePoster
                                    key={index}
                                    imageLink={elem["imageURL"]}
                                    name={
                                        elem["title"]
                                    }
                                    releaseDate={
                                        elem["releaseDate"]
                                    }
                                    movieId={elem["movieId"]}
                                ></ImagePoster>
                            );
                        })}
            </div>
        </div>
    );
};
