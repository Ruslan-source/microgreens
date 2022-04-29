import React from 'react';
import './style.sass'
import CartItem from "../../Cart/CartItem";
import {Link} from "react-router-dom";
function Form(props) {
    return (

        <div className='d-flex align-items-center justify-content-center box-cart p-5'>
            <div className='cart-mini_box p-4 mt-5'>
                <h2 className='text-center form-name p-3'>Оформление заказа</h2>
                <div className='row'>
                    <div className="col-6">
                        <div className='w-100'>
                            <input type="text" placeholder='Имя' className='box-input w-100'/>
                            <input type="text" placeholder='+7******' className='box-input w-100'/> <br/>
                            <input type="text" placeholder='Улица' className='box-input w-100'/>
                            <input type="text" placeholder='Дом' className='box-input w-100'/>
                            <input type="text" placeholder='Квартира' className='box-input w-100'/>
                        </div>
                    </div>
                    <div className="col-6">
                        <p className='text-center'>Комментарий к заказу <textarea name="comment" cols="39" rows="5" className='box-text pt-4'></textarea></p>
                    </div>
                </div>
                <div className="d-flex justify-content-between pt-3">
                    <h4 className='price-text'>Всего к оплате:</h4> <h4 className='price-value'>350 p</h4>
                </div>
                <div className='d-flex align-items-center pt-3'>
                    <input type="checkbox" className=''/>
                    <p className='m-0 p-1'>Я согласен на обработку персональных данных</p>
                </div>

                <button className='more-green  mt-1 d-block mx-auto text-center'>
                    Оформить заказ
                </button>
            </div>
        </div>

    );
}

export {Form};