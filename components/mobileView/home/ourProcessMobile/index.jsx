import { Steps } from 'antd';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

function OurProcessMobile() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % 5);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='main_our_process_mobile'>
            <Container>
                <div className='inner_our_process_mobile'>
                    <div className='steps_section_mobile'>
                        <h2 className='process_heading_mobile'>Our Process</h2>
                        <Steps
                            direction="vertical"
                            current={current}
                            items={[
                                {
                                    title: <><p className='process_tit_mobile'>Order</p></>,
                                    description: <><p className='process_des_mobile'>You can place the custom order directly through our website.</p></>,
                                    icon: current >= 0
                                        ? <img src='/image/ourprocess/steric_blue.svg' className="custom-icon blue"></img>
                                        : <img src='/image/ourprocess/steric_black.svg' className="custom-icon black"></img>,
                                },
                                {
                                    title: <><p className='process_tit_mobile'>Design</p></>,
                                    description: <><p className='process_des_mobile'>Please choose from our portfolio of custom designs or provide a certain layout, pattern, logo, or artwork.</p></>,
                                    icon: current >= 1
                                        ? <img src='/image/ourprocess/steric_blue.svg' className="custom-icon blue"></img>
                                        : <img src='/image/ourprocess/steric_black.svg' className="custom-icon black"></img>,
                                },
                                {
                                    title: <><p className='process_tit_mobile'>Approve</p></>,
                                    description: <><p className='process_des_mobile'>You will get an email as a confirmation once you finalize the custom design.</p></>,
                                    icon: current >= 2
                                        ? <img src='/image/ourprocess/steric_blue.svg' className="custom-icon blue"></img>
                                        : <img src='/image/ourprocess/steric_black.svg' className="custom-icon black"></img>,
                                },
                                {
                                    title: <><p className='process_tit_mobile'>Production</p></>,
                                    description: <><p className='process_des_mobile'>Our team will develop the custom boxes tailor-made to your exclusive designs.</p></>,
                                    icon: current >= 3
                                        ? <img src='/image/ourprocess/steric_blue.svg' className="custom-icon blue"></img>
                                        : <img src='/image/ourprocess/steric_black.svg' className="custom-icon black"></img>,
                                },
                                {
                                    title: <><p className='process_tit_mobile'>Delivery</p></>,
                                    description: <><p className='process_des_mobile'>You will get the order delivered within two weeks after your confirmation.</p></>,
                                    icon: current >= 4
                                        ? <img src='/image/ourprocess/steric_blue.svg' className="custom-icon blue"></img>
                                        : <img src='/image/ourprocess/steric_black.svg' className="custom-icon black"></img>,
                                },
                            ]}
                        />
                    </div>
                    <div className='main_great_team_mobile'>
                        <h2 className='great_team_heading_mobile'>A Great Team of Experts Makes Us A Leading Packaging Manufacturer</h2>
                        <p className='great_team_para_mobile'>Our printing and packaging company is loaded with a lot of Industry-wise packaging specialists. Let us mention a few of the most well-known Packaging Veterans who are part of our team.</p>
                        <div className='main_grid_team_box_mobile'>
                            <div className='team_box_quote_mobile'>
                                <p className='team_box_para_quote_mobile'>Looking for something else we can help with?</p>
                                <Link href="/custom-quote"><button>Request a custom quote</button></Link>
                            </div>
                            <div className='grid_team_box_mobile'>
                                <div className='team_box1_mobile'>
                                    <p className='team_box_para_mobile'>Branded Packaging Consultants</p>
                                </div>
                                <div className='team_box2_mobile'>
                                    <p className='team_box_para_mobile'>Packaging Boxes Experts</p>
                                </div>
                                <div className='team_box3_mobile'>
                                    <p className='team_box_para_mobile'>Mylar Bags Specialists</p>
                                </div>
                                <div className='team_box4_mobile'>
                                    <p className='team_box_para_mobile'>Wholesale Custom Packaging Strategists</p>
                                </div>
                                <div className='team_box5_mobile'>
                                    <p className='team_box_para_mobile'>Personalized Packaging Analysts</p>
                                </div>
                                <div className='team_box6_mobile'>
                                    <p className='team_box_para_mobile'>Labels & Stickers Designers</p>
                                </div>
                            </div>
                        </div>
                        {/* <p className='printed_para_mobile'>
                            So, it is easy and effortless to talk to the right packaging professional at our company. Knowledge sharing, along with 100% packaging assistance and guidance, has made us one of the top favorite custom packaging companies in the USA.
                        </p> */}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default OurProcessMobile;