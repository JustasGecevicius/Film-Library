import { useFirebaseContext } from "features/context/FirebaseContext";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import "../../../css/searchBar.css";
import { searchUsers, useDebounce } from "../functions";

export const SearchBarFriends = () => {
   // const [icon, setIcon] = useState<string>();
    const storage = getStorage();
    const iconRef = ref(storage, "searchBar/searchIcon.png");
    const {data : icon} = useQuery(["icon", iconRef], () => getDownloadURL(iconRef))
    const [search, setSearch] = useState("");
    const {db} = useFirebaseContext();
    const debouncedSearch = useDebounce(search, 1000);

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const handleSearch = async () => {
        const query = await getDocs(collection(db, "userNames"));
        const filteredAnswers = searchUsers(query, search);
       // console.log(filteredAnswers, "filtered");
    }

    return icon ? (
        <div className="search">
            <input type="text" placeholder="Search" name="search" value={search} onChange={handleChange}/>
            <button onClick={handleSearch}>
                <img
                    alt="exploreIcon"
                    src={icon}
                    className="navigationImage"
                />
            </button>
        </div>
    ) : null;
};
