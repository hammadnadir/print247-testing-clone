import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function SubFaq() {

    const { pages } = useSelector((state) => state.product);

    const router = useRouter()
    const [show, setShow] = useState(1);

    const handleClick = (id) => {
        setShow((prevShow) => (prevShow === id ? "" : id));
    };

    const Faqs = router?.asPath.includes("/category/mylar-bags") ? "Frequently asked questions" : router?.asPath.includes("/category/labels-stickers") ? "Custom Stickers and Labels FAQs" : router?.asPath.includes("/category/signs-banners") ? "Signage FAQs" : router?.asPath.includes("/category/business-cards") && "Business Cards FAQs"

    return (
        <div className='sub-faq'>
            <div className='main_faq'>
                <Container>
                    <div className='Faq_section'>
                        <h3>{Faqs}</h3>
                        <div>
                            {pages?.faq?.map((item) => (
                                <div key={item.id} className='faq_question1'>
                                    <div style={{ width: "100%" }}>
                                        <div className='accordianss' onClick={() => handleClick(item.id)}>
                                            <summary className='heading'>{item.question}</summary>
                                            {show === item.id && (
                                                <div className='icon_style'>
                                                    <Image src='/image/right.png' alt='right image' layout='fill' objectFit='cover' objectPosition='center' />
                                                </div>
                                            )}
                                            {show !== item.id && (
                                                <div className='icon_style2'>
                                                    <Image src='/image/bottom.png' alt='bottom image' layout='fill' objectFit='cover' objectPosition='center' />
                                                </div>
                                            )}
                                        </div>
                                        <p className={`${show === item.id ? "para1" : "para"}`}> {item.answer}</p>
                                        <hr />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default SubFaq