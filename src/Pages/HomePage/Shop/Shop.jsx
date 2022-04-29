import React from 'react';
import './style.sass'
import ShopCard from "./ShopCard";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../../Redux/Cart";




function Shop(props) {

    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.order)
    const addCart = (name,id,img,gram,price, cell) => dispatch(cartActions.addCart(name,id,img,gram,price, cell))

    const ListProducts = products.map(el => {
        return <ShopCard {...el} cart={cart} addCart={addCart}/>
    }).slice(0, 6)

    return (
        <div className='mt-5'>
            <h3 className='text-center pb-4 shop-title '>Выбери свои витамины</h3>
                <div className="row m-0 p-0 d-flex justify-content-center align-items-center">
                    <div className="col-12 col-xl-2 col-sm-2 col-lg-2 "></div>
                    <div className="col-12 col-xl-8 col-sm-8 col-lg-8">
                        <div className="row ">
                            {ListProducts}
                        </div>
                    </div>
                    <div className="col-12 col-xl-2 col-sm-2 col-lg-2"></div>
                </div>
            <div className='d-flex align-items-center justify-content-center  w-100'>
                <p className='more'>Смотреть еще...</p>
            </div>

        </div>
    );
}

export {Shop};