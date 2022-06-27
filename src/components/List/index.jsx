import React, { Fragment, useEffect } from 'react'
import { fetchOfferList } from '../../redux/slices/offerList'
import { useDispatch, useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'
import ListItem from '../Item'

const OfferList = () => {
    const dispatch = useDispatch()
    const { list: { data }, loading } = useSelector(state => state.offerList)

    useEffect(() => {
        dispatch(fetchOfferList())
    }, [])

    return (
        <div className="mb-3 p-4">
            {loading && <div className='d-flex justify-content-center'><span>Loading...</span></div>}
            {
                data?.offers?.length > 0 && (
                    <Fragment>
                        <h6 className="listInfo">{data.offers.length}<span className="smallHeaderText m-1" data-testid="offers"> offers</span></h6>
                        <Row>
                            {
                                data.offers.map(item => {
                                    return <ListItem key={item.id} data={item} />
                                })
                            }
                        </Row>
                    </Fragment>
                )
            }
        </div>
    )
}

export default OfferList