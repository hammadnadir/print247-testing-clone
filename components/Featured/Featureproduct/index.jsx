import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';

function Featureproduct() {

    const { catalogData } = useSelector((state) => state.catalog);

    const length = catalogData.data ? catalogData?.data?.length - 1 : 0
    const data = catalogData?.data ? [...catalogData.data].slice(0, length) : [];

    return (
        <div className='main_featureproduct'>
            <Container>
                <Row className='main_box'>
                    {Array.isArray(data) && data?.length > 0 && data?.map((items, index) => {
                        return (
                            <Col lg={4} md={6} xs={12} className='bottom' key={index}>
                                <div className="feature_and_image">
                                    <div className='image'>
                                        <img src={items.img} width={529} height={621} alt='feature image'/>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Featureproduct