// Hooks
import { useFirebaseContext } from "features/context/FirebaseContext";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
// API
import { getMovieDataSearch } from "features/movies/api";
// Firestore
import { collection, getDocs } from "firebase/firestore";
// Functions
import { removeFriendFromDOM, searchUsers } from "./functions";
// Types
import { Friend } from "./types";
import { getSeriesDataSearch } from "features/series/api";
import { getPeopleDataSearch } from "features/people/api";
import { getConfig } from "features/config/api";
import { getPopular } from "features/popular/api";

// A function to close to search results window if the user clicks outside it
export const useFocus = () => {
  const [focus, setFocus] = useState(true);
  useEffect(() => {
    const search = document.getElementById("search");

    const onClickEvent = (event: MouseEvent) => {
      if (search) {
        const isClickInsideSearchElement = search.contains(
          event.target as Node
        );
        setFocus(true);
        if (!isClickInsideSearchElement) {
          setFocus(false);
        }
      }
    };
    document.addEventListener("click", onClickEvent, false);

    return () => {
      document.removeEventListener("click", onClickEvent);
    };
  }, []);

  return focus;
};

export const useSearchFriends = (
  seachString: string,
  time: number,
  indexToRemove: number,
  setIndexToRemove: React.Dispatch<React.SetStateAction<number>>
) => {
  // Context for Firebase
  const { db } = useFirebaseContext();
  // State for the answers fetched from Firebase
  const [answers, setAnswers] = useState<Friend[]>();
  // Debouce Hook
  const debouncedSearch = useDebounce(seachString, time);
  useEffect(() => {
    if (seachString === "") return;
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);
  // Function to set search results
  const handleSearch = async () => {
    const query = await getDocs(collection(db, "userNames"));
    const friends = searchUsers(query, seachString);
    friends ? setAnswers(friends) : setAnswers(undefined);
  };
  // Hook to handle removing users from the list
  useEffect(() => {
    if (indexToRemove === -1) return;
    setAnswers((prev) => removeFriendFromDOM(prev, indexToRemove));
    setIndexToRemove(-1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexToRemove]);

  return answers;
};

// A hook that returns the found Movies based on a query string
export const useSearchMovies = (query: string, time: number) => {
  const debouncedSearch = useDebounce(query, time);
  const { data: searchResultsMovies } = useQuery(
    ["resultsMovie", debouncedSearch],
    () => {
      return getMovieDataSearch(debouncedSearch);
    }
  );
  return searchResultsMovies
}
// A hook that returns the found Series based on a query string
export const useSearchSeries = (query: string, time: number) => {
  const debouncedSearch = useDebounce(query, time);
  const { data: searchResultsSeries } = useQuery(
    ["resultsSeries", debouncedSearch],
    () => {
      return getSeriesDataSearch(debouncedSearch);
    }
  );
  return searchResultsSeries
}

export const useIndex = (links : string[] | undefined, time : number) => {
  const [imageIndex, setImageIndex] = useState(0);
    const calledOnce = useRef(false);
  useEffect(() => {
    if (calledOnce.current) {
      return;
    } else {
      if (links) {
        setInterval(() => {
          setImageIndex((prev) => (prev + 1) % links.length);
        }, time);
        calledOnce.current = true;
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [links]);
  return imageIndex;
}

export const useSearchPeople = (query: string, time: number) => {
  const debouncedSearch = useDebounce(query, time);
  const { data: searchResultsSeries } = useQuery(
    ["resultsPeople", debouncedSearch],
    () => {
      return getPeopleDataSearch(debouncedSearch);
    }
  );
  return searchResultsSeries
}

export const useSearchAreaImages = () => {
  // fetching config and movie data
  const [imageLinks, setImageLinks] = useState<string[]>([]);
  const {data : config} = useQuery(["config"], getConfig)
  const {data : trendingMovies} = useQuery(["trendingMovies"], () => getPopular("movie"));
  // creating the base url and
  useEffect (() => {
    if(!config || !trendingMovies) return;
    const baseUrl =
    config.images.base_url + config.images.backdrop_sizes[3];
    trendingMovies.forEach((movie) => {
      if (movie.backdrop_path)
      setImageLinks((prev) => {
        const arr = [...prev];
        arr.push(`${baseUrl}${movie.backdrop_path}`)
        return arr
      })
    });
  },[config, trendingMovies]);

  return imageLinks;
};

// A function used to stop the website from fetching immediately
// when the user changes the imput
export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
