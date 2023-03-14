import { createContext } from "react";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../utils/firebase";

export const fireStoreContext = createContext(null)
const storage = getStorage(app);
const db = getFirestore(app);

export const FireStoreContextProvider = ({ children }) => {

    const setDataInToFirestore = async (price, ISBN, bookname, image) => {
        const imageReference = ref(storage, `BookImage/Images/${Date.now()}-${image}`)
        const imagePath = await uploadBytes(imageReference, image);

        return await addDoc(collection(db, 'books'), {
            price, ISBN, bookname, imageUrl: imagePath.ref.fullPath
        })
    }

    const RetrivedDataStore = () => {
        return getDocs(collection(db, 'books'))
    }

    const obtainImages = async (path) => {
        return await getDownloadURL(ref(storage, path));
    }


    const value = { setDataInToFirestore, RetrivedDataStore, obtainImages };
    return <fireStoreContext.Provider value={value}>{children}</fireStoreContext.Provider>
}















