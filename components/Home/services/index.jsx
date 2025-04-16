import React from 'react'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

function Services() {

    const { products, homeData } = useSelector((state) => state.home);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    };

    return (
        <>
            <div className='main_services_home'>
                <Slider {...settings}>
                    <div className='services_home'>
                        <Container>
                            <div className="image-text-container">

                                <div className="image-container">
                                    {/* <img src={homeData?.homepage && homeData?.homepage[0]?.image4} alt="Image " width={580 * 0.8} height={533 * 0.8} /> */}
                                    <img src="/home/testimonial/1.webp" alt="Image " width={580} height={533} />
                                </div>
                                <div className="text-container">
                                    <div style={{ marginBottom: "30px" }}>
                                        <img style={{ width: "50px" }} src="/home/commas.webp" alt="comma icon" />
                                    </div>
                                    {/* <h2>{homeData?.homepage && homeData?.homepage[0]?.description4}</h2>
                                    <p>{homeData?.homepage && homeData?.homepage[0]?.heading6}</p> */}
                                    <h2>They did a nice job on this custom Mylar bag order. Very high quality printing, overall I am pleased with the fast turnaround time and the results. So happy with how these turned out!!!</h2>
                                    <p>Rep Porter // Chief Executive officer</p>
                                </div>
                            </div>
                        </Container>
                    </div>

                    <div className='services_home'>
                        <Container>
                            <div className="image-text-container">

                                <div className="image-container">
                                    {/* <img src={homeData?.homepage && homeData?.homepage[0]?.image4} alt="Image " width={580 * 0.8} height={533 * 0.8} /> */}
                                    <img src="/home/testimonial/2.webp" alt="Image " width={580} height={533} />
                                </div>
                                <div className="text-container">
                                    <div style={{ marginBottom: "30px" }}>
                                        <img style={{ width: "50px" }} src="/home/commas.webp" alt="comma icon" />
                                    </div>
                                    {/* <h2>{homeData?.homepage && homeData?.homepage[0]?.description4}</h2>
                                    <p>{homeData?.homepage && homeData?.homepage[0]?.heading6}</p> */}
                                    <h2>I love print247-testing-clone.vercel.app! They do great quality prints and are very punctual in their delivery time. Our shipping products turned out great and print247-testing-clone.vercel.app is my go-to printing company.  As, they are in an excellent quality!!!. The box was in perfect condition as expected.</h2>
                                    <p>Dylan Bonell // CEO</p>
                                </div>
                            </div>
                        </Container>
                    </div>

                    <div className='services_home'>
                        <Container>
                            <div className="image-text-container">

                                <div className="image-container">
                                    {/* <img src={homeData?.homepage && homeData?.homepage[0]?.image4} alt="Image " width={580 * 0.8} height={533 * 0.8} /> */}
                                    <img src="/home/testimonial/3.webp" alt="Image " width={580} height={533} />
                                </div>
                                <div className="text-container">
                                    <div style={{ marginBottom: "30px" }}>
                                        <img style={{ width: "50px" }} src="/home/commas.webp" alt="comma icon" />
                                    </div>
                                    {/* <h2>{homeData?.homepage && homeData?.homepage[0]?.description4}</h2>
                                    <p>{homeData?.homepage && homeData?.homepage[0]?.heading6}</p> */}
                                    <h2>print247-testing-clone.vercel.app is a fantastic company to work with! We trust them with our brands and our clients brands. Amazing attention to detail, quick service at a great price. And their customer service is one of the best PEO I have ever worked with (in any industry).</h2>
                                    <p>Barry Vuong // CEO</p>
                                </div>
                            </div>
                        </Container>
                    </div>

                    <div className='services_home'>
                        <Container>
                            <div className="image-text-container">

                                <div className="image-container">
                                    {/* <img src={homeData?.homepage && homeData?.homepage[0]?.image4} alt="Image " width={580 * 0.8} height={533 * 0.8} /> */}
                                    <img src="/home/testimonial/4.webp" alt="Image " width={580} height={533} />
                                </div>
                                <div className="text-container">
                                    <div style={{ marginBottom: "30px" }}>
                                        <img style={{ width: "50px" }} src="/home/commas.webp" alt="comma icon" />
                                    </div>
                                    {/* <h2>{homeData?.homepage && homeData?.homepage[0]?.description4}</h2>
                                    <p>{homeData?.homepage && homeData?.homepage[0]?.heading6}</p> */}
                                    <h2> From start to finish, they went above and beyond to ensure that my printing needs were met with the utmost quality and care.
                                        The turnaround time was incredibly fast, which was crucial for my business. They worked efficiently to ensure that my project was completed within my tight deadline, without sacrificing quality.</h2>
                                    <p>Buster Isennock// Chief Executive officer</p>
                                </div>
                            </div>
                        </Container>
                    </div>

                    <div className='services_home'>
                        <Container>
                            <div className="image-text-container">

                                <div className="image-container">
                                    {/* <img src={homeData?.homepage && homeData?.homepage[0]?.image4} alt="Image " width={580 * 0.8} height={533 * 0.8} /> */}
                                    <img src="/home/testimonial/5.webp" alt="Image " width={580} height={533} />
                                </div>
                                <div className="text-container">
                                    <div style={{ marginBottom: "30px" }}>
                                        <img style={{ width: "50px" }} src="/home/commas.webp" alt="comma icon" />
                                    </div>
                                    {/* <h2>{homeData?.homepage && homeData?.homepage[0]?.description4}</h2>
                                    <p>{homeData?.homepage && homeData?.homepage[0]?.heading6}</p> */}
                                    <h2>The quality of the prints themselves was outstanding. The colors were vibrant and true to my original designs, and the printing was crisp and clear. The materials they used were of the highest quality, ensuring that the finished product would be durable and long-lasting.</h2>
                                    <p>Jacob Davis// CEO</p>
                                </div>
                            </div>
                        </Container>
                    </div>

                    <div className='services_home'>
                        <Container>
                            <div className="image-text-container">

                                <div className="image-container">
                                    {/* <img src={homeData?.homepage && homeData?.homepage[0]?.image4} alt="Image " width={580 * 0.8} height={533 * 0.8} /> */}
                                    <img src="/home/testimonial/6.webp" alt="Image " width={580} height={533} />
                                </div>
                                <div className="text-container">
                                    <div style={{ marginBottom: "30px" }}>
                                        <img style={{ width: "50px" }} src="/home/commas.webp" alt="comma icon" />
                                    </div>
                                    {/* <h2>{homeData?.homepage && homeData?.homepage[0]?.description4}</h2>
                                    <p>{homeData?.homepage && homeData?.homepage[0]?.heading6}</p> */}
                                    <h2>Amazing quality work and very courteous service and totally affordable.
                                        Exactly what i needed. I will look forward to working on future projects with her and print247-testing-clone.vercel.app in general.</h2>
                                    <p>Gregory Balotin // CEO</p>
                                </div>
                            </div>
                        </Container>
                    </div>

                    <div className='services_home'>
                        <Container>
                            <div className="image-text-container">

                                <div className="image-container">
                                    {/* <img src={homeData?.homepage && homeData?.homepage[0]?.image4} alt="Image " width={580 * 0.8} height={533 * 0.8} /> */}
                                    <img src="/home/testimonial/7.webp" alt="Image " width={580} height={533} />
                                </div>
                                <div className="text-container">
                                    <div style={{ marginBottom: "30px" }}>
                                        <img style={{ width: "50px" }} src="/home/commas.webp" alt="comma icon" />
                                    </div>
                                    {/* <h2>{homeData?.homepage && homeData?.homepage[0]?.description4}</h2>
                                    <p>{homeData?.homepage && homeData?.homepage[0]?.heading6}</p> */}
                                    <h2>These stickers i received were absolutely beautiful and the team worked well for my needs! I{"’"}m so excited about order. Love the quality, corporative team, fast shipping will definitely be using print247-testing-clone.vercel.app for all my business needs!</h2>
                                    <p>Ali Naseer // CEO</p>
                                </div>
                            </div>
                        </Container>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Services
