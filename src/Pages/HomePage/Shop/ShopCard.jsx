import React from 'react';
import Ij from "../../../img/pngwing.com.png";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


function ShopCard(props) {
    const {name,id,img,gram,price, cell,addCart, cart} = props

    const dispatch = useDispatch()

    return (


       <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 text-center mb-5'>
           <div className="containers">
            <div className="cards">
                <div className="imgBx">
                    <img src={Ij}/>
                </div>

                <div className="contentBx">

                    <h2>{name}</h2>

                    <div className="size">
                        <h3>Грамм</h3>
                        <span>50</span>
                    </div>

                    <div className="color">

                        <h3>Цена</h3>
                        <span>150р</span>

                    </div>

                        <button   className='more-green mb-5 mt-1 ' onClick={() => addCart(name,id,img,gram,price, cell)}>
                            Купить
                        </button>

                </div>

            </div>
        </div>
        </div>
    );
}

export default ShopCard;