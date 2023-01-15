import React, { useEffect, useState } from "react";

interface Config {
  change_keys: Array<string>;
  images: {
    backdrop_sizes: Array<string>;
    base_url: string;
    logo_sizes: Array<string>;
    poster_sizes: Array<string>;
    profile_sizes: Array<string>;
    secure_base_url: string;
    still_sizes: Array<string>;
  };
}


interface Images {
  page: number;
  results: Array<Object>;
  total_pages: number;
  total_results: number;
}

const App: React.FC = () => {
  const [moviePictures, setMoviePictures] = useState<Images>();
  const [config, setConfig] = useState<Config>();

  useEffect(() => {
    const getConfig = async () => {
      const config = await fetch(
        "https://api.themoviedb.org/3/configuration?api_key=2e1d9e703d345ef35e7a54d9ac882a26"
      );
      const response = await config.json();
      setConfig(response);
    };

    const getTrending = async () => {
      const trending = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=1"
      );
      const response = await trending.json();
      setMoviePictures(response);
    };
    getConfig();
    getTrending();
  }, []);

  useEffect(() => {
    console.log(config, "config");
    console.log(moviePictures, "moviePictures");
  }, [config, moviePictures]);

  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    if(moviePictures !== undefined){
      setInterval(() => {       
        setImageIndex(prev => (
          prev === moviePictures["results"].length - 1 ? 0 : prev + 1
        ));
      }, 2000);
    }    
  },[moviePictures])

  const imageSwapper = () => {
      let image: string = "";
      const backdrop = "backdrop_path" as keyof typeof moviePictures;
      image =
      config && moviePictures
        ? config["images"]["base_url"] +
          config["images"]["backdrop_sizes"][3] +
          moviePictures["results"][imageIndex][backdrop]
        : image;
    return image;    
  };

  return (
    <div className="App">
      {config && moviePictures ? (
        <img alt="headerImage" src={imageSwapper()}></img>
      ) : null}
    </div>
  );
};

export default App;
