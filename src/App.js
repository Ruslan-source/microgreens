import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getProductsActions} from "./Redux/getProducts/actions";
import {Routing} from "./Routing";





function App() {
  const dispatch = useDispatch()




  useEffect(() => {
        dispatch(getProductsActions.fetchProducts())
  },[])



  return (

    <Routing />

  );
}

export default App;
