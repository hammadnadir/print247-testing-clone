import Link from 'next/link';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function BannerSection() {

    const { pages } = useSelector((state) => state.product);

    const bannerImage = pages?.mian_image?.banner_image ? JSON.parse(pages?.mian_image?.banner_image)?.[0] : "";

    return (
        <>
            <div className='banner_section_image'>
                <div className='background_imge' style={{ backgroundImage: `url(${bannerImage})` }}>
                    <Container>
                        <div className='bannersection_detail'>
                            <h1>{pages?.mian_image?.heading}</h1>
                            <p>{pages?.mian_image?.description}</p>
                            <Link href="/about-us"><Button className='bannersection_btn'>Learn More</Button></Link>
                        </div>
                    </Container>
                </div>
            </div >
        </>
    );
}

export default BannerSection;

