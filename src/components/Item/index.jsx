import { Card, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEuroSign, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

import './index.css'

const ListItem = ({ data: { id, status, images, includedCharges, headlines: { description, shortSubline }, prices: { basePrice: { amount } } } }) => {
    const navigate = useNavigate();
    return (
        <Col md={4} lg={4} sm={12} xs={12} className="mt-4">
            <Card className="offerCard" onClick={() => {
                navigate(`/details/${id}`);
            }}>
                {/* <Card.Img variant="top" src={images?.large} /> */}
                <span className='smallHeaderText'>{description}</span>
                <span className='generalText'>{shortSubline}</span>
                <Card.Body className="d-flex flex-column align-items-start">
                    {/* {
                        includedCharges?.length > 0 && (
                            includedCharges.map(included => {
                                return <span className='smallText'><FontAwesomeIcon icon={faCheck} size={'xs'} /> {included.title} </span>
                            })
                        )
                    } */}
                    <div className='d-flex flex-row w-100 justify-content-end'>
                        {
                            status === 'available' ? <span className='generalText'><FontAwesomeIcon icon={faCheck} size={'xs'} />Available</span> 
                            : <span className='generalText'><FontAwesomeIcon icon={faXmark} size={'xs'} />Unavailable</span>
                        }

                        <span className='generalText'> {amount.value} <FontAwesomeIcon icon={faEuroSign} size={'xs'} /> / day</span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ListItem