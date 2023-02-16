// Hooks
import { useFirebaseContext } from "features/context/FirebaseContext";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
// API
import { getMovieDataSearch } from "features/movies/api";
// Firestore
import { collection, getDocs } from "firebase/firestore";
// Functions
import { removeFriendFromDOM, searchUsers, useDebounce } from "./functions";
// Types
import { Friend } from "./types";

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
    setAnswers(prev => removeFriendFromDOM(prev, indexToRemove));
    setIndexToRemove(-1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexToRemove]);

  return answers;
};

// A function that searches for users using the TMDB API
export const useSearchMoviesSeries = (search : string) => {
  const debouncedSearch = useDebounce(search, 700);
  const { data: searchResults } = useQuery(
    ["results", debouncedSearch],
    () => {
      return getMovieDataSearch(debouncedSearch);
    },
    {
      enabled: !!debouncedSearch,
    }
  );
  return searchResults?.results
}
