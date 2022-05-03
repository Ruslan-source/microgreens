import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getProductsActions} from "./Redux/getProducts/actions";
import {Routing} from "./Routing";
import {useLocation} from "react-router";
import CartItemStatick from "./Components/CartItemStatick/CartItemStatick";
import {Link} from "react-router-dom";
import QiwiBillPaymentsAPI from "@qiwi/bill-payments-node-js-sdk/lib/QiwiBillPaymentsAPI";





function App() {
  const dispatch = useDispatch()




    const SECRET_KEY = 'eyJ2ZXJzaW9uIjoiUDJQIiwiZGF0YSI6eyJwYXlpbl9tZXJjaGFudF9zaXRlX3VpZCI6InVkd2xkbi0wMCIsInVzZXJfaWQiOiI3OTg4MDQzNDI2OSIsInNlY3JldCI6IjE3NWQ4ODM1NjcxYmZkYTk2YTkxZmRkZjIxNDMzMTQ3OGRjNzUyMmYwYzg0ZGIwZWRjZGY0YmRmOWY3MzcyZGQifX0=';
    const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY);
    const publicKey = '48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPxE4F8qoiLMZPFDV2rh2K4nDgvcxUF3jrYKoZxRQmX3E2xaQCiiRP6GyepiYbErxw1wuRsw62xdTgFWj9xNb9ifL7UNXo166ZDvY1Rp6E6';
    const params = {
        publicKey,
        amount: 200,
        billId: '89880434269',
        successUrl: 'https://merchant.com/payment/success?billId=893794793973'
    };
    const link = qiwiApi.createPaymentForm(params);





  useEffect(() => {
        dispatch(getProductsActions.fetchProducts())
  },[])



  return (

      <>
          <Link to={link}>
              adasdasd
          </Link>
        <CartItemStatick />
        <Routing />
      </>

  );
}

export default App;
