import React, { useEffect } from 'react'
import { fetchOfferList } from '../redux/slices/offerList'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import ListItem from './Item'

const OfferList = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.offerList.list)

    useEffect(() => {
        dispatch(fetchOfferList())
    }, [])

    useEffect(() => {
        console.log('data', data?.offers)
    }, [data])

    return (
        <Container className="mt-3 mb-3">
            {
                data?.offers.length > 0 && (
                    <Row>
                        {
                            data.offers.map(item => {
                                return  <ListItem key={item.id} data={item} />
                            })
                        }
                    </Row>
                )
            }
        </Container>
    )
}

export default OfferList