import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from 'react-bootstrap'
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCheck, faSuitcase, faSnowflake, faUser } from '@fortawesome/free-solid-svg-icons'
import './index.css'

const Details = () => {
    const { id } = useParams();
    const { data } = useSelector(state => state.offerList.list)

    const [item, setItem] = useState({})

    useEffect(() => {
        if (id) setItem(data?.offers.find(item => item.id === id))
    }, [])

    const renderIcon = (name) => <FontAwesomeIcon icon={name} size={'xs'} className="displayIcon" />

    return (
        <div className="m-4">
            {console.log('===', item)}
            <p className="headerText">{item?.headlines?.longSubline}</p>
            <Row>
                <Col md={8} lg={8}>
                    <div className="displayImage">
                        <span>Hii</span>
                    </div>
                </Col>
                <Col md={4} lg={4}>
                    <div className="displayFeatures p-2">
                        <Row className="features">
                            <Col md={6} lg={6}><span>{renderIcon(faSuitcase)}{item?.carGroupInfo?.baggage?.suitcases} suitcases</span></Col>
                            <Col md={6} lg={6}><span>{renderIcon(faBagShopping)}{item?.carGroupInfo?.baggage?.bags} bags</span></Col>
                            <Col md={6} lg={6}><span>{renderIcon(faUser)}{item?.carGroupInfo?.maxPassengers} people</span></Col>
                            <Col md={6} lg={6}>{item?.carGroupInfo?.airCondition && <span>{renderIcon(faSnowflake)}Air conditioning</span>}</Col>
                        </Row>
                        {
                            item?.includedCharges?.length > 0 && (
                                item.includedCharges.map(included => {
                                    return <span className='smallText'><FontAwesomeIcon icon={faCheck} size={'xs'} /> {included.title} </span>
                                })
                            )
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Details