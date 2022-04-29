import React from 'react';
import {Carousel} from "@trendyol-js/react-carousel";
import {IoIosArrowForward} from "@react-icons/all-files/io/IoIosArrowForward";
import './style.sass'
import {Link} from "react-router-dom";

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

                <Carousel show={3} slide={3} swiping={true} className=''>
                    {
                        rewiews.map(el => {
                            return  <div className='m-3'>
                              <div className='box-reviews p-4'>
                                  <div className='d-flex justify-content-between '>
                                      <p>{el.name}</p>
                                      <p>{el.data}</p>
                                  </div>
                                  <p>
                                      {el.text}
                                  </p>
                              </div>
                            </div>
                        })
                    }
                </Carousel>
                <p className='text-center mb-5 reviews-send '><Link to=''>Оставить отзыв</Link></p>
            </div>
        </div>
    );
}

export {Reviews};