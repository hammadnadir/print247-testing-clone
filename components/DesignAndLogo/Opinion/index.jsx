import Image from 'next/image';
import React from 'react';
import { Container } from 'react-bootstrap';

function Opinion() {
    return (
        <>
            <div className='main_opinion'>
                <Container>
                    <div className='inner_opinion'>
                        <h4>Opinions Matter</h4>
                        <p>Organizations of all sizes and in many industries have used Print247.us for high-quality
                            printing to increase their productivity.</p>
                        <div className='main_box'>
                            <div className='images_box'>
                                <img className='mainimg' src="/image/mainbox3.webp" alt='box image'/>
                                <div className='side_images'>
                                    <img className='innerimg' src="/image/mainbox1.webp" alt='box image'/>
                                    <img className='innerimg' src="/image/mainbox2.webp" alt='box image'/>
                                </div>
                            </div>
                            <div className='main_box2'>
                                <div className='main_box_data'>
                                    <h6>Print247.us is a platform with a good name and a very good service…</h6>
                                    <p>Where entrepreneurs can easily find the right design for their company. The book cover for us was a very important part of the success of the book. Therefore, we entrusted this to experts and ended up being very happy with the result.</p>
                                    <div className='right_data'>
                                        <span>Haywire <br /><small>Coffee Roaster</small></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Opinion;
