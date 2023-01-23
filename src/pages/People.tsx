import { SearchArea } from "components/SearchArea";
import React from "react";
import { PopularPeople } from "sections/people/PopularPeople";
import { PopularPeopleFriends } from "sections/people/PopularPeopleFriends";
interface Props {}

export const People: React.FC<Props> = () => {
    return <>
    {/* <SearchArea></SearchArea> */}
    <PopularPeople></PopularPeople>
    <PopularPeopleFriends></PopularPeopleFriends>
    </>;
};
