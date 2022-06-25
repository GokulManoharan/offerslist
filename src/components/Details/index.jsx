import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from 'react-bootstrap'
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight, faCar, faBagShopping,
    faCheck, faEuroSign, faSuitcase, faLocationArrow, faSnowflake, faUser
} from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';

import './index.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Details = () => {
    const { id } = useParams();
    const { data } = useSelector(state => state.offerList.list)

    const [item, setItem] = useState({})
    const [images, setImages] = useState([])

    useEffect(() => {
        if (id) {
            const selectedItem = data?.offers.find(item => item.id === id)
            setItem(selectedItem)
            if (selectedItem?.splashImages.length > 0) setImages(selectedItem.splashImages.map(image => ({ url: image.url, caption: item?.headlines?.description })))
        }
    }, [])

    const renderIcon = (name) => <FontAwesomeIcon icon={name} size={'sm'} className="displayIcon" />

    return (
        <div className="m-4">
            {console.log('===', item)}
            <span className="headerText">{item?.headlines?.description}
                <span className={`smallText status ${item.status === 'available' ? 'available' : 'notAvailable'}`}>
                    {`${item.status === 'available' ? 'Available' : 'Not available currently'}`}</span>
            </span>
            <p className="generalText">{item?.headlines?.longSubline}</p>
            <Row>
                <Col md={8} lg={8}>
                    <div className="displayImage">
                        {/* <img src={item?.vehicleGroupInfo?.modelExample?.imageUrl} alt={item?.vehicleGroupInfo?.modelExample?.name} /> */}
                        <Carousel>
                            {images.map((image, index) => (
                                <div key={index}>
                                    <img src={image.url} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </Col>
                <Col md={4} lg={4}>
                    <div className="displayFeatures position-relative">
                        <Row className="features generalText">
                            <Col md={6} lg={6} sm={6} xs={6}><span>{renderIcon(faSuitcase)}{item?.carGroupInfo?.baggage?.suitcases} suitcases</span></Col>
                            <Col md={6} lg={6} sm={6} xs={6}><span>{renderIcon(faBagShopping)}{item?.carGroupInfo?.baggage?.bags} bags</span></Col>
                            <Col md={6} lg={6} sm={6} xs={6}><span>{renderIcon(faUser)}{item?.carGroupInfo?.maxPassengers} people</span></Col>
                            {
                                item?.carGroupInfo?.airCondition && <Col md={6} lg={6} sm={6} xs={6}>{<span>{renderIcon(faSnowflake)}Air conditioned</span>}</Col>
                            }
                            {
                                item?.carGroupInfo?.navigationSystem && <Col md={6} lg={6} sm={6} xs={6}>{<span>{renderIcon(faLocationArrow)}Navigation system</span>}</Col>
                            }
                            <Col md={6} lg={6}>{<span>{renderIcon(faCar)}{`${item?.carGroupInfo?.automatic ? 'Automatic' : 'Manual'}`}</span>}</Col>
                        </Row>
                        <Row className="generalText inclusions p-3">
                            {
                                item?.includedCharges?.length > 0 && (
                                    item.includedCharges.map(included => {
                                        return <Col md={12} key={included.title}><span className='smallText'><FontAwesomeIcon icon={faCheck} size={'lg'} className="checkIcon" /> {included.title} </span></Col>
                                    })
                                )
                            }
                        </Row>
                        <Row className="priceRow w-100 mb-2 p-1">
                            {/* <Col md={6} lg={6} xs={6} sm={6} className='d-flex align-items-center'>
                                <span className='generalText priceDetails'>
                                    <FontAwesomeIcon icon={faEuroSign} size={'sm'} /> <span className="smallHeaderText price">{item?.prices?.basePrice?.amount.value}</span>
                                    / day
                                </span>
                            </Col> */}
                            <Col md={12} lg={12} xs={12} sm={12} className="d-flex align-items-center justify-content-end m-0 p-0">
                                <span className='generalText priceDetails'>
                                    <FontAwesomeIcon icon={faEuroSign} size={'sm'} /> <span className="smallHeaderText price">{item?.prices?.basePrice?.amount.value}</span>
                                    / day
                                </span>
                                <span className="smallHeaderText bookNowBtn">Book now <FontAwesomeIcon icon={faArrowRight} size={'1x'} /></span>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default Details