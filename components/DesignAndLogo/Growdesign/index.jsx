import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';

function Growdesign() {

    const data = [
        {
            id: 1,
            image: "/image/needdesign1.webp",
            heading: "Business Card Design",
            para: "Get an Expert",
        },
        {
            id: 2,
            image: "/image/needdesign2.webp",
            heading: "Logo & brand identity pack",
            para: "Get an Expert"
        },
        {
            id: 3,
            image: "/image/needdesign3.webp",
            heading: "Flyer Design",
            para: "Get an Expert"
        },
    ]


    return (
        <>
            <div className='main_growdesign'>
                <Container>
                    <h6>Grow with <span> Great Design</span></h6>
                    <p>No matter what your business needs, we can connect you with a creative expert to make your business look and feel
                        professional, because good design makes great business.</p>
                    <div className='experttalk'>
                        <a href="tel:13462461639"><button>Talk to an Expert</button></a>
                    </div>

                    <div className='main_needdesign'>
                        <h6>Choose What You Need Designed</h6>
                        <div className='inner_needdesign'>
                            {data.map((items, index) => {
                                return (
                                    <div className='bottom_design' key={index}>
                                        <div className='head_sub_needdesign'>
                                            <div className='image_need'>
                                                <Image src={items.image} width={490} height={535} alt={items.heading}/>
                                            </div>

                                            <div className='head_need'>
                                                <h3>{items.heading}</h3>
                                                <a href="tel:13462461639"><h4>{items.para} <Image style={{ paddingLeft: "5px" }} src="/image/expert_arrow.png" width={20} height={13} /></h4></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }

                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Growdesign;
