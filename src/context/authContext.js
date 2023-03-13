import { createContext, useEffect, useState } from "react";
import { app } from "../utils/firebase";
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "firebase/auth";


export const authContext = createContext(null);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const SignUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const LogInUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const signInWithGoogle = async () => {
    return await signInWithPopup(auth, provider);
}



export const AuthContextProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) setLoggedInUser(user)
            else return `need to logged-in`

        })
    })
    const isLoggedIn = loggedInUser ? true : false;

//     const SignOutUser = async () => {
//          signOut(auth,((user)=> console.log(user)))
//         setLoggedInUser(null)
//    }

    const value = {
        SignUpUserWithEmailAndPassword,
        LogInUserWithEmailAndPassword,
        signInWithGoogle,
        isLoggedIn,
        // SignOutUser
    }


    return <authContext.Provider value={value}>{children} </authContext.Provider>
}












