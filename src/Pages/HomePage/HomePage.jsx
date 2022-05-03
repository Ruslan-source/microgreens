import React from 'react';
import {Header} from "./Header";
import {Present} from "./Present";
import {Shop} from "./Shop";
import {Work} from "./Work";
import {Why} from "./Why";
import {Reviews} from "./Reviews";
import {Farm} from "./Farm";
import {Contacts} from "../../Components";



function HomePage(props) {
    return (
        <>
            <Header />
            <Present />
            <Shop />
            <Work />
            <Why />
            <Reviews />
            <Contacts />
        </>
    );
}

export {HomePage};
