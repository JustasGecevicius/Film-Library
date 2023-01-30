import { createContext } from "react";

interface Context {
        signInInfo?: {
                name:string;
                profilePicUrl:string;
                id:string;
        } | {};
        setSignInInfo? : React.Dispatch<React.SetStateAction<{}>>
}

export const UserContext = createContext<Context | null>(null);

export const DB = createContext<any>(null);