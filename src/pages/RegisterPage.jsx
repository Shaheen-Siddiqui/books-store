import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import { authContext } from "../context/authContext";

const initialValue = {
    userName: '',
    email: '',
    password: ''
}
export const RegisterPage = () => {
    const [signUpUser, setSignUpUser] = useState(initialValue);
    const {userName, email, password}=signUpUser;
    const { SignUpUserWithEmailAndPassword, isLoggedIn } = useContext(authContext)
    
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/')
        }
        
    })


const inputChangeHandler=(event)=>{
    const {name, value} = event.target;
    setSignUpUser({
        ...signUpUser,
        [name]: value
    })
}

const formHandler= async(event)=>{
    event.preventDefault()
    try{
        await SignUpUserWithEmailAndPassword(email, password)
        setSignUpUser(initialValue)
    }
    catch(err){
        console.log(err);
    }
}


    return (
        <Form className='container' onClick={formHandler}>
            <Form.Group className="mb-3 mt-5" >
                <Form.Label>username</Form.Label>
                <Form.Control onChange={inputChangeHandler} value={userName} name="userName" type="text" placeholder="you'r name" />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicEmail">
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
            <Button variant="primary" type="submit">
                Create user
            </Button>
        </Form>
    );
}


