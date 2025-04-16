import { boxCompaignData } from '@/data/boxCompaignData';
import { useRouter } from 'next/router';
import React from 'react'
import { Container } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'

function ReviewsCustomers() {

  const router = useRouter();
  const { id } = router.query;

  return (
    <div className='main_reviews_customers'>
      <Container>
        <div className='data_reviews_customers'>
          <h3>{boxCompaignData?.[id]?.customers?.customersData}</h3>
          <p>{boxCompaignData?.[id]?.customers?.customersPara}</p>
          <div className="width_grid_set">
            <Marquee direction='right'>
              <div className='grid_reviews_customers'>
                <div className='inner_grid_customers'>
                  <div className='image_customer'>
                    <img src="/compainImage/custom boxes/ellipse1.png" alt="person image" />
                  </div>
                  <h4>Claudia alvis</h4>
                  <p>May 2, 2024 <span>|</span> <img src="/compainImage/custom boxes/verified.png" alt="verified" /> Verified Buyer</p>
                  <div className='lower_customer_description'>
                    <h5>Beautiful - Very Professional</h5>
                    <p>Extremely high quality. The print is clear and the colors are vibrant. The boxes are made of a sturdy cardboard adding to a professional look for your product.</p>
                  </div>
                </div>
              </div>
              <div className='grid_reviews_customers'>
                <div className='inner_grid_customers'>
                  <div className='image_customer'>
                    <img src="/compainImage/custom boxes/ellipse1.png" alt="person image" />
                  </div>
                  <h4>Claudia alvis</h4>
                  <p>May 2, 2024 <span>|</span> <img src="/compainImage/custom boxes/verified.png" alt="verified" /> Verified Buyer</p>
                  <div className='lower_customer_description'>
                    <h5>Beautiful - Very Professional</h5>
                    <p>Extremely high quality. The print is clear and the colors are vibrant. The boxes are made of a sturdy cardboard adding to a professional look for your product.</p>
                  </div>
                </div>
              </div>
              <div className='grid_reviews_customers'>
                <div className='inner_grid_customers'>
                  <div className='image_customer'>
                    <img src="/compainImage/custom boxes/ellipse1.png" alt="person image" />
                  </div>
                  <h4>Claudia alvis</h4>
                  <p>May 2, 2024 <span>|</span> <img src="/compainImage/custom boxes/verified.png" alt="verified" /> Verified Buyer</p>
                  <div className='lower_customer_description'>
                    <h5>Beautiful - Very Professional</h5>
                    <p>Extremely high quality. The print is clear and the colors are vibrant. The boxes are made of a sturdy cardboard adding to a professional look for your product.</p>
                  </div>
                </div>
              </div>
              <div className='grid_reviews_customers'>
                <div className='inner_grid_customers'>
                  <div className='image_customer'>
                    <img src="/compainImage/custom boxes/ellipse1.png" alt="person image" />
                  </div>
                  <h4>Claudia alvis</h4>
                  <p>May 2, 2024 <span>|</span> <img src="/compainImage/custom boxes/verified.png" alt="verified" /> Verified Buyer</p>
                  <div className='lower_customer_description'>
                    <h5>Beautiful - Very Professional</h5>
                    <p>Extremely high quality. The print is clear and the colors are vibrant. The boxes are made of a sturdy cardboard adding to a professional look for your product.</p>
                  </div>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ReviewsCustomers
