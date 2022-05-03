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
        <div className='farm p-5'>
            <p className='news-farm text-center m-3'>Новости с нашей <span className='farm-line'>фермы</span></p>
            <div className="row">
                <div className="col-xl-6">
                    <img src={Slide1} alt="" className='img-fluid'/>
                </div>
                <div className="col-xl-6">
                    <div className="row">
                        <div className="col-6 farm-item">
                            <img src={Slide1} alt="" className='img-fluid'/>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export {Farm};