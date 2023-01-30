import { SearchArea } from "reusableComponents/SearchArea";
import { useContext, useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import "../../css/home.css";
import { UserContext } from "features/services/userContext";
import { SearchBar } from "reusableComponents/SearchBar";

interface Props {}

export const Home: React.FC<Props> = () => {
    const { signInInfo, setSignInInfo } = useContext<any>(UserContext);
    const [name, setName] = useState();
    const storage = getStorage();
    const pathRef = ref(storage, "background.jpg");
    const [background, setBackground] = useState<string | undefined>();

    useEffect(() => {
        const fetch = async () => {
            const link = await getDownloadURL(pathRef);
            setBackground(link);
        };
        fetch();
    }, []);

    useEffect(() => {
        if (
            signInInfo !== undefined &&
            signInInfo !== null &&
            Object.keys(signInInfo).length !== 0
        ) {
            setName(signInInfo["name"].split(" ").slice(0, -1).join("."));
        }
    }, [signInInfo]);

    return background ? (
        <div
            className="background"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="backgroundCover"></div>
            <div className="textWrap">
                {signInInfo && name ? (
                    <h3>
                        Welcome back <br /> {name}{" "}
                    </h3>
                ) : (
                    <h2>Discover</h2>
                )}
                <SearchBar />
            </div>
        </div>
    ) : null;
};
