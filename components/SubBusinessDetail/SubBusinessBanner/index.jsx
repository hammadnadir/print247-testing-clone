import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function SubBusinessBanner() {

    const { products } = useSelector((state) => state.home)
    
    return (
        <div className='main_Business_banner'>
            <div className='background_image'>
                <Image src="/image/bannersub.png" alt="Banner Image" layout='fill' objectFit='cover' objectPosition='center' />
            </div>
            <div className='top_sectionb'>
                <Container>
                    <div className='banner_detail'>
                        <h1>Business Cards</h1>
                        <h2>with Scannable QR Code</h2>
                        <p>Customizable Designs, Shapes and more. Find the right card for you</p>
                       
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default SubBusinessBanner