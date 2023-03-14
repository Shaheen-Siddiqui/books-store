import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { fireStoreContext } from "../context/firestoreContext";

const initialValue = {
    price: "",
    ISBN: "",
    bookname: ""
}

export const ListOfBooks = () => {
    const [signUpUser, setSignUpUser] = useState(initialValue);
    const [image, setImage] = useState();
    const { price, ISBN, bookname } = signUpUser;
    const { setDataInToFirestore } = useContext(fireStoreContext)

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setSignUpUser({
            ...signUpUser,
            [name]: value
        })
    }

    const formHandler = async (event) => {
        event.preventDefault()
        setDataInToFirestore(price, ISBN, bookname, image)
        setSignUpUser(initialValue)
    }


    return (
        <>
            <Form className='container' onSubmit={formHandler}>

                <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                    <Form.Label>Book ~Name</Form.Label>
                    <Form.Control onChange={inputChangeHandler} value={bookname} name="bookname" type="text" placeholder="Enter bookname" />
                    <Form.Text className="text-muted">
                        we'll never share your bookname with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control onChange={inputChangeHandler} value={ISBN} name="ISBN" type="test" placeholder="ISBN" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>price</Form.Label>
                    <Form.Control onChange={inputChangeHandler} value={price} name="price" type="number" placeholder="price" />
                </Form.Group>


                <Form.Group className="mb-3" >
                    <Form.Label>upload here..</Form.Label>
                    <Form.Control onChange={(event) => setImage(event.target.files[0])} type="file" />
                </Form.Group>


                <Button variant="outline-primary" type="submit">
                    Create yohoo!!
                </Button>

            </Form>
        </>
    );
}


