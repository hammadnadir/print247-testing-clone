import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const valuesData = [
    {
        title: 'Quality',
        // imageSrc: '/image/quality.png',
        imageSrc: '/image/qualty.gif',
        // imageWidth: 76,
        // imageHeight: 88,
        description: 'Ensuring the highest standards in packaging materials and processes to deliver reliable and durable solutions.',
    },
    {
        title: 'Innovation',
        // imageSrc: '/image/customization.png',
        imageSrc: '/image/inovation.gif',
        // imageWidth: 74,
        // imageHeight: 74,
        description: 'Constantly seeking and implementing new and creative packaging solutions to meet evolving market needs.',
    },
    {
        title: 'Integrity',
        // imageSrc: '/image/success.png',
        imageSrc: '/image/intgrity.gif',
        // imageWidth: 63,
        // imageHeight: 74,
        description: 'Upholding honesty, transparency, and ethical business practices in all interactions with clients, suppliers, and employees.',
    },
];

function Value() {
    return (
        <div className='main_value'>
            <Container>
                <h1>Print247.us Core Values</h1>
                <div>
                    <Row>
                        {valuesData.map((value, index) => (
                            <Col className='bottom' xl={4} md={6} xs={12} key={index}>
                                <div className='head_and_image'>
                                    <div className='image'>
                                        <img src={value.imageSrc} width={value.imageWidth} height={value.imageHeight} alt='core image'/>
                                    </div>
                                    <div className='head'>
                                        <h3>{value.title}</h3>
                                        <p>{value.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Value;