import { Card, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEuroSign } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import fallBackImg from '../../assets/images/fallBackImage.jpeg'

import './index.css'

const ListItem = ({ data: { id, headlines: { description, shortSubline }, prices: { basePrice: { amount } }, vehicleGroupInfo: { modelExample: { imageUrl, name } } } }) => {
    const navigate = useNavigate();
    return (
        <Col md={3} lg={3} sm={6} xs={12} className="p-1">
            <Card className="offerCard" onClick={() => {
                navigate(`/item/${id}`);
            }}>
                <span className='smallHeaderText'>{description} </span>
                <span className='generalText'>{shortSubline}</span>
                <Card.Img variant="top" src={imageUrl || fallBackImg} alt={name} />
                <Card.Body className="p-0">
                    <div className='d-flex justify-content-end'> 
                    <span className='generalText priceDetails'><FontAwesomeIcon icon={faEuroSign} size={'sm'} className="euroIcon" />
                    <span className="headerText price">{amount.value}</span>
                         / day</span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ListItem