import { useWatchProviders } from "../hooks";

interface Props {
 id : number | undefined
}

export const WatchProviders = ({id} : Props) => {
    const watchProviders = useWatchProviders(id, "movie");
    
    return (<div className="watchProvidersDiv">
        <div className="watchProvidersWidth">

        </div>
    </div>);
}