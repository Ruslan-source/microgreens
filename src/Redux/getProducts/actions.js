

export const getProductsActionTypes = {
    GET_PRODUCTS: "PRODUCTS.GET_PRODUCTS",
    FETCH_PRODUCTS: "PRODUCTS.FETCH_PRODUCTS"
}

export const getProductsActions = {
    getProducts: (payload) => ({type: getProductsActionTypes.GET_PRODUCTS, payload}),
    fetchProducts: () => ({type: getProductsActionTypes.FETCH_PRODUCTS}),
}