import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fireStoreContext } from "../context/firestoreContext";

export const BooksCard = ({ price, ISBN, bookname, imageUrl }) => {
    const [images, setImages]=useState('')
    const {obtainImages} = useContext(fireStoreContext)

    useEffect(()=>{
        obtainImages(imageUrl).then((photo)=>setImages(photo))
    })
    
    return (
        <Card style={{margin: "1rem"}} className="container">
            <Card.Img variant="top" src={images} style={{width: '18rem', height:"15rem"}} alt={`${bookname}`}/>
            <Card.Body className='container'>
               <Card.Title><u> {bookname}</u></Card.Title>
                <Card.Text>
                  ISBN: {ISBN}
                </Card.Text>
                Price: <Button variant="primary"> {price}</Button>
            </Card.Body>
        </Card>



    )
}

