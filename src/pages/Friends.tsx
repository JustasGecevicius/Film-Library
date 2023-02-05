import { SearchArea } from "features/searchArea/components/SearchArea";
import { SearchAreaPeople } from "features/searchArea/components/SearchAreaPeople";
import "../css/popularMovies.css";

interface Props {}

export const Friends: React.FC<Props> = () => {
    return <>
        <SearchAreaPeople></SearchAreaPeople>
    </>;
};
