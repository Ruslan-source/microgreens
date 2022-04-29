import React from 'react';
import {AiOutlinePlus} from "@react-icons/all-files/ai/AiOutlinePlus";
import {AiOutlineMinus} from "@react-icons/all-files/ai/AiOutlineMinus";
import Ij from "../../img/pngwing.com.png";
import './style.sass'
import {MdDeleteForever} from "@react-icons/all-files/md/MdDeleteForever";
function CartItem(props) {
    const { name, id, img, gram, price,totalPrice,totalGram, qty, addQty, decQty,delCart} = props
        return(
            <div className='row  d-flex align-items-center justify-content-center box-cart_item'>
                <div className="col-3"><img src={Ij} alt="" className='cart-item_img mx-auto d-block' /></div>
                <div className="col-3 d-flex flex-column text-start"><p className='m-0'>{name}</p><p className='m-0'>{totalGram} <span className='cart-item_gram'>гр.</span> </p></div>

                <div className="col-2 d-flex justify-content-around align-items-center box-qty p-1">
                    <AiOutlineMinus onClick={() => decQty(id, qty)}/>
                    <p className='m-0'>{qty}</p>
                    <AiOutlinePlus onClick={() => addQty(id, qty)}/>
                </div>

                <div className="col-2 text-center">{totalPrice} <span className='cart-item_rub'>р</span></div>
                <div className="col-xl-2 del-cart cart-item_del"><MdDeleteForever onClick={() => delCart(id)}/></div>
            </div>
    );
}

export default CartItem;