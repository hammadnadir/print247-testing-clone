import Image from 'next/image'
import React from 'react'
import { Container, Row , Col} from 'react-bootstrap';

function PackBox() {

    const data = [
        {
            id: 1,
            image: "/image/packbox1.png",
        },
        {
            id: 2,
            image: "/image/packbox2.png",
        },
        {
            id: 3,
            image: "/image/packbox3.png",
        },
        {
            id: 4,
            image: "/image/packbox4.png",
        },
    ]


  return (
    <div className='main_packbox'>
               <Container>
                <Row className='pack_box'>
                    {data.map((items, index) => {
                        return (
                            <Col lg={6} md={6} xs={12} className='bottom' key={index}>
                                <div className="pack_and_image">
                                    <div className='image'>
                                        <Image src={items.image} width={804} height={710} alt='packbox image' />
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

export default PackBox