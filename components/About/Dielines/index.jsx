import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux';

function Dielines() {

    const { aboutData } = useSelector((state) => state.about);

     // Parse the image URLs array
     const imageUrls = aboutData?.data?.dieline?.image ? JSON.parse(aboutData?.data?.dieline?.image) : [];

    return (
        <div className='main_dielines'>
            <Container>
                <div className='head_dielines'>
                    <h1>{aboutData?.data?.dieline?.name}</h1>
                </div>
                <div className='main_dielines_images'>
                    <div className='dielines_images'>
                        <Image className='die_img' src={imageUrls[0]} width={899} height={757} alt='dieline image'/>
                    </div>
                    <div className='dielines_images'>
                        <Image className='die1_img' src={imageUrls[1]} width={364} height={267} alt='dieline image'/>
                        <Image className='die1_img' src={imageUrls[2]} width={364} height={267} alt='dieline image'/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Dielines