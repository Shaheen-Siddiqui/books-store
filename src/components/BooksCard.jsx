import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { fireStoreContext } from "../context/firestoreContext";

export const BooksCard = ({ price, ISBN, bookname, imageUrl, id}) => {

    const [images, setImages]=useState('')
    const {obtainImages} = useContext(fireStoreContext)
    const navigate=useNavigate();

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
                <Card.Text>
                  Price: {price}
                </Card.Text>
                <Button variant="primary" onClick={()=>navigate(`book/view/${id}`)}>view book detail </Button>
            </Card.Body>
        </Card>



    )
}

