import React from 'react';
import './style.sass'
import Vetca from '../../img/pngegg.png'
import { YMaps, Map } from 'react-yandex-maps';
import {AiOutlinePhone} from "@react-icons/all-files/ai/AiOutlinePhone";
import {AiOutlineCalendar} from "@react-icons/all-files/ai/AiOutlineCalendar";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";
import {AiOutlineInstagram} from "@react-icons/all-files/ai/AiOutlineInstagram";
function Contacts(props) {
    return (
      <div className='container d-flex justify-content-center align-items-center'>
          <div className='row p-5'>
              <h3 className='text-center mb-5'>Контакты</h3>
              <div className="col-1">
                  <img src={Vetca} alt="" className='img-fluid vetka'/>
              </div>
              <div className="col-4 d-flex align-items-center justify-content-center contacts-box">
                  <div className='p-2'>
                      <h4>Свяжитесь с нами</h4>
                      <p><AiOutlinePhone />+7 800 555 35 35</p>
                      <p><AiOutlineCalendar />Пн-Вс с 9:00 до 23:00</p>
                      <p>Мы в соц сетях</p>
                      <FaTelegramPlane />
                      <AiOutlineInstagram />

                  </div>
              </div>
              <div className="col-7">
                  <YMaps>
                      <div>
                          <Map className='map' defaultState={{ center: [48.7121,44.5259], zoom: 12 }} />
                      </div>
                  </YMaps>
              </div>
          </div>
      </div>
    );
}

export {Contacts};