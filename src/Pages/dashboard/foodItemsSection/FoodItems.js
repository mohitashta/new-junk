import React from 'react'
import { Col, Row } from 'react-bootstrap'
import fooditemone from '../../../assets/pageOne/fooditemsone.jpg'
import fooditemtwo from '../../../assets/pageOne/fooditemtwo.jpg'
import fooditemthree from '../../../assets/pageOne/fooditemthree.jpg'
import fooditemfour from '../../../assets/pageOne/fooditemfour.jpg'
import fooditemfive from '../../../assets/pageOne/fooditemfive.jpg'
import fooditemsix from '../../../assets/pageOne/fooditemsix.jpg'
import fooditemseven from '../../../assets/pageOne/fooditemseven.jpg'
import fooditemeight from '../../../assets/pageOne/fooditemeight.jpg'
import './FoodItems.css'
import Signup from '../signupPage/Signup'
const FoodItems = () => {
    const imageUrls = [
        fooditemone, fooditemtwo, fooditemthree, fooditemfour, fooditemfive, fooditemsix, fooditemseven, fooditemeight
    ];
    return (
        <div>
            <Row className='bg-black mx-auto'>
                <Col lg={12} className="text-center py-5" id='text_color_items'>
                    FOLLOW US ON THE GRAM.
                </Col>
            </Row>
            <Row className='bg-black mx-auto d-none d-md-block pb-5'>
                <Col lg={12} className='mx-auto px-5 pb-5'>
                    <div class="flex flex-wrap mx-auto ">
                        {imageUrls.map((importImg, index) => {
                            return (
                                <div class="lg:w-1/4 sm:w-1/2 p-3 flex">
                                    <img key={index} src={importImg} className='img_bg_hover w-full h-80 object-cover object-center' alt={`Image ${index}`} />
                                </div>
                            )
                        })}
                    </div>
                </Col>
            </Row>
            <Row className='bg-black flex-wrap d-flex mx-auto d-block d-md-none'>
                {imageUrls.map((ele, ind) => {
                    return (
                        <Col key={ind} xs={6} >
                            <div>
                                <img src={ele} alt={`Image ${ind}`} className="" />
                            </div>
                        </Col>
                    )
                })}
            </Row>
            <Signup />
        </div>
    )
}
export default FoodItems
