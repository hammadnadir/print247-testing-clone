import { useRouter } from 'next/router'
import React from 'react'
import { Container } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'

function SocialSlider() {

    const router = useRouter()

    const changeDirection = router?.pathname === "/about-us"

    return (
        <div className='main_marquee'>
            <Container>
                <div className='social_marquee'>
                <Marquee direction={changeDirection ? "right" :  "left"}>
                        <img src="/image/Logos/logo1.png" alt="images" />
                        <img src="/image/Logos/logo2.png" alt="images" />
                        <img src="/image/Logos/logo3.png" alt="images" />
                        <img src="/image/Logos/logo4.png" alt="images" />
                        <img src="/image/Logos/logo5.png" alt="images" />
                        {/* <img src="/image/Logos/logo6.png" alt="images" /> */}
                        <img src="/image/Logos/logo7.png" alt="images" />
                        <img src="/image/Logos/logo8.png" alt="images" />
                        <img src="/image/Logos/logo9.png" alt="images" />
                    </Marquee>
                </div>
            </Container>
        </div>
    )
}

export default SocialSlider
