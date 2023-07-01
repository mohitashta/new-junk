import { useState } from 'react';
import NavSection from '../../navSection/NavSection'
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image2 from '../../../assets/pageOne/image2.png'
import image3 from '../../../assets/pageOne/image3.png'
import image4 from '../../../assets/pageOne/image4.png'
import image5 from '../../../assets/pageOne/image5.png'
import image6 from '../../../assets/pageOne/image6.png'
import image7 from '../../../assets/pageOne/image7.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import junk from '../../../assets/pageOne/junk.png'
import './MenuSection.css'
import junkfooter from '../../../assets/pageOne/junkfooter.png'

const MenuSection = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpentwo, setIsOpentwo] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleToggletwo = () => {
        setIsOpentwo(!isOpentwo);
    };
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const images = [
        { url: image2, altText: 'Sip on our Slushie Cocktail' },
        { url: image3, altText: 'Quench your thirst withs our selected Tap Beer.' },
        { url: image4, altText: 'Buy two glasses of House Wine and get the rest of  the bottle FREE.' },
        { url: image5, altText: 'Get our Edamame for only $6.' },
        { url: image6, altText: 'Enjoy our Gangnam Fries for only $8.' },
        { url: image7, altText: 'Bring your crew and join us for Happy Hour!' },
    ]
    return (
        <div>
            <NavSection />
            <Nav className='navlinks_bg_color py-4 d-none d-md-block'>
                <Container className='py-2'>
                    <ul className='text-center'>
                        <Link to='/menu' id='links_text_color' className='pe-3'>MENU</Link>
                        <Link >
                            <div class="dropdown pe-3">
                                <Link > <span id='links_text_color'>BOOK A TABLE<i class="fa fa-angle-down ps-2" style={{ fontSize: "12px" }}></i></span>  </Link>
                                <div class="dropdown-content">
                                    <Link > <p className='my-2 p-2'>BOOK MAROOCHY</p>  </Link>
                                    <Link >  <p className='p-2'>BOOK SIPPY</p>   </Link>
                                </div>
                            </div>
                        </Link>
                        <div class="dropdown pe-3">
                            <Link> <span id='links_text_color'>ORDER TAKEAWAY<i class="fa fa-angle-down ps-2" style={{ fontSize: "12px" }}></i></span></Link>
                            <div class="dropdown-content">
                                <Link> <p className='my-2 p-2'>MAROOCHYDORE</p></Link>
                                <Link> <p className='p-2'>SIPPY DOWN</p> </Link>
                            </div>
                        </div>
                        <Link id='links_text_color' className='pe-3'>GIFT CARDS</Link>
                        <Link id='links_text_color' className='pe-3'>CONTACT</Link>
                    </ul>
                </Container>
            </Nav>
            <div className="container navlinks_bg_color d-block d-md-none">
                <div className="row text-end py-4 ">
                    <div className="col-8 d-flex justify-content-center">
                        <img src={junk} alt="" className='img_size ' />
                    </div>
                    <div className="col-4 text-center align-self-center" onClick={handleShow}>
                        <i class="fa fa-bars  me-3 bar_size1"></i>
                    </div>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement="top" className='navlinks_bg_color bg_height'>
                <Offcanvas.Body>
                    <Container  >
                        <div className="col-12 text-end bar_size" onClick={handleClose}>
                        </div>
                        <ul className='text-center py-2 position-relative nav_links_center'>
                            <div className='pb-3'>
                                <Link to='/menu' id='links_text_color' className='pe-3'>MENU</Link>
                            </div>
                            <div className='pb-2'>
                                <button id='links_text_color' className='pb-3' onClick={handleToggle}>BOOK A TABLE <i class={` ${!isOpen ? "fa-solid fa-caret-down ms-2" : "fa-solid fa-caret-up ms-2"}`}></i>
                                </button>
                                {isOpen && (
                                    <div className="offcanvasS position-relative inner_links">
                                        <p className='px-4 text-center pb-3' >BOOK MAROOCHY</p>
                                        <p className=' px-4 text-center'  >BOOK SIPPY</p>
                                    </div>
                                )}
                            </div>
                            <div className='pb-2'>
                                <button id='links_text_color' className='pb-3' onClick={handleToggletwo}>ORDER TAKEAWAY <i class={` ${!isOpentwo ? "fa-solid fa-caret-down ms-2" : "fa-solid fa-caret-up ms-2"}`}></i></button>
                                {isOpentwo && (
                                    <div className="offcanvasS position-relative inner_links">
                                        <p className='px-4 text-center pb-3'  >MAROOCHYDORE</p>
                                        <p className=' px-4 text-center' >SIPPY DOWN</p>
                                    </div>
                                )}
                            </div>
                            <div className='pb-3'>
                                <Link id='links_text_color' className='pe-3'>GIFT CARDS</Link>
                            </div>
                            <div>
                                <Link id='links_text_color' className='pe-3'>CONTACT</Link>
                            </div>
                        </ul>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>

            <section className=' bg-black py-md-4 pt-3'>
                <Carousel
                    className='pt-3 pt-md-0'
                    infinite={true}
                    responsive={responsive}
                >
                    {images.map((importImg, index) => {
                        return (
                            <div className="row py-5">
                                <div class="col-11 mx-auto d-flex justify-content-evenly flex-wrap">
                                    <img key={index} src={importImg.url} className='img_bg_hover  object-cover object-center' alt={`Image ${index}`} />
                                </div>
                                <div className="col-11 mx-auto text-white py-3 mb-3 mb-md-0 mb-lg-0 bottom_text">
                                    {importImg.altText}
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </section>
            <div className='bg-black pb-4 footer-top-border'>
                <Row className='mx-auto flex bg-black justify-content-around pt-5'>
                    <Col lg={6} className='w-48'>
                        <img src={junkfooter} alt="" />
                    </Col>
                    <Col lg={6} className='text-md-end text-center'>
                        <Col lg={12} className='text-md-end text-center py-md-3 pt-4 pb-2 footer_icon_color2 ms-md-3'>
                            <span><i class="fa-brands fa-instagram mx-4"></i></span>
                            <span><i class="fa-brands fa-tiktok"></i></span>
                            <span><i class="fa fa-facebook mx-4" aria-hidden="true"></i></span>
                        </Col>
                        <Col lg={12} className='text-md-end  text-center py-2'>
                            <h6 className='bottom_para pb-md-0 pb-3'>COPYRIGHT 2023 JUNK SUNSHINE COAST</h6>
                        </Col>
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default MenuSection