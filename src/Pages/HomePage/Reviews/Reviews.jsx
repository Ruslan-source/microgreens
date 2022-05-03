import React from 'react';
import {Carousel} from "@trendyol-js/react-carousel";
import {IoIosArrowForward} from "@react-icons/all-files/io/IoIosArrowForward";
import './style.sass'
import {Link} from "react-router-dom";
import {AiOutlineStar} from "@react-icons/all-files/ai/AiOutlineStar";

const rewiews = [
    {
        name: 'Андрей',
        data: '21.01.2022',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci error facilis nulla obcaecati, placeat praesentium!'
    },    {
        name: 'Андрей',
        data: '21.01.2022',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci error facilis nulla obcaecati, placeat praesentium!'
    },    {
        name: 'Андрей',
        data: '21.01.2022',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci error facilis nulla obcaecati, placeat praesentium!'
    },    {
        name: 'Андрей',
        data: '21.01.2022',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci error facilis nulla obcaecati, placeat praesentium!'
    },    {
        name: 'Андрей',
        data: '21.01.2022',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci error facilis nulla obcaecati, placeat praesentium!'
    },
]

function Reviews(props) {
    return (
        <div className='container-fluid reviews-block'>
            <div className="container">
                <h3 className='reviews-title text-center m-5'>Отзывы наших клинтов</h3>
                    <div className="row">

                        <div className="col-xl-12 box-reviews mb-5">
                            <div className="row mt-5">
                                <div className="col-xl-3">
                                    <p className='reviews-name'>Mura</p>
                                    <p>05.05.2005</p>
                                </div>
                                <div className="col-xl-3 d-flex">
                                    <AiOutlineStar className='star'/>
                                    <AiOutlineStar className='star'/>
                                    <AiOutlineStar className='star'/>
                                    <AiOutlineStar className='star'/>
                                    <AiOutlineStar className='star'/>

                                </div>
                                <div className="col-xl-6">
                                    <p className='reviews-title-review'>Бомба честно говоря</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad culpa distinctio eius error maiores pariatur porro possimus sapiente sunt!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 box-reviews mb-5">
                            <div className="row mt-5">
                                <div className="col-xl-3">
                                    <p className='reviews-name'>Mura</p>
                                    <p>05.05.2005</p>
                                </div>
                                <div className="col-xl-3 d-flex">
                                    <AiOutlineStar className='star'/>
                                    <AiOutlineStar className='star'/>
                                    <AiOutlineStar className='star'/>
                                    <AiOutlineStar className='star'/>
                                    <AiOutlineStar className='star'/>

                                </div>
                                <div className="col-xl-6">
                                    <p className='reviews-title-review'>Бомба честно говоря</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad culpa distinctio eius error maiores pariatur porro possimus sapiente sunt!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 box-reviews mb-5">
                            <div className="row mt-5">
                                <div className="col-xl-3">
                                    <p className='reviews-name'>Mura</p>
                                    <p>05.05.2005</p>
                                </div>
                                <div className="col-xl-3 d-flex">
                                    <AiOutlineStar className='star'/>
                                    <AiOutlineStar className='star'/>
                                    <AiOutlineStar className='star'/>
                                    <AiOutlineStar className='star'/>
                                    <AiOutlineStar className='star'/>

                                </div>
                                <div className="col-xl-6">
                                    <p className='reviews-title-review'>Бомба честно говоря</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad culpa distinctio eius error maiores pariatur porro possimus sapiente sunt!</p>
                                </div>
                            </div>
                        </div>




                    </div>
                <div className='d-flex align-items-center justify-content-center  w-100'>
                    <p className='more'>Смотреть еще...</p>
                </div>
            </div>
        </div>
    );
}

export {Reviews};