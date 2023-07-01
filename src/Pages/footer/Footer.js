import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import junk from '../../assets/pageOne/junk.png'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className='bg-black pb-5 '>
                <Container className='bg-black pt-2 pt-md-0' >
                    <Row className='mx-auto flex justify-content-center pt-4'>
                        <Col lg={12} className='w-44'>
                            <img src={junk} alt="" />
                        </Col>
                        <Col lg={12} className='text-center py-md-3 pt-5 pb-2  footer_icon_color'>
                            <span><i class="fa-brands fa-instagram mx-4"></i></span>
                            <span><i class="fa-brands fa-tiktok"></i></span>
                            <span><i class="fa fa-facebook mx-4" aria-hidden="true"></i></span>
                        </Col>
                        <Col lg={12} className='text-center py-2'>
                            <h6 className='bottom_para'>COPYRIGHT 2023 JUNK SUNSHINE COAST</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer