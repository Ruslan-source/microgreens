import React from 'react';
import Gorshok from '../../../img/can-you-freeze-microgreens1.jpg'
import Vetka from '../../../img/pngegg.png'
import './style.sass'
function Why(props) {
    return (
        <div className='container-fluid '>
            <div className="row ">
                <div className="col-xl-5 col-md-12 col-lg-12 p-0 m-0">
                    <img src={Gorshok} className='img-fluid' alt=""/>
                </div>
                <div className="col-xl-6 col-md-12 col-lg-12 pl-5 pr-3 text-center pt-5">
                    <h3 className='why-title'>Почему выбирают <br/> именно нас</h3>
                   <div className="row ">


                       <div className="col-xl-6 col-md-6 text-start   p-3">
                          <div className='why-box card p-3'>
                             <div className='bg-number mb-3'>
                                 <h3 className='pt-2 why-point'>4+</h3>
                             </div>
                              <p className=' pb-0 why-card_title'>Опыт нашей работы</p>
                              <p className=''>Столько времени мы провели в сельскохозяйственной сфере.</p>
                          </div>
                       </div>



                       <div className="col-xl-6 col-md-6 text-start p-3">
                          <div className='why-box card p-3'>
                              <div className='bg-number mb-3'>
                                  <h3 className='pt-2 why-point'>20</h3>
                              </div>
                              <p className=' pb-0 why-card_title'>Довольных клиентов</p>
                              <p className=''>Покупатели высоко оценивают наш продукт .</p>
                          </div>
                       </div>


                       <div className="col-xl-6 col-md-6 text-start   p-3">
                          <div className='why-box card p-3'>
                              <div className='bg-number mb-3'>
                                  <h3 className='pt-2 why-point'>3</h3>
                              </div>
                              <p className=' pb-0 why-card_title'>Часа доставка до клиента</p>
                              <p className=''>Столько в среднем времени проходит до получения заказа.</p>
                          </div>
                       </div>


                       <div className="col-xl-6 col-md-6 text-start   p-3">
                          <div className='why-box card p-3'>
                              <div className='bg-number mb-3'>
                                  <h3 className='pt-2 why-point'>7</h3>
                              </div>
                              <p className=' pb-0 why-card_title'>Рабочих дней в неделю.</p>
                              <p className=''> Мы не делаем выходных для наших клиентов.</p>
                          </div>
                       </div>


                   </div>
                </div>
                <div className="col-xl-1">
                    <img src={Vetka} style={{height: '5rem'}} className='mt-5' alt=""/>
                </div>
            </div>
        </div>
    );
}

export {Why};