import React from 'react';
import './style.sass'
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import {cartActions} from "../../Redux/Cart";
function Cart(props) {

    const cart = useSelector(state => state.cart.order)

    const dispatch = useDispatch()

    const addQty = (id,qty) => dispatch(cartActions.addQty(id,qty))
    const decQty = (id,qty) => dispatch(cartActions.decQty(id,qty))
    const delCart = (id,qty) => dispatch(cartActions.delCart(id))

    const elementPrice = cart.map(el => el.totalPrice)
    const totalCartPrice = elementPrice.length !== 0 && elementPrice.reduce((a,b) => a + b)



    return (
        <div className='d-flex align-items-center justify-content-center box-cart p-5'>
            <div className='cart-mini_box p-4 mt-5'>
                <h3 className='text-center cart-name'>Корзина</h3>
                {
                    cart.length > 0 ? <>

                        {cart.map(el => <CartItem {...el}  addQty={addQty} decQty={decQty} delCart={delCart} /> )}

                        <div className='d-flex justify-content-around'>
                            <p>Всего к оплате</p><p>{totalCartPrice} р</p>
                        </div>

                            <button className='more-green mb-5 mt-1 d-block mx-auto'><Link to='/form'>
                                Оформить заказ    </Link>
                            </button>

                    </> : <>
                        <h3 className='text-center  p-5'>Ваша корзина пуста</h3>
                        <button className='more-green  mt-1 d-block mx-auto'>
                            Добавить товары
                        </button>
                    </>
                }
            </div>
        </div>
    );
}

export {Cart};