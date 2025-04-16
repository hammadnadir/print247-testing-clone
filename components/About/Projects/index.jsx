import React from 'react'
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

function Projects() {

    const { aboutData } = useSelector((state) => state.about);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: <img className='one_image' src="/image/leftarrow.png" alt="" width={69} height={69} />,
        // nextArrow: <img className='one_image' src="/image/rightarrow.png" alt="" width={69} height={69} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='main_project'>
            <h1>Related Projects</h1>

            <Slider {...settings}>
                <div className='visual_image'>
                    <img className='vis_img' src="/home/banner11.webp" layout="fill" objectFit="cover" objectPosition="center" alt='arrow image'/>
                    <div className='visual_data '>
                        <h4>Up next..</h4>
                        <h3>MATCH AMOR</h3>
                        <p>Visual Identity and Packaging <br /> Design for Alcoken</p>
                    </div>
                </div>
                <div className='visual_image'>
                    <img className='vis_img' src="/home/banner21.webp" layout="fill" objectFit="cover" objectPosition="center" alt='visual banner image' />
                    <div className='visual_data '>
                        <h4>Up next..</h4>
                        <h3>MATCH AMOR</h3>
                        <p>Visual Identity and Packaging <br /> Design for Alcoken</p>
                    </div>
                </div>
                <div className='visual_image'>
                    <img className='vis_img' src="/home/banner31.webp" layout="fill" objectFit="cover" objectPosition="center" alt='visual banner image'/>
                    <div className='visual_data '>
                        <h4>Up next..</h4>
                        <h3>MATCH AMOR</h3>
                        <p>Visual Identity and Packaging <br /> Design for Alcoken</p>
                    </div>
                </div>
                <div className='visual_image'>
                    <img className='vis_img' src="/home/banner41.webp" layout="fill" objectFit="cover" objectPosition="center" alt='visual banner image'/>
                    <div className='visual_data '>
                        <h4>Up next..</h4>
                        <h3>MATCH AMOR</h3>
                        <p>Visual Identity and Packaging <br /> Design for Alcoken</p>
                    </div>
                </div>
                <div className='visual_image'>
                    <img className='vis_img' src="/home/banner51.webp" layout="fill" objectFit="cover" objectPosition="center" alt='visual banner image'/>
                    <div className='visual_data '>
                        <h4>Up next..</h4>
                        <h3>MATCH AMOR</h3>
                        <p>Visual Identity and Packaging <br /> Design for Alcoken</p>
                    </div>
                </div>
                <div className='visual_image'>
                    <img className='vis_img' src="/home/banner61.webp" layout="fill" objectFit="cover" objectPosition="center" alt='visual banner image'/>
                    <div className='visual_data '>
                        <h4>Up next..</h4>
                        <h3>MATCH AMOR</h3>
                        <p>Visual Identity and Packaging <br /> Design for Alcoken</p>
                    </div>
                </div>
                <div className='visual_image'>
                    <img className='vis_img' src="/home/banner71.webp" layout="fill" objectFit="cover" objectPosition="center" alt='visual banner image'/>
                    <div className='visual_data '>
                        <h4>Up next..</h4>
                        <h3>MATCH AMOR</h3>
                        <p>Visual Identity and Packaging <br /> Design for Alcoken</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Projects