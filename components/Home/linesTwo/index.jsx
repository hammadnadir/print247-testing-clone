import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'

function LinesTwo() {

  return (
    <div className='why_choose_us'>
      <Container>
        <h2>A Big Why?</h2>
        <p>Why Choose Us? We transform your product packaging.
          Let{"’"}s make your product roar. Let{"’"}s make your product take
          the lead. Join us to be a Success Story. Join us, because
          We are an American packaging company for Americans.</p>
      </Container>
      <div className='container'>

        <div className='hide_section_tab'>
          <div className='grid_set'>
            <div className='inner_grid_set1'>
              <div className='inner_grid_data'>
                <h3>Free Design <br /> Support</h3>
                <p>We provide you with all-in packaging designs’ assistance. Our marvelous themes always come hand in hand with functionality and aesthetics</p>
              </div>
              <img src="/home/choose/design.webp" alt="about product image" />
            </div>
            <div className='inner_grid_set2'>
              <div className='inner_grid_data'>
                <h3 className='max_width_set'>E-Commerce Packaging Solutions</h3>
                <p>Shop ‘custom printed boxes with logo’ in bulk quantities and wholesale prices. We offer a lightweight, sturdier, easy unboxing and closing experience</p>
              </div>
              <img src="/home/choose/ecom.webp" alt="about product image" />
            </div>
            <div className='inner_grid_set3'>
              <div className='inner_grid_data'>
                <h3>Eco-Friendly <br /> Packaging</h3>
                <p>Print 247 is an environmentally responsible packaging company. We endorse the use of recyclable and sustainable materials for a greener planet</p>
              </div>
              <img src="/home/choose/eco.webp" alt="about product image" />
            </div>
            <div className='inner_grid_set4'>
              <div className='inner_grid_data'>
                <h3>Quick Turnaround <br /> Time</h3>
                <p>We are fast. We are quick. And we keep you updated till you receive the order/packaging products in your hands, which are shipped nationwide</p>
              </div>
              <img src="/home/choose/time.webp" alt="about product image" />
            </div>
          </div>
          <div className='grid_set2'>
            <div className='inner_grid_set5'>
              <div className='inner_grid_data'>
                <h3>Ideal Customer <br /> Support</h3>
                <p>We provide you with the most skillful customer support in the USA. Dial us, then let us make your dream packaging a reality with 247 support</p>
              </div>
              <img src="/home/choose/support.webp" alt="about product image" />
            </div>
            <div className='inner_grid_set6'>
              <div className='inner_grid_data'>
                <h3>Low MOQs</h3>
                <p>Our printing and packaging company offers the most pleasing low MOQs (Minimum Order Quantity) packages in the United States of America</p>
              </div>
              <img src="/home/choose/moqs.webp" alt="about product image" />
            </div>
          </div>
        </div>
        <div className='show_section_tab'>
          <div className='grid_set_show'>
            <div className='inner_grid_set_show1'>
              <img src="/home/choose/design.webp" alt="about product image" />
              <div className='inner_grid_data_show'>
                <h3>Free Design Support</h3>
                <p>We provide you with all-in packaging designs’ assistance. Our marvelous themes always come hand in hand with functionality and aesthetics</p>
              </div>
            </div>
            <div className='inner_grid_set_show2'>
              <img src="/home/choose/ecom.webp" alt="about product image" />
              <div className='inner_grid_data_show'>
                <h3 className='max_width_set'>E-Commerce Packaging Solutions</h3>
                <p>Shop ‘custom printed boxes with logo’ in bulk quantities and wholesale prices. We offer a lightweight, sturdier, easy unboxing and closing experience</p>
              </div>
            </div>
            <div className='inner_grid_set_show3'>
              <img src="/home/choose/eco.webp" alt="about product image" />
              <div className='inner_grid_data_show'>
                <h3>Eco-Friendly Packaging</h3>
                <p>Print 247 is an environmentally responsible packaging company. We endorse the use of recyclable and sustainable materials for a greener planet</p>
              </div>
            </div>
            <div className='inner_grid_set_show4'>
              <img src="/home/choose/time.webp" alt="about product image" />
              <div className='inner_grid_data_show'>
                <h3>Quick Turnaround Time</h3>
                <p>We are fast. We are quick. And we keep you updated till you receive the order/packaging products in your hands, which are shipped nationwide</p>
              </div>
            </div>
            <div className='inner_grid_set_show5'>
              <img src="/home/choose/support.webp" alt="about product image" />
              <div className='inner_grid_data_show'>
                <h3>Ideal Customer Support</h3>
                <p>We provide you with the most skillful customer support in the USA. Dial us, then let us make your dream packaging a reality with 247 support</p>
              </div>
            </div>
            <div className='inner_grid_set_show6'>
              <img src="/home/choose/moqs.webp" alt="about product image" />
              <div className='inner_grid_data_show'>
                <h3>Low MOQs</h3>
                <p>Our printing and packaging company offers the most pleasing low MOQs (Minimum Order Quantity) packages in the United States of America</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinesTwo