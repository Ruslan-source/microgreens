import React, {useState} from 'react';
import './style.sass'
import {Carousel} from "react-bootstrap";
import Slide1 from '../../../img/IMG_1377.jpg'

function Farm(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='farm text-center'>
            <div className='p-5'>
                <h2 className='p-1 news'>Новости с нашей фермы</h2>
            </div>


            <div className="container">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Slide1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>  <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Slide1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>  <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Slide1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>

            </div>

                <div className='p-5'>
                    <p className=''>Подписывайтесь на нас в соиальных сетях и всегда будете в курсе наших новостей</p>
                </div>

        </div>
    );
}

export {Farm};