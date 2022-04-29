import React from 'react';
import {
    HashRouter as Router,
    Routes ,
    Route,
    Link
} from "react-router-dom";
import {Footer, Navigation} from "../Components";
import {Auth, Cart, HomePage} from "../Pages";
import {Form} from "../Pages/HomePage/Form";
import {Profile} from "../Pages/Profile/Profile";



function Routing(props) {
    return (
        <>
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/form' element={<Form />} />
                    <Route path='/auth' element={<Auth />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes >
            <Footer />
        </>
    );
}

export {Routing};