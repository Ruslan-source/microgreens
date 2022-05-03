import React from 'react';
import './style.sass'
function Footer(props) {
    return (
        <div className='footer p-4'>
            <div className='row text-center  p-0 '>
                <div className="col-xl-4 col-12">
                    <p className='p-0 m-0'>НАЗВАНИЕ</p>
                </div>
                <div className="col-xl-4 col-12">
                    <p className='p-0 m-0'>г.Волгоград, Волгоградская обл.</p>
                </div>
                <div className="col-xl-4 col-12">
                    <p className='p-0 m-0'>+79880434269</p>
                </div>



            </div>
        </div>
    );
}

export {Footer};