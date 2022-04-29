export const authActionTypes = {
    SET_USER: "AUTH.SET_USER",
    LOGIN_USER: "AUTH.LOGIN_USER",
    REGISTER_USER: "AUTH.REGISTER_USER"
}


export const authActions = {
    setUser: (payload) => ({type: authActionTypes.SET_USER, payload}),
    registerUser: () => ({type: authActionTypes.REGISTER_USER}),
    loginUser: () => ({type: authActionTypes.LOGIN_USER}),
}