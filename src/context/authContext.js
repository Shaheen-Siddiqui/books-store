import { createContext } from "react";
import { app } from "../utils/firebase";

export const authContext = createContext(null);



export const AuthContextProvider = ({ children }) => {
    return <authContext.Provider>{children} </authContext.Provider>
}











