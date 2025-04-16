import Image from 'next/image';
import React from 'react';
import { Container } from 'react-bootstrap';

function Designoption() {

    const data = [
        {
            id: 1,
            image: "/image/designoption1.webp",
            heading: "Letterhead Design",
        },
        {
            id: 2,
            image: "/image/designoption2.webp",
            heading: "Retractable Banner Design",
        },
        {
            id: 3,
            image: "/image/designoption3.webp",
            heading: "Wedding Invitation Design",
        },
        {
            id: 4,
            image: "/image/designoption4.webp",
            heading: "Folded leaflet design",
        },
    ]

    return (
        <>
            <div className='main_designoption'>
                <Container>
                    <h3>More Design Options</h3>
                    <div className='inner_designoption'>
                        {data.map((items, index) => {
                            return (
                                <div className='bottom_designoption' key={index}>
                                    <a href="tel:13462461639">
                                        <div className='head_designoption_image'>
                                            <div className='image_designoption'>
                                                <Image src={items.image} width={350} height={416} alt={items.heading}/>
                                            </div>
                                            <div className='head_designoption'>
                                                <h3>{items.heading}</h3>
                                            </div>
                                        </div>
                                    </a>
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

export default Designoption;
