import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';

function Businessdesign() {
    return (
        <>
            <div className='main_businessdesign'>
                <Container>
                    <div className='inner_businessdesign'>
                        <div className='image_businessdesign'>
                            <Image src="/image/businessdesign.webp" width={700} height={500} alt='business design image'></Image>
                        </div>
                        <div className='detail_businessdesign'>
                            <h3>Your Business Deserves Great Design</h3>
                            <p>Our reliable community designers has assissted the countless businesses. They are launching, growing, expanding with custom high quality design solution including logos and packaging. </p>
                            <div className='brand_button'>
                               <Link href="/contact-us"><button>Create your Brand</button></Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Businessdesign;
