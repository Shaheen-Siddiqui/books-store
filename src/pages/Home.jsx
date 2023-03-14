import React, { useContext, useEffect, useState } from 'react';
import { fireStoreContext } from "../context/firestoreContext";
import { BooksCard } from "../components/BooksCard";
import CartGroup from "react-bootstrap/CardGroup"

export const Home = () => {
    const { RetrivedDataStore } = useContext(fireStoreContext);
    const [storeBooks, setStoreBooks] = useState([]);

    useEffect(() => {
        RetrivedDataStore().then((data) =>
            setStoreBooks(data.docs))
    }, [])



    return (
        <div>
            <CartGroup>
                {
                    storeBooks.map((book) => {
                        return <BooksCard key={book.id} id={book.id} {...book.data()} />
                    })
                }
            </CartGroup>

        </div>
    )
}

