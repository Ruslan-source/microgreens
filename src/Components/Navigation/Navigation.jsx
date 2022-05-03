import React from 'react';
import {Badge, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import './style.sass'
import Logo from '../../img/888.png'
import {TiShoppingCart} from "@react-icons/all-files/ti/TiShoppingCart";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {CgProfile} from "@react-icons/all-files/cg/CgProfile";








const navItems = [
    {link: '', name: 'Главная',},
    {link: '', name: 'Для бизнеса',},
    {link: '', name: 'Микрозелень',},
    {link: '', name: 'Контакты',},
]

function Navigation() {
    const user = useSelector(state => state.auth.user)
    const cart = useSelector(state => state.cart.order)

    const bageInfo = cart.length !== 0 ?<Badge bg="dark">{cart.length}</Badge> : <> </>



    return (









            <Navbar collapseOnSelect expand="lg" className='navigation' >
            <Container>

                    <Navbar.Brand as={Link} to='/'><img src={Logo} alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav " className='text-end'>
                        <Nav className="me-auto ">
                        </Nav>

                        <Nav>
                            {
                                navItems.map(el => {
                                    return <Nav.Link  as={Link} href='#' to={el.link}>{el.name}</Nav.Link>
                                })
                            }
                            <Nav.Link as={Link} href='#' to={user ? '/profile' : '/auth'}><CgProfile style={{fontSize: '20px'}}/></Nav.Link>
                            <Nav.Link as={Link} href='#' to='/cart'><TiShoppingCart style={{fontSize: '20px'}}/>{bageInfo}</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>

            </Container>
            </Navbar>

    );
}

export {Navigation};