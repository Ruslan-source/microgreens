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
import {useLocation} from "react-router";
import IndividualProducts from "../Pages/IndividualProducts/IndividualProducts";



function Routing(props) {

    const location = useLocation();
    console.log(location.pathname);

    const checkAuthNav = location.pathname !=='/auth' ?  <Navigation /> : ''
    const checkAuthFooter = location.pathname !=='/auth' ?  <Footer /> : ''

    return (
        <>
            {checkAuthNav}
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/form' element={<Form />} />
                    <Route path='/auth' element={<Auth />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/individualProducts/:id' element={<IndividualProducts />} />
                </Routes >
            {checkAuthFooter}
        </>
    );
}

export {Routing};