import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { authContext } from "../context/authContext";
import { fireStoreContext } from "../context/firestoreContext";
import { BooksCard } from "../components/BooksCard";
import CartGroup from "react-bootstrap/CardGroup"

export const Home = () => {
    // const {SignOutUser} = useContext(authContext);
    const { RetrivedDataStore } = useContext(fireStoreContext);
    const [storeBooks, setStoreBooks] = useState([]);

    useEffect(() => {
        RetrivedDataStore().then((data) =>
            setStoreBooks(data.docs))
    }, [])



    return (
        <div>
            {/* <Button onClick={SignOutUser} size='sm' variant='secondary' className='mt-3'>log-out</Button> */}
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

