import { SearchArea } from "components/SearchArea";
import React from "react";
import { ActiveFriends } from "sections/friends/ActiveFriends";
import { FriendBasedSuggestions } from "sections/friends/FriendBasedSuggestions";
import { PopularWithFriends } from "sections/movies/PopularWithFriends";
import { PopularPeopleFriends } from "sections/people/PopularPeopleFriends";

interface Props {}

export const Friends: React.FC<Props> = () => {
    return <>
    {/* <SearchArea></SearchArea> */}
    <FriendBasedSuggestions></FriendBasedSuggestions>
    <ActiveFriends></ActiveFriends>
    <PopularWithFriends></PopularWithFriends>
    <PopularPeopleFriends></PopularPeopleFriends>
    </>;
};
