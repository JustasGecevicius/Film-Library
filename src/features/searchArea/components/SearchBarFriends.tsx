import { useFirebaseContext } from "features/context/FirebaseContext";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import "../../../css/searchBar.css";
import { searchUsers, useDebounce } from "../functions";
import { UserFound } from "./UserFound";

export const SearchBarFriends = () => {
  // const [icon, setIcon] = useState<string>();
  const storage = getStorage();
  const iconRef = ref(storage, "searchBar/searchIcon.png");
  const { data: icon } = useQuery(["icon", iconRef], () =>
    getDownloadURL(iconRef)
  );
  const [search, setSearch] = useState("");
  const { db } = useFirebaseContext();
  const debouncedSearch = useDebounce(search, 1000);
  const [filteredAnswers, setFilteredAnswers] =
    useState<{ friendName: string; friendId: DocumentData; URL: string }[]>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    const query = await getDocs(collection(db, "userNames"));
    const answers = searchUsers(query, search);
    if (answers) setFilteredAnswers(answers);
  };

  return icon ? (
    <div className="search">
      <div className="searchField">
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={search}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>
          <img alt="exploreIcon" src={icon} className="navigationImage" />
        </button>
      </div>
      <div className="searchResultsDisplay">
        {filteredAnswers
          ? filteredAnswers.map((elem, index) => {
              return (
                <UserFound
                  key={index}
                  friendIndex={index}
                  friendId={elem.friendId}
                  friendName={elem.friendName}
                  URL={elem.URL}
                  setFilteredAnswers={setFilteredAnswers}
                  filteredAnswers={filteredAnswers}
                ></UserFound>
              );
            })
          : null}
      </div>
    </div>
  ) : null;
};
