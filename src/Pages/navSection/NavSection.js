import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './NavSection.css'
const NavSection = () => {
    return (
        <>
            <Nav className='bg-black '>
                <Container>
                    <Row className='mx-auto d-none d-md-block '>
                        <div className='col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-10 mx-auto flex justify-content-lg-evenly '>
                            <Col sm={12} md={7} lg={7} xl={7} xxl={7} className="text-lg-end text-xl-end  text-xxl-end    ms-xxl-5 me-xxl-4 align-self-center padding_upper_nav">
                                <span className='top_text '>BOOK NOW FOR CHEFS OF JUNKS: AN ASIAN ADVENTURE</span>    </Col>
                            <Col md={5} lg={5} xl={4} xxl={5} className="text-lg-start text-xl-start text-xxl-start align-items-center padding_upper_nav me-xl-4 me-xxl-5 pe-xxl-5">
                                <button className='top_nav_button  rounded-2 ms-lg-2 ms-xxl-0'>BOOK FOR CURATED PLATE</button>
                            </Col>
                        </div>

                    </Row>
                    <Row className="mx-auto d-flex d-none d-s-done d-sm-block d-lg-none d-md-none d-xxl-none p-4 justify-content-evenly align-items-center padding_upper_nav">
                        <Col sm={12} className='text-center'>
                            <h6 className='top_text '>BOOK NOW FOR CHEFS OF JUNK : AN ASIAN ADVENTURE</h6>
                        </Col>
                        <Col sm={12} className='d-md-block text-center mt-3'>
                            <button className='top_nav_button rounded-2'>BOOK FOR CURATED PLATE</button>
                        </Col>
                    </Row>
                    <Row className="mx-auto d-flex  d-block d-sm-none d-lg-none d-md-none p-4 justify-content-evenly align-items-center padding_upper_nav">
                        <Col sm={12} className='text-center'>
                            <h6 className='top_text '>BOOK NOW FOR CHEFS OF JUNK </h6>
                        </Col>
                        <Col sm={12} className='d-md-block text-center mt-3'>
                            <button className='top_nav_button rounded-2'>BOOK FOR CURATED PLATE</button>
                        </Col>
                    </Row>
                </Container>
            </Nav>
        </>
    )
}

export default NavSection