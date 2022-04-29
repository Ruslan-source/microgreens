import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import './style.sass'
import Navigation from "../../../Components/Navigation/Navigation";
import Mic from '../../../img/35.png'

function Header(props) {
    return (
            <div className='container-fluid box-header  d-flex align-items-center justify-content-center'>
                      <div className='row'>
                          <div className="col-xl-2 col-12 col-md-2 col-sm-12 "></div>
                          <div className="col-xl-8 col-12 col-md-8 col-sm-12">
                              <img src={Mic} alt="" className='img-fluid'/>
                          </div>
                          <div className="col-xl-2 col-12 col-md-2 col-sm-12"></div>
                      </div>
            </div>
    );
}

export {Header};