import React from 'react';
import { Container } from 'react-bootstrap';

function Collaborate() {

    const data = [
        {
            id: 1,
            image: "/image/collaborate1.webp",
            heading: "Choose a Product",
            para: "Choose a product based on your unique needs.",
        },
        {
            id: 2,
            image: "/image/collaborate2.webp",
            heading: "Get in Touch",
            para: "Share your project details with your designer.",
        },
        {
            id: 3,
            image: "/image/collaborate3.webp",
            heading: "Work With Designer",
            para: "Work with your designer on feedback and revisions.",
        },
        {
            id: 4,
            image: "/image/collaborate4.webp",
            heading: "Ready Design",
            para: "Your designer will provide you with files ready to print.",
        },
    ]

    return (
        <>
            <div className='main_collaborate'>
                <Container>
                    <h3>Collaborate With a Designer</h3>
                    <div className='inner_collaborate'>
                        {data.map((items, index) => {
                            return (
                                <div className='bottom_collaborate' key={index}>
                                    <div className='head_collaborate_image'>
                                        <div className='image_collaborate'>
                                            <img src={items.image} alt={items.heading}/>
                                        </div>
                                        <div className='head_collaborate'>
                                            <h4>{items.heading}</h4>
                                            <p>{items.para}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Collaborate;
