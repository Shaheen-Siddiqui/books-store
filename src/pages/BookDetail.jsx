import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fireStoreContext } from "../context/firestoreContext";
import Button from 'react-bootstrap/Button';




export const BookDetail = () => {
  const { obtainBookDetailById, obtainImages } = useContext(fireStoreContext)
  const [detail, setDetail] = useState(null);
  const [images, setImages] = useState(null)
  // const { price, ISBN, bookname, imageUrl } = detail;
  const params = useParams()
  const { bookId } = params


  useEffect(() => {
    obtainBookDetailById(bookId).then((data) => setDetail(data.data()))
  }, [])

  useEffect(() => {
    if (detail) {
      const imagepath = detail.imageUrl
      obtainImages(imagepath).then((photo) => setImages(photo))
    }
  }, [detail])

  return (
    <div>
      {
        detail == null ? <strong>Loading... </strong> :
          (<div className='container mt-3'>
            <h3>{detail.bookname}</h3>
            <img src={images} alt={detail.bookname} width="30%" height="30%" />
            <h3>price: {detail.price} </h3>
            <h3>ISBN: {detail.ISBN}</h3>
            <br />
            <Button variant='outline-primary'>Buy now</Button>

          </div>)

      }
    </div>
  )
}

