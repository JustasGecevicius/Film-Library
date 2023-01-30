import { SearchArea } from "reusableComponents/SearchArea";
import React, { useContext } from "react";
// import { FriendBasedSuggestions } from "sections/friends/FriendBasedSuggestions";
//import { PopularWithFriends } from "sections/movies/PopularWithFriends";
import "../../css/popularMovies.css";
import { UserContext } from "features/services/userContext";

interface Props {}

export const Friends: React.FC<Props> = () => {
    const { signInInfo, setSignInInfo } = useContext<any>(UserContext);

    return <></>;
};
