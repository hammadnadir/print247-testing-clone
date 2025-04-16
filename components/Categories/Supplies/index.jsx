import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Supplies() {

    const { pages } = useSelector((state) => state.product)

    // const suppliesMain = Array.isArray(pages?.catgeory) ? pages?.catgeory.filter((item) => item?.slug === "packaging-supplies") : [];
    const suppliesMain = pages?.catgeory;
    const supplies = suppliesMain ? suppliesMain?.[0]?.category_products : []

    return (
        <div className='main_supplies'>
            <h1>Packaging Supplies</h1>
            <Container>
                <div className='supplies_box'>
                    {supplies?.map((items, index) => { 
                        return (
                            <div className='bottom' key={index}>
                                <div className='head_and_image'>
                                    <div className='image'>
                                        <Link href={`/${items?.slug}`}><img src={items?.photo?.[0]} width={380} height={416} alt={items.title} /></Link>
                                    </div>
                                    <div className='head'>
                                        <h3>{items.title}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </Container>
        </div>
    )
}

export default Supplies