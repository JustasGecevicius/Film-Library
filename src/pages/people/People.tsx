import { SearchArea } from "reusableComponents/SearchArea";
import React, { useEffect, useState } from "react";
import { getPopularPeople } from "../../features/people/api";
import { getConfig } from "features/config/api";
import { PosterDisplay } from "reusableComponents/PosterDisplay";
import "../../css/popularMovies.css";
import { filterPeopleInformation } from "features/people/functions";

// import { PopularPeopleFriends } from "sections/people/PopularPeopleFriends";
interface Props {}

export const People: React.FC<Props> = () => {
    const [popularPeople, setPopularPeople] = useState<any>();

    useEffect(() => {
        const fetch = async () => {
            const { data: configuration } = await getConfig();
            const { data: popPeople } = await getPopularPeople();
            const peopleData = filterPeopleInformation(
                configuration,
                popPeople
            );
            setPopularPeople(peopleData);
        };
        fetch();
    }, []);

    return (
        <>
            {popularPeople ? (
                <PosterDisplay
                    arr={popularPeople}
                    sectionName="Popular People"
                ></PosterDisplay>
            ) : null}
        </>
    );
};
