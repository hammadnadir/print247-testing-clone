import Link from 'next/link';
import React from 'react';
import { Button, Container } from 'react-bootstrap';

function CustomizedBusiness() {
    return (
        <div className='Customized_Business'>
            <div className='background'>
                <Container>
                    <div className='CustomizedBusiness_detail'>
                        <p className='heading'>Get a Customized <br /> QR Code for your <br /> Business cards</p>
                        <p>Scannable Cards can instantly connect <br /> customer to your site</p>
                        <a href="tel:13462461639"><Button className='customized_btn'>Get your customized QR Code</Button></a>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default CustomizedBusiness;
