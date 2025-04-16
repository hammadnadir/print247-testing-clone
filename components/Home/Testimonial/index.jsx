import React from 'react'
import { Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

function Testimonial() {

    return (
        <div>
            <Container>
                <div className='testimonial_heading'>
                    <h2>Partners' Words</h2>
                </div>
            </Container>
            <div className='main_testimonial'>
                <Marquee direction='right'>
                    <div className='card_testimonial'>
                        <img className='testimonial_brands' src="/home/latestTestimonial/1.webp" alt="brands icons" />
                        <p className='testimonial_date'>May 25, 2023 <small>|</small> <img src="/image/testimonial/testimonial_verified.png" alt="verified icon" /> Verified Buyer</p>
                        <img className='testimonial_star' src="/image/testimonial/testimonial_star.png" alt="stars reviews" />
                        <div className='testimonial_review'>
                            <p className='review_para'>Very impressive; great job by the team. Absolutely top-notch packaging. Simply the best. These guys know how to deliver quality boxes and bags. Surely, will work again.</p>
                        </div>
                    </div>
                    <div className='card_testimonial'>
                        <img className='testimonial_brands' src="/home/latestTestimonial/2.webp" alt="brands icons" />
                        <p className='testimonial_date'>Jan 2, 2024 <small>|</small> <img src="/image/testimonial/testimonial_verified.png" alt="verified icon" /> Verified Buyer</p>
                        <img className='testimonial_star' src="/image/testimonial/testimonial_star.png" alt="stars reviews" />
                        <div className='testimonial_review'>
                            <p className='review_para'>Y{"’"}all the packagers I was looking for. Just received the shipment of packaging boxes for my bakery outlet. Material is durable. Worth every penny.</p>
                        </div>
                    </div>
                    <div className='card_testimonial'>
                        <img className='testimonial_brands' src="/home/latestTestimonial/3.webp" alt="brands icons" />
                        <p className='testimonial_date'>Feb 11, 2024 <small>|</small> <img src="/image/testimonial/testimonial_verified.png" alt="verified icon" /> Verified Buyer</p>
                        <img className='testimonial_star' src="/image/testimonial/testimonial_star.png" alt="stars reviews" />
                        <div className='testimonial_review'>
                            <p className='review_para'>John, you have truly exemplified the excellence in packaging. Courier just dropped the labels. Every detail is there as I{"’"}d asked, and you did it even better.</p>
                        </div>
                    </div>
                    <div className='card_testimonial'>
                        <img className='testimonial_brands' src="/home/latestTestimonial/4.webp" alt="brands icons" />
                        <p className='testimonial_date'>March 05, 2024 <small>|</small> <img src="/image/testimonial/testimonial_verified.png" alt="verified icon" /> Verified Buyer</p>
                        <img className='testimonial_star' src="/image/testimonial/testimonial_star.png" alt="stars reviews" />
                        <div className='testimonial_review'>
                            <p className='review_para'>This is my second time working with you people. You{"’"}ve flabbergasted me with the passion of your craft. Highly recommended to anyone looking for effective packaging products.</p>
                        </div>
                    </div>
                    <div className='card_testimonial'>
                        <img className='testimonial_brands' src="/home/latestTestimonial/5.webp" alt="brands icons" />
                        <p className='testimonial_date'>Dec 11, 2023 <small>|</small> <img src="/image/testimonial/testimonial_verified.png" alt="verified icon" /> Verified Buyer</p>
                        <img className='testimonial_star' src="/image/testimonial/testimonial_star.png" alt="stars reviews" />
                        <div className='testimonial_review'>
                            <p className='review_para'>I have made bespoke boxes many times before. Never satisfied with the designs. But here I got the solution. Practical design truly enhanced the product experience.</p>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default Testimonial