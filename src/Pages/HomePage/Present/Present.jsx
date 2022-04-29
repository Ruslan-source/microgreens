import React from 'react';
import Micro from '../../../img/134.jpg'
import './style.sass'

function Present(props) {
    return (
        <div className='row  m-0 pb-5 '>
            <div className="col-xl-6 col-sm-12 col-lg-12 col-12 m-0 p-0">
                <img src={Micro} alt="" className='img-fluid'/>
            </div>
            <div className="col-xl-6 col-sm-12 col-lg-12 col-12 m-0 p-0 d-flex align-items-center justify-content-center present-text">
                <div className='p-5'>
                    <h3 className='present-title'>О нашей ферме</h3>
                    <p className='present-text' >
                        Наша ферма имеет возможность производить <br/> различные сорта микрозелени наивысшего качества. <br/> Специальные лампы позволяют нам
                      в короткий срок <br/> получить готовую зелень и что самое главное <br/>  мы не используем никаких посторонних добавок. <br/> Почва тело и свет наш единственный секрет.
                    </p>
                </div>
            </div>
        </div>
    );
}

export {Present};