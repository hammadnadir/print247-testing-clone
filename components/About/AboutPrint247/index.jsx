import React from 'react'
import { Container } from 'react-bootstrap'

function AboutPrint247() {
    return (
        <div className='about_bg'>
            <Container>
                <div className='left_arrow_about'>
                    <img src="/image/About/left_arrow_about.png" alt="left arrow icon" />
                </div>
                <div className="about_data">
                    <div className='main_about_r' style={{ position: "relative" }}>
                        <h3>About Print247</h3>
                        <div className='about_r'>
                            <img src="/image/About/about_r.png" alt="at the rate icon" />
                        </div>
                    </div>
                    <h2>Helping small business grow big</h2>
                    <p className='para_about1'>Welcome to print247-testing-clone.vercel.app, where innovation meets precision in the world of printing and packaging.
                        With a passion for excellence and a commitment to delivering top-notch services,
                        print247-testing-clone.vercel.app stands as your trusted partner in the realm of bespoke printing solutions.
                        Our journey is rooted in a dedication to quality craftsmanship and cutting-edge technology,
                        ensuring that each project we undertake reflects the highest standards of precision and creativity.</p>
                    <p className='para_about2'>print247-testing-clone.vercel.app was established in 2020, in this short period print247-testing-clone.vercel.app swiftly captured customer
                        attention with its diverse array of customizable business marketing products.
                        Whether providing assistance to those in need or delivering a straightforward experience
                        for those with clear preferences. We are bringing your visions to life with a team of
                        experienced professionals who combine industry expertise with a customer-centric approach,
                        working closely with you to understand your unique requirements and deliver tailored solutions.
                        Whether you{"'"}re looking for eye-catching packaging designs, customized promotional materials,
                        or high-quality printed collateral, print247-testing-clone.vercel.app is your go-to destination for turning ideas
                        into tangible, impactful realities.</p>
                </div>
                <div className='right_arrow_about1'>
                    <img src="/image/About/right_arrow_about1.png" alt="arrow icon" />
                </div>
                <div className='right_arrow_about2'>
                    <img src="/image/About/right_arrow_about2.png" alt="arrow icon" />
                </div>
            </Container>
        </div>
    )
}

export default AboutPrint247
