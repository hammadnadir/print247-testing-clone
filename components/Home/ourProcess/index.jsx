import { Steps } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function OurProcess() {

    const [hoveredStep, setHoveredStep] = useState(null);

    const steps = [
        {
            title: "Order",
            description: "You can place the custom order directly through our website.",
            defaultIcon: '/image/ourprocess/steric_black.svg',
            hoverIcon: '/image/ourprocess/steric_blue.svg',
        },
        {
            title: "Design",
            description: "Please choose from our portfolio of custom designs or provide a certain layout, pattern, logo, or artwork.",
            defaultIcon: '/image/ourprocess/steric_black.svg',
            hoverIcon: '/image/ourprocess/steric_blue.svg',
        },
        {
            title: "Approve",
            description: "You will get an email as a confirmation once you finalize the custom design.",
            defaultIcon: '/image/ourprocess/steric_black.svg',
            hoverIcon: '/image/ourprocess/steric_blue.svg',
        },
        {
            title: "Production",
            description: "Our team will develop the custom boxes tailor-made to your exclusive designs.",
            defaultIcon: '/image/ourprocess/steric_black.svg',
            hoverIcon: '/image/ourprocess/steric_blue.svg',
        },
        {
            title: "Delivery",
            description: "You will get the order delivered within two weeks after your confirmation.",
            defaultIcon: '/image/ourprocess/steric_black.svg',
            hoverIcon: '/image/ourprocess/steric_blue.svg',
        },
    ];

    return (
        <div className='main_our_process'>
            <Container>
                <div className='inner_our_process'>
                    <div className='steps_section'>
                        <h2 className='process_heading'>Our Process</h2>
                        <Steps
                            direction="vertical"
                            current={5}
                            items={steps.map((step, index) => ({
                                title: (
                                    <p className='process_tit'
                                        onMouseEnter={() => setHoveredStep(index)}
                                        onMouseLeave={() => setHoveredStep(null)}>
                                        {step.title}
                                    </p>
                                ),
                                description: (
                                    <p className='process_des'
                                        onMouseEnter={() => setHoveredStep(index)}
                                        onMouseLeave={() => setHoveredStep(null)}>
                                        {step.description}
                                    </p>
                                ),
                                icon: (
                                    <img src={hoveredStep === index ? step.hoverIcon : step.defaultIcon}
                                        className={`custom-icon ${hoveredStep === index ? 'blue' : 'black'}`}
                                        onMouseEnter={() => setHoveredStep(index)}
                                        onMouseLeave={() => setHoveredStep(null)} />
                                ),
                            }))}
                        />
                    </div>
                    <div className='main_great_team'>
                        <h2 className='great_team_heading'>A Great Team of Experts Makes Us A Leading Packaging Manufacturer</h2>
                        <p className='great_team_para'>Our printing and packaging company is loaded with a lot of Industry-wise packaging specialists. Let us mention a few of the most well-known Packaging Veterans who are part of our team.</p>
                        <div className='main_grid_team_box'>
                            <div className='team_box_quote'>
                                <p className='team_box_para_quote'>Looking for something else we can help with?</p>
                                <Link href="/custom-quote"><button>Request a custom quote</button></Link>
                            </div>
                            <div className='grid_team_box'>
                                <div className='team_box1'>
                                    <p className='team_box_para'>Branded Packaging Consultants</p>
                                </div>
                                <div className='team_box2'>
                                    <p className='team_box_para'>Packaging Boxes Experts</p>
                                </div>
                                <div className='team_box3'>
                                    <p className='team_box_para'>Mylar Bags Specialists</p>
                                </div>
                                <div className='team_box4'>
                                    <p className='team_box_para'>Wholesale Custom Packaging Strategists</p>
                                </div>
                                <div className='team_box5'>
                                    <p className='team_box_para'>Personalized Packaging Analysts</p>
                                </div>
                                <div className='team_box6'>
                                    <p className='team_box_para'>Labels & Stickers Designers</p>
                                </div>
                            </div>
                        </div>
                        {/* <p className='printed_para'>
                            So, it is easy and effortless to talk to the right packaging professional at our company. Knowledge sharing, along with 100% packaging assistance and guidance, has made us one of the top favorite custom packaging companies in the USA.
                        </p> */}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default OurProcess;