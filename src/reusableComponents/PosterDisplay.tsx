import { ImagePoster } from "./ImagePoster";

interface Props {
    arr: Object[];
    sectionName: string;
}

export const PosterDisplay = ({ arr, sectionName }: Props) => {
    return (
        <div className="popularMoviesSection">
            <h2 className="sectionName">{sectionName}</h2>
            <div className="movieHolder">
                {arr.map((elem : any, index) => {
                            return (
                                <ImagePoster
                                    key={index}
                                    imageLink={elem["imageURL"]}
                                    name={
                                        elem["name"]
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
