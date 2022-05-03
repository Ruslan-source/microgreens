import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import {Col, Nav, Row} from "react-bootstrap";
import Avatar from '../../img/t4.jpg'
import './style.sass'
import {CircleProgress} from "react-gradient-progress";
import {IoIosArrowForward} from "@react-icons/all-files/io/IoIosArrowForward";
import {BsGear} from "@react-icons/all-files/bs/BsGear";
function Profile(props) {
    return (
        <div className=' box-cart p-5'>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-5">
                            <Nav.Item>
                                <Nav.Link eventKey="Profile">Профиль</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Orders">Заказы</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Settings">Настройки</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9} className='profile-content mt-5'>
                        <Tab.Content>
                            <Tab.Pane eventKey="Profile">
                                <div className="row d-flex align-items-center justify-content-center">
                                    <div className="col-xl-3 col-10 d-flex justify-content-center">
                                        <div className='text-center'>
                                            <img src={Avatar} className='avatar img-fluid p-5'  alt="" />
                                            <p>Зеленый Горошек</p>
                                            <p>Логин: Ruslan_tokko@mail.ru</p>
                                            <p>Адресс доставки: Отсутствует <BsGear /></p>

                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-12 d-flex justify-content-center">
                                        <div className='text-center'>
                                            <CircleProgress percentage={75} strokeWidth={8} />
                                            <p className='text-center'>Уровень 1</p>
                                            <p>1300 опыта</p>
                                            <p>До следующего уровня</p>
                                            <span className='d-flex justify-content-around align-items-center'>
                                        <p className='m-0 p-0'>1lvl 0% </p><IoIosArrowForward /><p className='m-0 p-0'>2lvl 3%</p>
                                    </span>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </div>
    );
}

export {Profile};