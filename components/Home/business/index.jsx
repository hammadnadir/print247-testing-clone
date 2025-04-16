import React from 'react'
import { useSelector } from 'react-redux';
import Marquee from 'react-fast-marquee';

function Business() {

    const { products, homeData } = useSelector((state) => state.home);

    return (
        <div className='main_business'>
            <div className='business'>
                <h2>1,000,000+ business professionals trust us with their printing</h2>
                <h4>{homeData?.homepage && homeData?.homepage[0]?.description3}</h4>
                <div className='brand'>

                    <Marquee>
                        <div className='logos_cm'>
                            <img src="/home/logos/1.webp" alt="logos image" />
                            <img src="/home/logos/2.webp" alt="logos image" />
                            <img src="/home/logos/3.webp" alt="logos image" />
                            <img src="/home/logos/4.webp" alt="logos image" />
                            <img src="/home/logos/5.webp" alt="logos image" />
                        </div>
                    </Marquee>
                    <Marquee direction='right'>
                        <div className='logos_cm'>
                            <img src="/home/logos/6.webp" alt="logos image" />
                            <img src="/home/logos/7.webp" alt="logos image" />
                            <img src="/home/logos/8.webp" alt="logos image" />
                            <img src="/home/logos/9.webp" alt="logos image" />
                            <img src="/home/logos/10.webp" alt="logos image" />
                        </div>
                    </Marquee>
                    <Marquee>
                        <div className='logos_cm'>
                            <img src="/home/logos/11.webp" alt="logos image" />
                            <img src="/home/logos/12.webp" alt="logos image" />
                            <img src="/home/logos/13.webp" alt="logos image" />
                            <img src="/home/logos/14.webp" alt="logos image" />
                            <img src="/home/logos/15.webp" alt="logos image" />
                            <img src="/home/logos/16.webp" alt="logos image" />
                        </div>
                    </Marquee>
                    {/* <img className='desktop_image' src={homeData?.homepage && homeData?.homepage[0]?.image3} width={1109} height={326}></img> */}
                    {/* <img className='desktop_image' src="https://print247.biztekapps.com/images/test/customers.webp" width={1109} height={326}></img> */}
                </div>

            </div>
        </div>
    )
}

export default Business
