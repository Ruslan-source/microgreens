import React, {useEffect, useState} from 'react';
import { authActionTypes} from "../../Redux/Auth";
import {useDispatch, useSelector} from "react-redux";
import './style.sass'
import {MdDone} from "@react-icons/all-files/md/MdDone";
import {useNavigate, Redirect, Link} from "react-router-dom";
import Logo from "../../img/888.png";
import {IoIosArrowBack} from "@react-icons/all-files/io/IoIosArrowBack";
import {IoMdClose} from "@react-icons/all-files/io/IoMdClose";
function Auth(props) {



    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)

    const [toggle, setToggle] = useState(true)


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const login = () => dispatch({type: authActionTypes.LOGIN_USER, loginEmail,loginPassword})
    const register = () => dispatch({type: authActionTypes.REGISTER_USER, email, password})

    const navigate = useNavigate();

    const goToLoginPage = () => user && setTimeout(() => {
        navigate('/')
    },500)
    goToLoginPage()


    return (
        <div className='d-flex align-items-center justify-content-center box-cart p-5'>

            {
                user ?
                    <>
                        <div>
                            <MdDone className='done-register'/>

                        </div>
                    </>
                    :
                   <>

                       {
                           toggle ? <div className='auth-box p-4 mt-5'>
                               <div className='d-flex justify-content-around align-items-center'>
                                 <span onClick={() => navigate(-1)} className='icon-box'>
                                       <IoIosArrowBack className='auth-icon'/>
                                 </span>
                                   <img className='d-block mx-auto' src={Logo} alt=""/>
                                   <span onClick={() => navigate(-1)} className='icon-box'>
                                       <IoMdClose className='auth-icon'/>
                                   </span>
                               </div>
                               <h2 className='text-center form-name p-3'>Регстрация</h2>
                               <div className='row d-flex justify-content-center'>
                                   <div className="col-xl-8 col-12">
                                       <div className='w-100'>
                                           <input type="text" name="email" placeholder='Email' className='box-input w-100' onChange={e => setEmail(e.target.value)}/>
                                           <input type="text" name="password" placeholder='Пароль' className='box-input w-100' onChange={e => setPassword(e.target.value)}/> <br/>
                                       </div>
                                   </div>
                               </div>
                               <button className='more-green  mt-1 d-block mx-auto text-center' onClick={register}>
                                   Зарегистрироваться
                               </button>
                               <p className='text-center mt-5'>Уже есть аккаунт?</p>
                               <div className='d-flex justify-content-center'>
                                   <p className='text-center dop ' onClick={() => setToggle(!toggle)}>
                                       Войти
                                   </p>
                               </div>
                           </div> : <div className='auth-box p-4 mt-5'>
                               <div className='d-flex justify-content-around align-items-center'>
                                 <span onClick={() => navigate(-1)} className='icon-box'>
                                       <IoIosArrowBack className='auth-icon'/>
                                 </span>
                                   <img className='d-block mx-auto' src={Logo} alt=""/>
                                   <span onClick={() => navigate(-1)} className='icon-box'>
                                       <IoMdClose className='auth-icon'/>
                                   </span>
                               </div>
                               <h2 className='text-center form-name p-3'>Войти</h2>
                               <div className='row d-flex justify-content-center'>
                                   <div className="col-xl-8 col-12">
                                       <div className='w-100'>
                                           <input type="text" placeholder='Email' className='box-input w-100' onChange={e => setLoginEmail(e.target.value)}/>
                                           <input type="text" placeholder='Пароль' className='box-input w-100' onChange={e => setLoginPassword(e.target.value)}/> <br/>
                                       </div>
                                   </div>
                               </div>
                               <button className='more-green  mt-1 d-block mx-auto text-center' onClick={login}>
                                   Войти
                               </button>
                               <p className='text-center mt-5'>Хотите зарегистрировать аккаунт?</p>
                               <div className='d-flex justify-content-center'>
                                   <p className='text-center dop ' onClick={() => setToggle(!toggle)}>
                                       Регистрация
                                   </p>
                               </div>
                           </div>
                       }
                   </>
            }
        </div>
    );
}

export {Auth};