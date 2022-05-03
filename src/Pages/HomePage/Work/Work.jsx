import React from 'react';
import {Image} from "react-bootstrap";
import './style.sass'
import ImgOne from '../../../img/223.jpg'
import ImgTwo from '../../../img/email-support-services.jpg'
import ImgThree from '../../../img/online-shopping1.jpg'
function Work(props) {
    return (
        <div className='container-fluid work pt-5 pb-5'>
            <div className="container text-center">
                <h3 className='p-5 work-title'>Как мы работаем</h3>
                <div className="row pb-5">

                    <div className="col-xl-4">
                        <Image roundedCircle src={ImgThree} alt="" className='img-fluid img-work'/>
                       <div className='w-50 float-end '>
                           <p className='pt-2 work-card_title text-end work-line'>Вы делаете заказ</p>
                           <p className='work-card_text text-end'>Вы выбираете понравившиеся ва позиции, оплачиваете заказ.</p>
                       </div>
                    </div>


                    <div className="col-xl-4">
                        <Image roundedCircle src={ImgTwo} alt="" className='img-fluid img-work'/>
                     <div className='w-50 float-end '>
                         <p className='pt-2 work-card_title text-end work-line'>Уточнение деталей</p>
                         <p className='work-card_text text-end'>Наш оператор связывается с вами в течении 30 мин.</p>
                     </div>
                    </div>


                    <div className="col-xl-4">
                        <Image roundedCircle src={ImgOne} alt="" className='img-fluid img-work' />
                       <div className='w-50 float-end '>
                           <p className='pt-2 work-card_title text-end work-line '>Доставка</p>
                           <p className='work-card_text text-end'>Доставка осуществляется в течении 1-3 дней.</p>
                       </div>
                    </div>



                </div>
            </div>
        </div>
    );
}

export {Work};