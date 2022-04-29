export const cartActionTypes = {
    ADD_CART: "CART.ADD_CART",
    ADD_QTY: "CART.ADD_QTY",
    DEC_QTY: "CART.DEC_QTY",
    DEL_CART: "CART.DEL_CART"
}


export const cartActions = {

    addCart: (name,id,img,gram,price, cell) => ({
        type: cartActionTypes.ADD_CART, payload: {
            name,id,img,gram,price, cell
        }
    }),

    delCart: (id) => ({type: cartActionTypes.DEL_CART, payload: {id}}),

    addQty: (id, qty) => ({
        type: cartActionTypes.ADD_QTY, payload: {
            id,
             qty
        }
    }),

    decQty: (id, qty) => ({
        type: cartActionTypes.DEC_QTY, payload: {
            id,
            value: qty
        }
    })

}