import React from 'react';
import './style.sass'
import CartItem from "../../Cart/CartItem";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
function Form(props) {
    const orderTotalPrice = useSelector(state => state.cart.orderTotalPrice)
    return (

        <div className='d-flex align-items-center justify-content-center box-cart p-5'>
            <div className='cart-mini_box p-4 mt-5'>
                <h2 className='text-center form-name p-3'>Оформление заказа</h2>
                <div className='row'>
                    <div className="col-xl-6 col-12">
                        <div className='w-100'>
                            <input type="text" placeholder='Имя' className='box-input w-100'/>
                            <input type="text" placeholder='+7******' className='box-input w-100'/> <br/>
                            <input type="text" placeholder='Улица' className='box-input w-100'/>
                            <input type="text" placeholder='Дом' className='box-input w-100'/>
                            <input type="text" placeholder='Квартира' className='box-input w-100'/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <p className='text-center'>Комментарий к заказу <textarea name="comment" cols="39" rows="5" className='box-text pt-4'></textarea></p>
                    </div>
                </div>
                <div className="d-flex justify-content-between pt-3">
                    <h4 className='price-text'>Всего к оплате:</h4> <h4 className='price-value'>{orderTotalPrice} р</h4>
                </div>
                <div className='d-flex align-items-center pt-3'>
                    <input type="checkbox" className=''/>
                    <p className='m-0 p-1'>Я согласен на обработку персональных данных</p>
                </div>

                <button className='more-green  mt-1 d-block mx-auto text-center'>
                    Оформить заказ
                </button>
                <iframe
                    src={`https://yoomoney.ru/quickpay/button-widget?targets=%D0%9C%D0%B8%D0%BA%D1%80%
                    D0%BE%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8C&default-sum=${orderTotalPrice}&button-text=11&yoomon
                    ey-payment-type=on&button-size=m&button-color=white&successURL=&quickpay=small&account=4100117508665711&`}
                    width="184" height="36" frameBorder="0" allowTransparency="true" scrolling="no"></iframe>
            </div>
        </div>

    );
}

export {Form};