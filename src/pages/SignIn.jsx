import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import { authContext } from "../context/authContext";

const initialValue = {
    email: '',
    password: ''
}
export const SignInUser = () => {
    const [signUpUser, setSignUpUser] = useState(initialValue);
    const { email, password } = signUpUser;
    const { LogInUserWithEmailAndPassword, signInWithGoogle, isLoggedIn } = useContext(authContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/')
        }
    })

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setSignUpUser({
            ...signUpUser,
            [name]: value
        })
    }

    const formHandler = async (event) => {
        event.preventDefault()
        try {

            await LogInUserWithEmailAndPassword(email, password)
            setSignUpUser(initialValue)
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <Form className='container' onClick={formHandler}>

                <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={inputChangeHandler} value={email} name="email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        we'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={inputChangeHandler} value={password} name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Log-in
                </Button>

                <Button variant="outline-danger" onClick={signInWithGoogle}>sign-in with Google</Button>
            </Form>
        </>
    );
}


