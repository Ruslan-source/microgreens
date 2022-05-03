import React from 'react';
import Ij from "../../../img/pngwing.com.png";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


function ShopCard(props) {
    const {name,id,img,gram,price, cell,addCart, cart} = props

    const dispatch = useDispatch()

    return (


        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 text-center mb-5'>

                <div className=" products-card">
                    <Link to={`/individualProducts/${id}`}>
                    <img src={Ij} className='img-fluid p-3' alt=""/>
                    <p className='products-name'>{name}</p>
                    <p className='products-type'>микрозелень</p>
                    <p className='products-type'>{gram} г / {price} р</p>
                    </Link>
                    <div className='buy-products p-3' onClick={() => addCart(name,id,img,gram,price, cell)}>
                        Купить
                    </div>
                </div>

        </div>
    );
}

export default ShopCard;