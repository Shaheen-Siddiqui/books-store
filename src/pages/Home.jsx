import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { authContext } from "../context/authContext";
import { NavbarComponent } from "../components/Navbar";


export const Home = () => {
    // const {SignOutUser} = useContext(authContext);

    return (
        <div>
            <NavbarComponent/>
            <Button 
            // onClick={SignOutUser} 
            size='sm' variant='secondary' className='mt-3'>log-out</Button>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur veniam id laudantium laboriosam at reprehenderit minima voluptates nostrum assumenda officia!
        </div>
    )
}

